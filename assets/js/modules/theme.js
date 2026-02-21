/**
 * =====================================
 * ARQUIVO: assets/js/modules/theme.js
 * 
 * PROPÓSITO:
 * Gerencia o sistema de tema (dark/light mode) da página.
 * Responsável por:
 * - Detectar tema salvo do usuário
 * - Aplicar tema ao documento
 * - Alternar entre temas com animação
 * - Persistir preferência no localStorage
 * 
 * FLOW:
 * 1. initTheme() é chamado ao carregar a página
 * 2. getSavedTheme() detecta tema anterior
 * 3. Apply tema ao <html data-theme="dark">
 * 4. User clica no toggle
 * 5. Anima transição
 * 6. Salva nova preferência
 * =====================================
 */

// Importa funções de manipulação do DOM
import { getElement, getAttribute, setAttribute, addClass, removeClass } from '../core/dom.js';

// Importa configurações de tema
import { getSavedTheme, getOppositeTheme } from '../config/theme-config.js';

/**
 * Inicializa o sistema de tema
 * 
 * PROCESSO:
 * 1. Obtém elemento <html> do documento
 * 2. Busca tema salvo no localStorage
 * 3. Aplica tema ao documento
 * 4. Atualiza ícone (lua ou sol)
 * 5. Adiciona listener ao botão de toggle
 * 6. Gerencia animação de transição
 * 
 * EXEMPLO DE USO:
 * initTheme(); // Chama 1x ao carregar página
 */
export function initTheme() {
    // ========================================
    // 1. OBTER ELEMENTOS
    // ========================================
    // Botão que o usuário clica para alternar tema
    const themeToggle = getElement('.theme-toggle');
    
    // Se não encontrou botão, não faz nada
    if (!themeToggle) return;

    // Ícone dentro do botão (será substituído)
    const icon = getElement('.theme-icon', themeToggle);

    // ========================================
    // 2. APLICAR TEMA SALVO
    // ========================================
    // Detecta qual tema usar: localStorage > padrão (dark)
    const savedTheme = getSavedTheme();
    
    // Aplica ao atributo data-theme do <html>
    // CSS usa [data-theme="dark"] { ... } para estilizar
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Atualiza ícone (lua para dark, sol para light)
    updateIcon(savedTheme);

    // ========================================
    // 3. ADICIONAR LISTENER AO BOTÃO
    // ========================================
    // Quando clica no botão, faz a transição
    themeToggle.addEventListener('click', () => {
        // Tema atual (dark ou light)
        const currentTheme = getAttribute(document.documentElement, 'data-theme');
        
        // Tema oposto
        const newTheme = getOppositeTheme(currentTheme);

        // ====================================
        // 4. ANIMAR TRANSIÇÃO
        // ====================================
        // Seleciona o ícone SVG ou elemento <i>
        const currentIcon = getElement('svg', themeToggle) || getElement('i', themeToggle);
        
        // Se encontrou ícone, adiciona classe de animação
        if (currentIcon) {
            addClass(currentIcon, 'animate-spin-once');
            // CSS: @keyframes rotateScale transforma ícone
        }

        // ====================================
        // 5. APLICAR NOVO TEMA
        // ====================================
        // Muda atributo data-theme (CSS responde)
        setAttribute(document.documentElement, 'data-theme', newTheme);
        
        // Salva preferência no localStorage
        localStorage.setItem('theme', newTheme);

        // ====================================
        // 6. ATUALIZAR ÍCONE COM DELAY
        // ====================================
        // Aguarda meio da animação para trocar ícone
        setTimeout(() => {
            // Atualiza ícone (lua->sol ou sol->lua)
            updateIcon(newTheme);
            
            // 300ms depois, remove classe de animação
            setTimeout(() => {
                if (currentIcon) {
                    removeClass(currentIcon, 'animate-spin-once');
                }
            }, 300);
        }, 300);
    });

    // ========================================
    // 7. FUNÇÃO INTERNA: ATUALIZAR ÍCONE
    // ========================================
    /**
     * Atualiza o ícone Lucide dentro do botão
     * 
     * LÓGICA:
     * - Dark mode -> ícone lua (moon)
     * - Light mode -> ícone sol (sun)
     * 
     * @param {string} theme - 'dark' ou 'light'
     */
    function updateIcon(theme) {
        if (!themeToggle) return;

        // Limpa conteúdo do botão
        themeToggle.innerHTML = '';

        // Cria novo elemento <i> com Lucide
        const newIcon = document.createElement('i');
        
        // Define qual ícone mostrar
        // data-lucide é lido pela biblioteca Lucide
        newIcon.setAttribute('data-lucide', theme === 'dark' ? 'moon' : 'sun');
        newIcon.className = 'theme-icon';

        // Adiciona ícone ao botão
        themeToggle.appendChild(newIcon);

        // Renderiza ícone Lucide (biblioteca global)
        if (window.lucide) {
            lucide.createIcons();
            // lucide.createIcons() busca todos [data-lucide] e
            // substitui por SVGs animados
        }
    }
}
