/**
 * Orlando Planner — Componente Visual de Login
 * Design premium com logo oficial, suporte a modo escuro/claro e feedback criptográfico.
 */

export function renderLoginView(errorMessage?: string, isLockedOut: boolean = false, lockoutSeconds: number = 0): string {
  const lockoutMsg = isLockedOut
    ? `
      <div class="mb-5 p-3.5 rounded-xl bg-error-container/20 border border-error/30 text-error flex items-start gap-2.5 text-xs animate-pulse">
        <span class="material-symbols-outlined text-[20px] text-error flex-shrink-0">shield_with_heart</span>
        <div>
          <span class="font-semibold block text-[13px]">Acesso Temporariamente Suspenso</span>
          Muitas tentativas sem sucesso. Aguarde <strong>${lockoutSeconds} segundos</strong> para tentar novamente.
        </div>
      </div>
    `
    : '';

  const normalErrorMsg = !isLockedOut && errorMessage
    ? `
      <div class="mb-5 p-3.5 rounded-xl bg-error-container/20 border border-error/30 text-error flex items-center gap-2.5 text-xs animate-shake">
        <span class="material-symbols-outlined text-[18px] text-error flex-shrink-0">error</span>
        <span>${errorMessage}</span>
      </div>
    `
    : '';

  return `
    <div class="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-surface via-surface-container-lowest to-surface-container-low">
      <!-- Background subtle decorative shapes -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div class="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"></div>
        <div class="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px]"></div>
      </div>

      <div class="w-full max-w-[440px] flex flex-col items-center">
        <!-- Brand Card -->
        <div class="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
          
          <!-- Official Logo Display -->
          <div class="flex flex-col items-center text-center mb-6">
            <div class="p-2 mb-2 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 shadow-xs">
              <img 
                src="./logo.png" 
                alt="Orlando Planner" 
                class="h-12 sm:h-14 w-auto object-contain select-none max-w-[260px]" 
                id="login-logo-img"
              />
            </div>
            <h1 class="font-headline-sm text-base sm:text-lg font-bold text-on-surface tracking-tight mt-1">
              Portal do Roteiro 2027
            </h1>
            <p class="font-caption text-xs text-outline mt-1">
              Acesso exclusivo para viajantes autorizados
            </p>
          </div>

          <!-- Lockout / Error alerts -->
          <div id="login-feedback-area">
            ${lockoutMsg}
            ${normalErrorMsg}
          </div>

          <!-- Login Form -->
          <form id="form-login" class="space-y-4" novalidate>
            <!-- E-mail Input -->
            <div>
              <label for="login-email" class="block font-label-md text-xs font-semibold text-on-surface mb-1.5">
                E-mail de Acesso
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                  <span class="material-symbols-outlined text-[19px]">mail</span>
                </div>
                <input 
                  type="email" 
                  id="login-email" 
                  name="email"
                  required
                  autocomplete="email"
                  placeholder="seu-email@dominio.com" 
                  class="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-outline-variant/50 bg-surface-container-low text-on-surface text-sm placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  ${isLockedOut ? 'disabled' : ''}
                />
              </div>
            </div>

            <!-- Password Input -->
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label for="login-password" class="block font-label-md text-xs font-semibold text-on-surface">
                  Senha
                </label>
                <span class="text-[11px] text-outline font-medium">Acesso Restrito</span>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                  <span class="material-symbols-outlined text-[19px]">lock</span>
                </div>
                <input 
                  type="password" 
                  id="login-password" 
                  name="password"
                  required
                  autocomplete="current-password"
                  placeholder="••••••••••••" 
                  class="w-full pl-10 pr-10 py-2.5 rounded-xl border border-outline-variant/50 bg-surface-container-low text-on-surface text-sm placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                  ${isLockedOut ? 'disabled' : ''}
                />
                <button 
                  type="button" 
                  id="btn-toggle-pwd" 
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface transition-colors focus:outline-none"
                  aria-label="Alternar visibilidade da senha"
                >
                  <span class="material-symbols-outlined text-[20px]" id="pwd-icon">visibility</span>
                </button>
              </div>
            </div>

            <!-- Remember me checkbox -->
            <div class="flex items-center justify-between pt-1">
              <label class="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  id="login-remember" 
                  class="w-4 h-4 rounded text-primary border-outline-variant/60 focus:ring-primary/30" 
                  checked 
                />
                <span class="font-body-sm text-xs text-on-surface-variant">Manter conectado neste navegador</span>
              </label>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <button 
                type="submit" 
                id="btn-login-submit" 
                class="w-full py-2.5 px-4 rounded-xl bg-primary text-on-primary hover:bg-primary/90 font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
                ${isLockedOut ? 'disabled' : ''}
              >
                <span class="material-symbols-outlined text-[18px]">key</span>
                <span id="btn-login-text">Acessar Meu Roteiro</span>
                <span id="btn-login-spinner" class="hidden animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
              </button>
            </div>
          </form>

          <!-- Security Footer Badge -->
          <div class="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-center gap-2 text-outline text-[11px]">
            <span class="material-symbols-outlined text-[15px] text-tertiary">lock</span>
            <span>Criptografia ponta a ponta AES-256 & PBKDF2</span>
          </div>
        </div>

        <!-- Privacy & Protection Note -->
        <p class="mt-4 text-center text-[11px] text-outline font-medium">
          Sistema protegido contra acesso não autorizado • Orlando Planner 2027
        </p>
      </div>
    </div>
  `;
}
