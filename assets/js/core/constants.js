/**
 * =====================================
 * ARQUIVO: assets/js/core/constants.js
 * 
 * PROPÓSITO:
 * Arquivo centralizado para armazenar constantes e configurações
 * que são utilizadas em toda a aplicação.
 * 
 * BENEFÍCIOS:
 * - Evita hardcoding de valores em código
 * - Facilita manutenção (alterar em um único local)
 * - Melhora legibilidade do código
 * - DRY Principle (Don't Repeat Yourself)
 * 
 * ORGANIZAÇÃO:
 * - CONFIG: configurações gerais
 * - SELECTORS: seletores CSS reutilizáveis
 * - CLASSES: classes CSS dinâmicas
 * =====================================
 */

/**
 * CONFIG
 * Objeto com configurações principais da aplicação
 * Estrutura permite expansão fácil de novas configurações
 */
export const CONFIG = {
    // ========================================
    // CONFIGURAÇÕES DE TEMA
    // ========================================
    // theme.default: qual tema usar por padrão (dark ou light)
    // theme.storageKey: chave de armazenamento no localStorage
    theme: {
        default: 'dark',              // Tema padrão: dark mode
        storageKey: 'theme'           // Chave para localStorage
    },

    // ========================================
    // CONFIGURAÇÕES DO EFEITO DE DIGITAÇÃO
    // ========================================
    // typing.phrases: array com as frases que serão digitadas
    // typing.typeSpeed: velocidade de digitação (ms)
    // typing.deleteSpeed: velocidade de apagamento (ms)
    // typing.pauseEnd: pausa após terminar de digitar (ms)
    // typing.pauseStart: pausa antes de iniciar próxima frase (ms)
    typing: {
        phrases: ['Data Analyst', 'Analista de Dados', 'Eng. Elétrica'],
        typeSpeed: 120,               // Digita 1 caractere a cada 120ms
        deleteSpeed: 50,              // Apaga 1 caractere a cada 50ms (mais rápido)
        pauseEnd: 2000,               // Pausa 2 segundos no final de cada frase
        pauseStart: 500               // Pausa 500ms antes de digitar próxima
    },

    // ========================================
    // CONFIGURAÇÕES DE ANIMAÇÃO
    // ========================================
    // Tempos de transição utilizados em toda a aplicação
    // Mantém consistência nas animações
    animation: {
        transitionFast: 200,          // Transições rápidas (200ms)
        transitionBase: 400           // Transições normais (400ms)
    },

    // ========================================
    // CONFIGURAÇÕES DE SCROLL
    // ========================================
    // scroll.behavior: tipo de scroll (smooth ou auto)
    scroll: {
        behavior: 'smooth'            // Scroll suave ao navegar
    }
};

/**
 * SELECTORS
 * Seletores CSS centralizados para evitar repetição
 * Se HTML mudar, altera aqui uma única vez
 */
export const SELECTORS = {
    // ========================================
    // SELECTORS DO HEADER
    // ========================================
    header: '.header',                // Container do header
    themeToggle: '.theme-toggle',     // Botão de toggle de tema
    themeIcon: '.theme-icon',         // Ícone do tema
    navLink: '.nav-link',             // Links de navegação

    // ========================================
    // SELECTORS DA HERO SECTION
    // ========================================
    heroTyping: '.hero-typing',       // Container do efeito de typing
    heroTypingText: '.hero-typing .text',   // Texto sendo digitado
    heroTypingCursor: '.hero-typing .cursor', // Cursor piscante

    // ========================================
    // SELECTORS GLOBAIS
    // ========================================
    container: '.container',          // Container principal
    section: 'section',               // Todas as seções
    bgGrid: '.bg-grid',               // Background grid pattern

    // ========================================
    // ATRIBUTOS
    // ========================================
    themeAttribute: 'data-theme'      // Atributo que armazena tema atual
};

/**
 * CLASSES
 * Classes CSS que são adicionadas/removidas dinamicamente via JavaScript
 * Mantém seletores de classe em um único local
 */
export const CLASSES = {
    // Classe para animação de rotação no botão de toggle
    animateSpin: 'animate-spin-once',
    
    // Classe para efeito de gradiente em texto
    textGradient: 'text-gradient'
};
