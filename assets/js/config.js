/**
 * Configuração global da aplicação
 */
export const APP_CONFIG = {
    // Configurações do efeito de digitação
    typing: {
        strings: ['Dados', 'Machine Learning', 'Analytics', 'Business Intelligence', 'Deep Learning'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 500,
        loop: true
    },
    
    // Configurações de animação
    animation: {
        scrollOffset: 100,
        debounceDelay: 10
    },
    
    // Configurações do tema
    theme: {
        storageKey: 'portfolio-theme',
        defaultTheme: 'light'
    }
};