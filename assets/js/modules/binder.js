/**
 * =====================================
 * MODULE: binder.js
 * PROPÓSITO: Motor de Injeção de Dados (Data Binding).
 * Lê todos os elementos HTML com o atributo `data-bind-*`
 * e preenche automaticamente utilizando o arquivo portfolio.js.
 * =====================================
 */

import { portfolioData } from '../data/portfolio.js';

// Utilitário interno: Resolve paths aninhados num objeto ("contact.details.github")
function getNestedProperty(obj, path) {
    if (!path) return undefined;
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export function initDataBinder() {
    // ========================================
    // 1. INJETAR TEXTO PURO
    // Procura por <tag data-bind="secao.campo">
    // Ex: <h1 data-bind="hero.title"></h1>
    // ========================================
    document.querySelectorAll('[data-bind]').forEach(el => {
        const path = el.getAttribute('data-bind');
        const value = getNestedProperty(portfolioData, path);

        if (value !== undefined && value !== null) {
            el.textContent = value;
        } else {
            console.warn(`[DataBinder] Valor não encontrado para data-bind="${path}"`);
        }
    });

    // ========================================
    // 2. INJETAR HTML (Com tags internas)
    // Usado para blocos de texto que possuem <span> <a> etc.
    // Ex: <p data-bind-html="hero.descriptionHtml"></p>
    // ========================================
    document.querySelectorAll('[data-bind-html]').forEach(el => {
        const path = el.getAttribute('data-bind-html');
        const value = getNestedProperty(portfolioData, path);

        if (value !== undefined && value !== null) {
            el.innerHTML = value;
        }
    });

    // ========================================
    // 3. INJETAR LINKS (href)
    // Usado para botões e tags <a>
    // Ex: <a data-bind-href="profile.github">
    // ========================================
    document.querySelectorAll('[data-bind-href]').forEach(el => {
        const path = el.getAttribute('data-bind-href');
        const value = getNestedProperty(portfolioData, path);

        if (value !== undefined && value !== null) {
            // Auto add mailto: if rendering email
            if (path.includes('email') && !value.startsWith('mailto:')) {
                el.href = `mailto:${value}`;
            } else {
                el.href = value;
            }
        }
    });

    // ========================================
    // 4. INJETAR IMAGENS (src)
    // Ex: <img data-bind-src="profile.avatar" />
    // ========================================
    document.querySelectorAll('[data-bind-src]').forEach(el => {
        const path = el.getAttribute('data-bind-src');
        const value = getNestedProperty(portfolioData, path);

        if (value !== undefined && value !== null) {
            el.src = value;
        }
    });
}
