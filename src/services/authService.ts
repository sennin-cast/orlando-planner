/**
 * Orlando Planner — Serviço Criptográfico de Autenticação Segura
 * Padrão Zero-Plaintext: Nenhuma credencial ou e-mail é armazenado em texto claro.
 * Primitivas: SHA-256 (Lookup Hash com Pepper), PBKDF2-HMAC-SHA256 (120.000 iterações), AES-256-GCM.
 */

export interface AuthenticatedUser {
  name: string;
  email: string;
  role: string;
  sessionId: string;
  loginTime: number;
  expiresAt: number;
}

export interface EncryptedUserRecord {
  id: string;
  lookupHash: string;
  salt: string;
  iv: string;
  ciphertext: string;
  iterations: number;
}

// Registros de usuários criptografados (NIST AES-256-GCM / PBKDF2 com 120.000 iterações)
// Nenhum e-mail ou senha está presente em texto puro no código-fonte ou no repositório.
const ENCRYPTED_VAULT_RECORDS: EncryptedUserRecord[] = [
  {
    id: 'usr_460bb20fe563',
    lookupHash: 'a1a0bcf457f22d00d62e10076a690a6644864b234b79a91360c1c8b61fb2d4ac',
    salt: 'fefcf8477c70967f63c52bae405de7b9',
    iv: 'd743ff6486d566abac5c6bfd',
    ciphertext: '64fff288efec56fc0b2eea47065f59c242ec6eba95b98544b7418ef7dc6897e1a047399345f33ad5a5aa4af931a93a876224b4b022a3b864a0362a6547e08b86ffb4c80dc5182e1fe4cadd10',
    iterations: 120000,
  },
  {
    id: 'usr_cbfad4c7a5b9',
    lookupHash: 'e21acb86b677b8deb6d8537389b4900fcfc8b448b7e2f668ebbc6f6588642ddf',
    salt: '69ecdf527a73ff9eda4c6be0ef779562',
    iv: '668b7ef108d299dab7a1a377',
    ciphertext: '802b5e0fe5f8fa212a7effda797ea02ca62ffdab9a3d6ffe19c5cfcde5995b168cd5b136dd3e8151611038a47d5cf356a3ae02beb9c6ebbaa80344494fb06c47ed53b3150060521ef18e2bbe960ffcc1d8',
    iterations: 120000,
  },
];

const PEPPER = 'orlando-planner-salt-v1:';
const SESSION_STORAGE_KEY = 'orlando_planner_session_v1';
const ATTEMPTS_STORAGE_KEY = 'orlando_planner_auth_fail_v1';
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60 * 1000; // 60 segundos
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 dias

// Mecanismo resiliente de persistência com fallback em memória (funciona no browser e no Node/Vitest)
const memoryStore = new Map<string, string>();

function safeGetItem(key: string, isSession: boolean = false): string | null {
  try {
    if (!isSession && typeof window !== 'undefined' && window.localStorage) {
      const val = window.localStorage.getItem(key);
      if (val !== null) return val;
    } else if (isSession && typeof window !== 'undefined' && window.sessionStorage) {
      const val = window.sessionStorage.getItem(key);
      if (val !== null) return val;
    }
  } catch {
    // Fallback
  }
  return memoryStore.get(key) || null;
}

function safeSetItem(key: string, value: string, isSession: boolean = false): void {
  memoryStore.set(key, value);
  try {
    if (!isSession && typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
    } else if (isSession && typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(key, value);
    }
  } catch {
    // Fallback
  }
}

function safeRemoveItem(key: string): void {
  memoryStore.delete(key);
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(key);
    }
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.removeItem(key);
    }
  } catch {
    // Fallback
  }
}

function getSubtleCrypto(): SubtleCrypto {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    return window.crypto.subtle;
  }
  if (typeof globalThis !== 'undefined' && globalThis.crypto && globalThis.crypto.subtle) {
    return globalThis.crypto.subtle;
  }
  throw new Error('Ambiente não possui suporte à API Web Crypto.');
}

function hexToBuf(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

function bufToHex(buffer: ArrayBuffer | Uint8Array): string {
  const arr = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  return Array.from(arr)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function getRandomBytes(length: number): Uint8Array {
  const bytes = new Uint8Array(length);
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(bytes);
  } else if (typeof globalThis !== 'undefined' && globalThis.crypto) {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  return bytes;
}

export class AuthService {
  private currentUser: AuthenticatedUser | null = null;

  constructor() {
    this.restoreSession();
  }

  /**
   * Calcula o hash SHA-256 do e-mail normalizado com Pepper.
   */
  public async computeLookupHash(email: string): Promise<string> {
    const normalized = email.trim().toLowerCase();
    const encoder = new TextEncoder();
    const subtle = getSubtleCrypto();
    const hashBuf = await subtle.digest('SHA-256', encoder.encode(PEPPER + normalized));
    return bufToHex(hashBuf);
  }

  /**
   * Tenta decodificar o payload AES-256-GCM derivando a chave PBKDF2 com a senha informada.
   */
  private async attemptDecryptRecord(
    password: string,
    record: EncryptedUserRecord
  ): Promise<{ valid: boolean; name: string; email: string } | null> {
    try {
      const subtle = getSubtleCrypto();
      const encoder = new TextEncoder();

      // 1. Importa a senha em formato raw para derivação
      const keyMaterial = await subtle.importKey(
        'raw',
        encoder.encode(password.trim()),
        { name: 'PBKDF2' },
        false,
        ['deriveKey']
      );

      // 2. Deriva a chave AES-GCM usando PBKDF2-HMAC-SHA256
      const saltBytes = hexToBuf(record.salt);
      const aesKey = await subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt: saltBytes as unknown as BufferSource,
          iterations: record.iterations,
          hash: 'SHA-256',
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
      );

      // 3. Descriptografa com AES-GCM
      const ivBytes = hexToBuf(record.iv);
      const ciphertextBytes = hexToBuf(record.ciphertext);

      const decryptedBuf = await subtle.decrypt(
        { name: 'AES-GCM', iv: ivBytes as unknown as BufferSource },
        aesKey,
        ciphertextBytes as unknown as BufferSource
      );

      const jsonStr = new TextDecoder().decode(decryptedBuf);
      const parsed = JSON.parse(jsonStr);
      if (parsed && parsed.valid === true && parsed.name) {
        return parsed;
      }
      return null;
    } catch {
      // Qualquer falha de autenticação AES-GCM ou tag inválida cai aqui
      return null;
    }
  }

  /**
   * Executa a autenticação com controle de tentativas e proteção contra timing attacks.
   */
  public async login(
    emailInput: string,
    passwordInput: string,
    rememberMe: boolean = true
  ): Promise<{ success: boolean; user?: AuthenticatedUser; error?: string }> {
    // 1. Verifica bloqueio temporário contra força bruta
    if (this.isLockedOut()) {
      const remainingSec = this.getLockoutRemainingSeconds();
      return {
        success: false,
        error: `Muitas tentativas incorretas. Sistema bloqueado temporariamente por ${remainingSec}s para segurança.`,
      };
    }

    const email = emailInput ? emailInput.trim().toLowerCase() : '';
    const password = passwordInput ? passwordInput.trim() : '';

    if (!email || !password) {
      return { success: false, error: 'Por favor, informe seu e-mail e senha de acesso.' };
    }

    const startTime = Date.now();

    // 2. Busca pelo hash de busca cega (Blind Index SHA-256)
    const lookupHash = await this.computeLookupHash(email);
    const matchedRecord = ENCRYPTED_VAULT_RECORDS.find((r) => r.lookupHash === lookupHash);

    let decryptedProfile: { valid: boolean; name: string; email: string } | null = null;

    if (matchedRecord) {
      decryptedProfile = await this.attemptDecryptRecord(password, matchedRecord);
    } else {
      // Realiza derivação dummy para mitigar timing attacks contra enumeração de usuários
      const dummySalt = new Uint8Array(16);
      try {
        const subtle = getSubtleCrypto();
        const dummyKey = await subtle.importKey(
          'raw',
          new TextEncoder().encode(password),
          { name: 'PBKDF2' },
          false,
          ['deriveKey']
        );
        await subtle.deriveKey(
          { name: 'PBKDF2', salt: dummySalt as unknown as BufferSource, iterations: 10000, hash: 'SHA-256' },
          dummyKey,
          { name: 'AES-GCM', length: 256 },
          false,
          ['decrypt']
        );
      } catch {
        // Ignora erro dummy
      }
    }

    // Garante delay mínimo para evitar força bruta automatizada rápida
    const elapsed = Date.now() - startTime;
    if (elapsed < 350) {
      await new Promise((resolve) => setTimeout(resolve, 350 - elapsed));
    }

    // 3. Verifica resultado
    if (!decryptedProfile) {
      this.currentUser = null;
      this.recordFailedAttempt();
      const attemptsLeft = this.getRemainingAttempts();
      if (attemptsLeft <= 0) {
        return {
          success: false,
          error: `Credenciais inválidas. Sistema bloqueado por 60s por excesso de tentativas.`,
        };
      }
      return {
        success: false,
        error: `E-mail ou senha incorretos. Tentativas restantes: ${attemptsLeft}.`,
      };
    }

    // 4. Sucesso: limpa tentativas e cria sessão segura
    this.clearFailedAttempts();

    const sessionId = bufToHex(getRandomBytes(16));
    const now = Date.now();
    const user: AuthenticatedUser = {
      name: decryptedProfile.name,
      email: decryptedProfile.email,
      role: 'viajante',
      sessionId,
      loginTime: now,
      expiresAt: now + SESSION_TTL_MS,
    };

    this.currentUser = user;
    this.saveSession(user, rememberMe);

    return { success: true, user };
  }

  /**
   * Desconecta o usuário e limpa o armazenamento.
   */
  public logout(): void {
    this.currentUser = null;
    safeRemoveItem(SESSION_STORAGE_KEY);
  }

  public isAuthenticated(): boolean {
    if (!this.currentUser) return false;
    if (Date.now() > this.currentUser.expiresAt) {
      this.logout();
      return false;
    }
    return true;
  }

  public getCurrentUser(): AuthenticatedUser | null {
    if (!this.isAuthenticated()) return null;
    return this.currentUser;
  }

  // --- Gerenciamento de Sessão ---

  private saveSession(user: AuthenticatedUser, rememberMe: boolean): void {
    const payload = JSON.stringify(user);
    safeSetItem(SESSION_STORAGE_KEY, payload, !rememberMe);
  }

  private restoreSession(): void {
    try {
      const raw = safeGetItem(SESSION_STORAGE_KEY, false) || safeGetItem(SESSION_STORAGE_KEY, true);
      if (raw) {
        const parsed: AuthenticatedUser = JSON.parse(raw);
        if (parsed && parsed.sessionId && parsed.expiresAt && Date.now() < parsed.expiresAt) {
          this.currentUser = parsed;
        } else {
          this.logout();
        }
      }
    } catch {
      this.currentUser = null;
    }
  }

  // --- Proteção contra Força Bruta & Bloqueio ---

  public isLockedOut(): boolean {
    try {
      const raw = safeGetItem(ATTEMPTS_STORAGE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (data.lockoutUntil && Date.now() < data.lockoutUntil) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  public getLockoutRemainingSeconds(): number {
    try {
      const raw = safeGetItem(ATTEMPTS_STORAGE_KEY);
      if (!raw) return 0;
      const data = JSON.parse(raw);
      if (data.lockoutUntil && Date.now() < data.lockoutUntil) {
        return Math.ceil((data.lockoutUntil - Date.now()) / 1000);
      }
      return 0;
    } catch {
      return 0;
    }
  }

  public getRemainingAttempts(): number {
    try {
      const raw = safeGetItem(ATTEMPTS_STORAGE_KEY);
      if (!raw) return MAX_FAILED_ATTEMPTS;
      const data = JSON.parse(raw);
      if (data.lockoutUntil && Date.now() < data.lockoutUntil) {
        return 0;
      }
      const count = Number(data.count) || 0;
      return Math.max(0, MAX_FAILED_ATTEMPTS - count);
    } catch {
      return MAX_FAILED_ATTEMPTS;
    }
  }

  private recordFailedAttempt(): void {
    try {
      let count = 0;
      const raw = safeGetItem(ATTEMPTS_STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        count = Number(data.count) || 0;
      }
      count++;
      const updateData: { count: number; lockoutUntil?: number } = { count };
      if (count >= MAX_FAILED_ATTEMPTS) {
        updateData.lockoutUntil = Date.now() + LOCKOUT_DURATION_MS;
      }
      safeSetItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(updateData));
    } catch {
      // Ignora erro
    }
  }

  private clearFailedAttempts(): void {
    safeRemoveItem(ATTEMPTS_STORAGE_KEY);
  }

  /**
   * Reseta o estado em memória e storages para execução de testes limpos.
   */
  public resetStateForTesting(): void {
    this.currentUser = null;
    memoryStore.clear();
    safeRemoveItem(ATTEMPTS_STORAGE_KEY);
    safeRemoveItem(SESSION_STORAGE_KEY);
  }
}

export const authService = new AuthService();
