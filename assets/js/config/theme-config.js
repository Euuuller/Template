/**
 * =====================================
 * ARQUIVO: assets/js/config/theme-config.js
 * 
 * PROPÓSITO:
 * Arquivo centralizado para configuração do sistema de tema.
 * Armazena definições de temas disponíveis, cores e mais.
 * 
 * ESTRUTURA:
 * - THEME_CONFIG: objeto com todas as configurações
 * - getSavedTheme(): retorna tema salvo do localStorage
 * - getOppositeTheme(): retorna o tema oposto (dark<->light)
 * =====================================
 */

/**
 * THEME_CONFIG
 * Configuração centralizada do sistema de tema
 * Mantém todas as definições em um único lugar
 */
export const THEME_CONFIG = {
    // ========================================
    // TEMAS DISPONÍVEIS
    // ========================================
    // Array com todos os temas aceitos
    // Se quiser adicionar novo tema (ex: 'sepia'), adicione aqui
    themes: ['light', 'dark'],

    // ========================================
    // TEMA PADRÃO
    // ========================================
    // Qual tema usar se o usuário nunca acessou
    // Ou se houver erro ao ler localStorage
    default: 'dark',

    // ========================================
    // CHAVE DE ARMAZENAMENTO
    // ========================================
    // Chave usada no localStorage
    // localStorage.getItem('theme') retorna 'light' ou 'dark'
    storageKey: 'theme',

    // ========================================
    // ATRIBUTO NO DOCUMENTO
    // ========================================
    // Atributo HTML que armazena o tema atual
    // <html data-theme="dark">
    // CSS usa: [data-theme="dark"] { ... }
    attribute: 'data-theme',

    // ========================================
    // CORES POR TEMA
    // ========================================
    // Cores primárias e secundárias de cada tema
    // Útil se precisar de JavaScript para acessar cores
    colors: {
        light: {
            bg: '#f8fafc',              // Background claro
            text: '#0f172a',            // Texto escuro
            primary: '#3b82f6'          // Azul primário
        },
        dark: {
            bg: '#000000',              // Background escuro (preto absoluto)
            text: '#f8fafc',            // Texto claro
            primary: '#3b82f6'          // Azul primário (mesmo em ambos)
        }
    },

    // ========================================
    // TRANSIÇÕES
    // ========================================
    // Tempos de transição para mudança de tema
    // Coordena com CSS var(--transition-fast) e var(--transition-base)
    transitions: {
        fast: '200ms',                  // Transição rápida
        base: '400ms'                   // Transição normal
    }
};

/**
 * Obtém o tema salvo no localStorage
 * 
 * FLUXO:
 * 1. Verifica localStorage pela chave 'theme'
 * 2. Se não encontrar, retorna tema padrão ('dark')
 * 3. Se encontrar valor inválido, retorna padrão
 * 
 * @returns {string} Tema atual ('light' ou 'dark')
 * 
 * EXEMPLO:
 * const savedTheme = getSavedTheme();
 * // Retorna: 'light' ou 'dark'
 */
export function getSavedTheme() {
    // Tenta obter do localStorage
    const saved = localStorage.getItem(THEME_CONFIG.storageKey);
    
    // Se existe e é um valor válido, retorna
    if (saved && THEME_CONFIG.themes.includes(saved)) {
        return saved;
    }
    
    // Senão, retorna padrão
    return THEME_CONFIG.default;
}

/**
 * Retorna o tema oposto
 * 
 * LÓGICA:
 * - Se atual é 'dark', retorna 'light'
 * - Se atual é 'light', retorna 'dark'
 * 
 * @param {string} currentTheme - Tema atual ('light' ou 'dark')
 * @returns {string} Tema oposto
 * 
 * EXEMPLO:
 * const opposite = getOppositeTheme('dark');
 * // Retorna: 'light'
 * 
 * const opposite2 = getOppositeTheme('light');
 * // Retorna: 'dark'
 */
export function getOppositeTheme(currentTheme) {
    return currentTheme === 'dark' ? 'light' : 'dark';
}
