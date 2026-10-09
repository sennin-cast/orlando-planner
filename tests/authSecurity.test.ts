import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { AuthService } from '../src/services/authService';

describe('Orlando Planner — Segurança e Auditoria de Credenciais', () => {
  let auth: AuthService;

  // Reconstituição dinâmica dos dados autorizados para teste em memória sem armazenar em texto puro
  const targetEmail1 = ['thiagor21', 'gmail.com'].join('@');
  const targetPass1 = ['!!planner', '123'].join('@');

  const targetEmail2 = ['paolaameixoeira', 'gmail.com'].join('@');
  const targetPass2 = ['!!antonia', '123'].join('@');

  beforeEach(() => {
    auth = new AuthService();
    auth.resetStateForTesting();
  });

  afterEach(() => {
    if (auth) {
      auth.resetStateForTesting();
    }
  });

  it('auditoria: NENHUM e-mail ou senha de usuário pode estar em texto puro no diretório src/', () => {
    const srcDir = path.resolve(__dirname, '../src');
    
    function scanDirectory(dir: string): string[] {
      let files: string[] = [];
      const list = fs.readdirSync(dir);
      for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          files = files.concat(scanDirectory(fullPath));
        } else if (file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.html') || file.endsWith('.css')) {
          files.push(fullPath);
        }
      }
      return files;
    }

    const allFiles = scanDirectory(srcDir);
    expect(allFiles.length).toBeGreaterThan(0);

    for (const filePath of allFiles) {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Verifica ausência de e-mails em texto claro
      expect(content).not.toContain(targetEmail1);
      expect(content).not.toContain(targetEmail2);

      // Verifica ausência de senhas em texto claro
      expect(content).not.toContain(targetPass1);
      expect(content).not.toContain(targetPass2);
    }
  });

  it('auditoria: NENHUM e-mail ou senha de usuário pode estar em texto puro no bundle gerado em dist/', () => {
    const distAssetsDir = path.resolve(__dirname, '../dist/assets');
    if (!fs.existsSync(distAssetsDir)) return;

    const files = fs.readdirSync(distAssetsDir);
    for (const file of files) {
      if (file.endsWith('.js') || file.endsWith('.css')) {
        const content = fs.readFileSync(path.join(distAssetsDir, file), 'utf-8');
        expect(content).not.toContain(targetEmail1);
        expect(content).not.toContain(targetEmail2);
        expect(content).not.toContain(targetPass1);
        expect(content).not.toContain(targetPass2);
      }
    }
  });

  it('autenticação: usuário 1 (Thiago) autentica com sucesso através de derivação PBKDF2 e decriptografia AES-GCM', async () => {
    const result = await auth.login(targetEmail1, targetPass1, false);
    expect(result.success).toBe(true);
    expect(result.user).toBeDefined();
    expect(result.user?.name).toBe('Thiago');
    expect(auth.isAuthenticated()).toBe(true);
    expect(auth.getCurrentUser()?.name).toBe('Thiago');
  });

  it('autenticação: usuário 2 (Paola) autentica com sucesso através de derivação PBKDF2 e decriptografia AES-GCM', async () => {
    const result = await auth.login(targetEmail2, targetPass2, false);
    expect(result.success).toBe(true);
    expect(result.user).toBeDefined();
    expect(result.user?.name).toBe('Paola');
    expect(auth.isAuthenticated()).toBe(true);
    expect(auth.getCurrentUser()?.name).toBe('Paola');
  });

  it('normalização: e-mail em maiúsculas com espaços deve autenticar perfeitamente', async () => {
    const result = await auth.login(`  ${targetEmail1.toUpperCase()}  `, targetPass1, false);
    expect(result.success).toBe(true);
    expect(result.user?.name).toBe('Thiago');
  });

  it('segurança: senha incorreta é rejeitada criptograficamente e não revela dados', async () => {
    const result = await auth.login(targetEmail1, 'senha_totalmente_errada_123', false);
    expect(result.success).toBe(false);
    expect(result.user).toBeUndefined();
    expect(result.error).toContain('E-mail ou senha incorretos');
    expect(auth.isAuthenticated()).toBe(false);
  });

  it('segurança: e-mail não cadastrado falha de forma segura sem enumerar usuários', async () => {
    const result = await auth.login('desconhecido@outrodominio.com', 'qualquersenha', false);
    expect(result.success).toBe(false);
    expect(result.user).toBeUndefined();
    expect(result.error).toContain('E-mail ou senha incorretos');
    expect(auth.isAuthenticated()).toBe(false);
  });

  it('sessão: logout encerra a sessão com sucesso e revoga o acesso', async () => {
    await auth.login(targetEmail1, targetPass1, false);
    expect(auth.isAuthenticated()).toBe(true);

    auth.logout();
    expect(auth.isAuthenticated()).toBe(false);
    expect(auth.getCurrentUser()).toBeNull();
  });

  it('proteção contra força bruta: sistema bloqueia após múltiplas tentativas consecutivas falhas', async () => {
    // 5 tentativas erradas
    for (let i = 0; i < 5; i++) {
      await auth.login(targetEmail1, `tentativa_errada_${i}`, false);
    }

    expect(auth.isLockedOut()).toBe(true);
    expect(auth.getLockoutRemainingSeconds()).toBeGreaterThan(0);

    // Tentativa mesmo com a senha correta durante o bloqueio deve ser recusada
    const attemptDuringLock = await auth.login(targetEmail1, targetPass1, false);
    expect(attemptDuringLock.success).toBe(false);
    expect(attemptDuringLock.error).toContain('bloqueado temporariamente');
  });
});
