/**
 * ==========================================
 * MÓDULO DE TEMA CLARO/ESCURO
 * ==========================================
 */

import { APP_CONFIG } from '../config.js';

let currentTheme;
let themeToggle = null;

/**
 * Detecta a preferência de tema do sistema
 * @returns {string} 'light' ou 'dark'
 */
function getSystemTheme() {
    try {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    } catch (error) {
        console.warn('Não foi possível detectar preferência do sistema:', error);
        return APP_CONFIG.theme.defaultTheme;
    }
}

/**
 * Obtém o tema armazenado no localStorage.
 * @returns {string | null} O tema armazenado ou nulo.
 */
function getStoredTheme() {
    try {
        return localStorage.getItem(APP_CONFIG.theme.storageKey);
    } catch (error) {
        console.warn('LocalStorage não disponível:', error);
        return null;
    }
}

/**
 * Salva o tema no localStorage.
 * @param {string} theme O tema a ser salvo ('light' or 'dark').
 */
function setStoredTheme(theme) {
    try {
        localStorage.setItem(APP_CONFIG.theme.storageKey, theme);
    } catch (error) {
        console.warn('Não foi possível salvar o tema:', error);
    }
}

/**
 * Aplica o tema ao documento.
 * @param {string} theme O tema a ser aplicado ('light' ou 'dark').
 */
function applyTheme(theme) {
    try {
        document.documentElement.setAttribute('data-theme', theme);
        currentTheme = theme;
        setStoredTheme(theme);
        
        // Atualiza ícones do toggle
        updateThemeIcons(theme);
    } catch (error) {
        console.error('Erro ao aplicar tema:', error);
    }
}

/**
 * Atualiza os ícones do botão de toggle baseado no tema atual
 * @param {string} theme O tema atual
 */
function updateThemeIcons(theme) {
    try {
        if (!themeToggle) return;
        
        const lightIcon = themeToggle.querySelector('#theme-icon-light');
        const darkIcon = themeToggle.querySelector('#theme-icon-dark');
        
        if (lightIcon && darkIcon) {
            if (theme === 'dark') {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'block';
            } else {
                lightIcon.style.display = 'block';
                darkIcon.style.display = 'none';
            }
        }
    } catch (error) {
        console.warn('Erro ao atualizar ícones do tema:', error);
    }
}

/**
 * Alterna entre o tema claro e escuro.
 */
function toggleTheme() {
    try {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    } catch (error) {
        console.error('Erro ao alternar tema:', error);
    }
}

/**
 * Inicializa o sistema de temas.
 * Detecta preferência do sistema ou usa tema salvo.
 */
export function initTheme() {
    try {
        themeToggle = document.getElementById('theme-toggle');
        
        if (!themeToggle) {
            console.warn('Botão de toggle de tema não encontrado');
            return;
        }
        
        // Prioridade: tema salvo > preferência do sistema > padrão
        const storedTheme = getStoredTheme();
        const systemTheme = getSystemTheme();
        currentTheme = storedTheme || systemTheme || APP_CONFIG.theme.defaultTheme;
        
        applyTheme(currentTheme);
        
        // Listener para mudanças na preferência do sistema (se não houver tema salvo)
        if (!storedTheme && window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (!getStoredTheme()) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    applyTheme(newTheme);
                }
            });
        }
        
        themeToggle.addEventListener('click', toggleTheme);

    } catch (error) {
        console.error('Erro na inicialização do tema:', error);
    }
}