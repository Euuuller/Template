/**
 * =====================================
 * ARQUIVO: assets/js/core/utils.js
 * 
 * PROPÓSITO:
 * Módulo com funções utilitárias genéricas reutilizáveis
 * em diferentes partes da aplicação. São helpers que
 * não se encaixam em outras categorias.
 * 
 * CATEGORIAS DE FUNÇÕES:
 * 1. Detectar dispositivo/viewport
 * 2. Timing (debounce, throttle, delay)
 * 3. LocalStorage / SessionStorage
 * 4. Viewport detection
 * 5. Objetos (clone, merge)
 * =====================================
 */

// ========================================
// 1. DETECTAR DISPOSITIVO / VIEWPORT
// ========================================

/**
 * Verifica se é dispositivo móvel ou tablet
 * @returns {boolean} true se viewport < 768px
 * 
 * EXEMPLO:
 * if (isMobile()) {
 *     // Mostrar menu móvel
 * }
 * 
 * BREAKDOWN:
 * window.innerWidth = largura atual do viewport
 * 768px = breakpoint para tablets (768px até desktop)
 */
export function isMobile() {
    return window.innerWidth < 768;
}

// ========================================
// 2. TIMING - DEBOUNCE & THROTTLE
// ========================================

/**
 * Debounce: Aguarda o usuário parar de executar a ação
 * antes de executar a função.
 * 
 * Útil para: redimensionamento de janela, digitação em input
 * 
 * @param {Function} func - Função a executar
 * @param {number} wait - Tempo de espera em ms (padrão: 300ms)
 * @returns {Function} Função debounced
 * 
 * EXEMPLO:
 * const handleResize = debounce(() => {
 *     console.log('Janela redimensionada!');
 * }, 200);
 * 
 * window.addEventListener('resize', handleResize);
 * // Só executa 200ms DEPOIS que o usuário PAROU de redimensionar
 * 
 * FLUXO:
 * 1. Usuário redimensiona
 * 2. Timer inicia (300ms)
 * 3. Usuário redimensiona novamente
 * 4. Timer reinicia
 * 5. Se não houver mais ações, função executa após 300ms
 */
export function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle: Executa a função no máximo uma vez a cada X ms.
 * 
 * Útil para: scroll events, mouse move, eventos frequentes
 * 
 * @param {Function} func - Função a executar
 * @param {number} limit - Limite de tempo entre execuções (ms)
 * @returns {Function} Função throttled
 * 
 * EXEMPLO:
 * const handleScroll = throttle(() => {
 *     console.log('Usuário scroll!');
 * }, 1000);
 * 
 * window.addEventListener('scroll', handleScroll);
 * // Executa no máximo 1x a cada 1 segundo
 * 
 * FLUXO:
 * 1. Primeira execução = imediata
 * 2. Próximas execuções = aguardadas até completar limite
 * 3. Útil para economizar performance com eventos contínuos
 */
export function throttle(func, limit = 300) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// 3. TIMING - DELAY
// ========================================

/**
 * Aguarda um tempo específico antes de continuar
 * (retorna uma Promise que resolve após delay)
 * 
 * @param {number} ms - Milissegundos para aguardar (padrão: 0ms)
 * @returns {Promise} Promise que resolve após delay
 * 
 * EXEMPLO (usar com async/await):
 * async function animateHero() {
 *     console.log('Inicio');
 *     await delay(2000);  // Aguarda 2 segundos
 *     console.log('Após 2 segundos');
 * }
 * 
 * EXEMPLO (usar com .then()):
 * delay(1000).then(() => {
 *     console.log('Executado após 1 segundo');
 * });
 */
export function delay(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ========================================
// 4. LOCALSTORAGE
// ========================================

/**
 * Obtém um valor do localStorage
 * 
 * @param {string} key - Chave do localStorage
 * @param {any} defaultValue - Valor padrão se não encontrar (padrão: null)
 * @returns {any} Valor armazenado ou valor padrão
 * 
 * EXEMPLO:
 * const theme = getFromStorage('theme', 'dark');
 * // Se 'theme' não existe, retorna 'dark'
 * 
 * NOTA:
 * - localStorage aceita apenas strings
 * - Esta função automaticamente faz JSON.parse
 * - Se houver erro, retorna defaultValue
 */
export function getFromStorage(key, defaultValue = null) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
        console.error(`Error reading from localStorage: ${key}`, error);
        return defaultValue;
    }
}

/**
 * Armazena um valor no localStorage
 * 
 * @param {string} key - Chave do localStorage
 * @param {any} value - Valor a armazenar (pode ser qualquer tipo)
 * 
 * EXEMPLO:
 * saveToStorage('theme', 'light');
 * saveToStorage('user', { name: 'João', age: 25 });
 * 
 * NOTA:
 * - Automaticamente faz JSON.stringify
 * - Se houver erro, apenas loga no console
 */
export function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error writing to localStorage: ${key}`, error);
    }
}

/**
 * Remove um valor do localStorage
 * 
 * @param {string} key - Chave a remover
 * 
 * EXEMPLO:
 * removeFromStorage('theme');
 */
export function removeFromStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing from localStorage: ${key}`, error);
    }
}

// ========================================
// 5. VIEWPORT DETECTION
// ========================================

/**
 * Verifica se um elemento está visível no viewport
 * 
 * @param {Element} element - Elemento do DOM
 * @returns {boolean} true se elemento está visível na tela
 * 
 * EXEMPLO:
 * const section = document.querySelector('#sobre');
 * if (isInViewport(section)) {
 *     console.log('Seção #sobre é visível!');
 * }
 * 
 * CASOS DE USO:
 * - Lazy loading de imagens
 * - Trigger de animações ao scroll
 * - Analytics (rastrear seções vistas)
 */
export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// 6. OBJETOS - CLONE & MERGE
// ========================================

/**
 * Clona um objeto (deep clone com JSON)
 * 
 * @param {object} obj - Objeto a clonar
 * @returns {object} Objeto clonado (cópia independente)
 * 
 * EXEMPLO:
 * const original = { nome: 'João', idade: 25 };
 * const copia = clone(original);
 * 
 * copia.nome = 'Maria';
 * console.log(original.nome); // 'João' (não afetado)
 * console.log(copia.nome);    // 'Maria'
 * 
 * LIMITAÇÃO:
 * - Usa JSON.stringify + JSON.parse
 * - Não funciona com Functions, Dates complexas, etc
 */
export function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Faz merge (mescla) múltiplos objetos em um novo objeto
 * 
 * @param {...object} objects - Objetos a mesclar
 * @returns {object} Novo objeto com propriedades de todos
 * 
 * EXEMPLO:
 * const config1 = { theme: 'dark', lang: 'pt' };
 * const config2 = { lang: 'en', debug: true };
 * 
 * const merged = merge(config1, config2);
 * // Resultado: { theme: 'dark', lang: 'en', debug: true }
 * 
 * NOTA:
 * - Propriedades posteriores sobrescrevem anteriores
 * - Não afeta os objetos originais
 */
export function merge(...objects) {
    return Object.assign({}, ...objects);
}
