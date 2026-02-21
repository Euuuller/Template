/**
 * =====================================
 * ARQUIVO: assets/js/core/dom.js
 * 
 * PROPÓSITO:
 * Módulo com funções auxiliares para manipulação do DOM.
 * Abstrai as operações nativas do JavaScript DOM para
 * uma API mais limpa e reutilizável.
 * 
 * BENEFÍCIOS:
 * - Código mais limpo e legível
 * - Menos repetição (DRY)
 * - Facilita manutenção e refatoração
 * - Padroniza como o código manipula o DOM
 * 
 * CATEGORIAS DE FUNÇÕES:
 * 1. Seleção de elementos
 * 2. Manipulação de classes
 * 3. Atributos
 * 4. Limpeza e criação
 * 5. Event listeners
 * 6. Scroll
 * =====================================
 */

// ========================================
// 1. SELEÇÃO DE ELEMENTOS
// ========================================

/**
 * Obtém um único elemento do DOM
 * @param {string} selector - Seletor CSS (ex: '.classe', '#id', 'div')
 * @returns {Element|null} Elemento encontrado ou null
 * 
 * EXEMPLO:
 * const header = getElement('.header');
 */
export function getElement(selector) {
    return document.querySelector(selector);
}

/**
 * Obtém múltiplos elementos do DOM
 * @param {string} selector - Seletor CSS
 * @returns {NodeList} Lista de elementos encontrados
 * 
 * EXEMPLO:
 * const buttons = getElements('.btn');
 * buttons.forEach(btn => console.log(btn));
 */
export function getElements(selector) {
    return document.querySelectorAll(selector);
}

// ========================================
// 2. MANIPULAÇÃO DE CLASSES CSS
// ========================================

/**
 * Verifica se elemento possui uma classe
 * @param {Element} element - Elemento do DOM
 * @param {string} className - Nome da classe
 * @returns {boolean} true se tem a classe, false caso contrário
 */
export function hasClass(element, className) {
    return element.classList.contains(className);
}

/**
 * Adiciona uma classe ao elemento
 * @param {Element} element - Elemento do DOM
 * @param {string} className - Nome da classe
 * 
 * EXEMPLO:
 * addClass(element, 'active');
 */
export function addClass(element, className) {
    element.classList.add(className);
}

/**
 * Remove uma classe do elemento
 * @param {Element} element - Elemento do DOM
 * @param {string} className - Nome da classe
 * 
 * EXEMPLO:
 * removeClass(element, 'hidden');
 */
export function removeClass(element, className) {
    element.classList.remove(className);
}

/**
 * Adiciona ou remove uma classe (toggle)
 * Se elemento tem a classe, remove. Se não tem, adiciona.
 * @param {Element} element - Elemento do DOM
 * @param {string} className - Nome da classe
 * 
 * EXEMPLO:
 * toggleClass(menu, 'open'); // Abre/fecha menu
 */
export function toggleClass(element, className) {
    element.classList.toggle(className);
}

// ========================================
// 3. MANIPULAÇÃO DE ATRIBUTOS
// ========================================

/**
 * Define um atributo no elemento
 * @param {Element} element - Elemento do DOM
 * @param {string} attribute - Nome do atributo (ex: 'data-theme', 'aria-label')
 * @param {string} value - Valor do atributo
 * 
 * EXEMPLO:
 * setAttribute(html, 'data-theme', 'light');
 */
export function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
}

/**
 * Obtém o valor de um atributo
 * @param {Element} element - Elemento do DOM
 * @param {string} attribute - Nome do atributo
 * @returns {string|null} Valor do atributo ou null
 * 
 * EXEMPLO:
 * const theme = getAttribute(html, 'data-theme');
 */
export function getAttribute(element, attribute) {
    return element.getAttribute(attribute);
}

// ========================================
// 4. CRIAÇÃO E LIMPEZA DE ELEMENTOS
// ========================================

/**
 * Limpa todo o conteúdo HTML de um elemento
 * @param {Element} element - Elemento do DOM
 * 
 * EXEMPLO:
 * const container = getElement('.hero-typing');
 * clear(container); // Remove todo conteúdo
 */
export function clear(element) {
    element.innerHTML = '';
}

/**
 * Cria um novo elemento HTML com opções
 * @param {string} tag - Tag HTML (ex: 'div', 'span', 'i')
 * @param {object} options - Opções para o elemento
 *   - className: 'classe' ou ['classe1', 'classe2']
 *   - text: 'texto que aparece'
 *   - html: '<b>HTML aqui</b>'
 *   - attributes: { 'data-id': '1', 'aria-label': 'Desc' }
 * @returns {Element} Elemento criado
 * 
 * EXEMPLO:
 * const span = createElement('span', {
 *     className: 'text',
 *     text: 'Hello',
 *     attributes: { 'data-id': '123' }
 * });
 * container.appendChild(span);
 */
export function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    
    // Adiciona classes
    if (options.className) {
        if (Array.isArray(options.className)) {
            element.classList.add(...options.className);
        } else {
            element.className = options.className;
        }
    }
    
    // Adiciona texto
    if (options.text) {
        element.textContent = options.text;
    }
    
    // Adiciona HTML
    if (options.html) {
        element.innerHTML = options.html;
    }
    
    // Adiciona atributos customizados
    if (options.attributes) {
        Object.entries(options.attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    
    return element;
}

// ========================================
// 5. EVENT LISTENERS
// ========================================

/**
 * Adiciona um event listener a um elemento
 * @param {Element|string} target - Elemento ou seletor CSS
 * @param {string} event - Nome do evento (ex: 'click', 'change')
 * @param {Function} handler - Função callback
 * 
 * EXEMPLO:
 * addEventListener('.button', 'click', () => {
 *     console.log('Clicado!');
 * });
 */
export function addEventListener(target, event, handler) {
    const element = typeof target === 'string' ? getElement(target) : target;
    if (element) {
        element.addEventListener(event, handler);
    }
}

/**
 * Atalho para addEventListener com evento 'click'
 * @param {Element|string} target - Elemento ou seletor
 * @param {Function} handler - Função callback ao clicar
 * 
 * EXEMPLO:
 * onClick('.theme-toggle', () => {
 *     console.log('Alterou tema!');
 * });
 */
export function onClick(target, handler) {
    addEventListener(target, 'click', handler);
}

// ========================================
// 6. SCROLL
// ========================================

/**
 * Scroll suave para um elemento
 * @param {Element|string} target - Elemento ou seletor
 * @param {object} options - Opções de scroll
 *   - behavior: 'smooth' ou 'auto'
 *   - block: 'start' (topo), 'center', 'end' (fundo)
 * 
 * EXEMPLO:
 * smoothScroll('#sobre', { behavior: 'smooth', block: 'start' });
 * // Faz scroll suave até seção #sobre
 */
export function smoothScroll(target, options = {}) {
    const element = typeof target === 'string' ? getElement(target) : target;
    if (element) {
        element.scrollIntoView({
            behavior: options.behavior || 'smooth',
            block: options.block || 'start'
        });
    }
}
