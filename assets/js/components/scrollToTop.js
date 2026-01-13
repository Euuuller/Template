/**
 * ==========================================
 * MÓDULO DO BOTÃO VOLTAR AO TOPO
 * ==========================================
 */

import { throttle } from '../utils/throttle.js';

const SELECTOR = '#scroll-to-top';
const SCROLL_THRESHOLD = 300; // Mostra o botão após 300px de scroll

let scrollToTopBtn = null;

/**
 * Rola a página suavemente até o topo
 */
function handleScrollToTop() {
    try {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } catch (error) {
        console.error('Erro ao rolar para o topo:', error);
    }
}

/**
 * Atualiza a visibilidade do botão baseado na posição do scroll
 */
function updateButtonVisibility() {
    try {
        if (!scrollToTopBtn) return;
        
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const shouldShow = scrollY > SCROLL_THRESHOLD;
        
        scrollToTopBtn.classList.toggle('visible', shouldShow);
        scrollToTopBtn.setAttribute('aria-hidden', (!shouldShow).toString());
    } catch (error) {
        console.error('Erro ao atualizar visibilidade do botão:', error);
    }
}

/**
 * Inicializa o botão de voltar ao topo
 */
export function initScrollToTop() {
    try {
        scrollToTopBtn = document.querySelector(SELECTOR);
        
        if (!scrollToTopBtn) {
            console.warn('Botão de voltar ao topo não encontrado');
            return;
        }
        
        // Event listener para clique
        scrollToTopBtn.addEventListener('click', handleScrollToTop);
        
        // Atualiza visibilidade com throttle para performance
        const throttledUpdate = throttle(updateButtonVisibility, 100);
        window.addEventListener('scroll', throttledUpdate, { passive: true });
        
        // Verifica visibilidade inicial
        updateButtonVisibility();
        
    } catch (error) {
        console.error('Erro na inicialização do botão voltar ao topo:', error);
    }
}