/**
 * ==========================================
 * MÓDULO: Snippet de Código com Efeito de Digitação
 * ==========================================
 */

/**
 * Conteúdo do snippet em HTML com marcação de cores
 * @type {string[]}
 */
const codeString = [
    '<span class="text-purple-400">import</span> pandas <span class="text-purple-400">as</span> pd',
    '<span class="text-purple-400">from</span> sklearn.ensemble <span class="text-purple-400">import</span> <span class="text-cyan-400">RandomForestRegressor</span>',
    '',
    '<span class="text-gray-500"># Carregando os dados</span>',
    'df = pd.<span class="text-yellow-300">read_csv</span>(<span class="text-green-400">"house_prices.csv"</span>)',
    'X = df.<span class="text-yellow-300">drop</span>(<span class="text-green-400">"price"</span>, axis=<span class="text-orange-400">1</span>)',
    'y = df[<span class="text-green-400">"price"</span>]',
    '',
    '<span class="text-gray-500"># Treinando o modelo</span>',
    'model = <span class="text-cyan-400">RandomForestRegressor</span>(n_estimators=<span class="text-orange-400">100</span>)',
    'model.<span class="text-yellow-300">fit</span>(X, y)',
    '',
    '<span class="text-gray-500"># Fazendo uma nova predição</span>',
    'prediction = model.<span class="text-yellow-300">predict</span>(X.head(<span class="text-orange-400">1</span>))',
    '<span class="text-purple-400">print</span>(f<span class="text-green-400">"Previsão: R$ {prediction[0]:.2f}"</span>)',
].join('\n')

/**
 * Configurações do efeito de digitação
 * @type {Object}
 */
const TYPING_CONFIG = {
    typeSpeed: 25,
    pauseAfterComplete: 3000,
    cursorClass: 'code-cursor-active'
};

let typingTimeoutId = null;
let targetElement = null;

/**
 * Limpa o timeout de digitação
 */
function cleanupTyping() {
    if (typingTimeoutId) {
        clearTimeout(typingTimeoutId);
        typingTimeoutId = null;
    }
}

/**
 * Inicializa o snippet com efeito de digitação na seção Sobre
 */
export function initAboutCodeSnippet() {
    try {
        targetElement = document.getElementById('typed-code');
        
        if (!targetElement) {
            console.warn('Elemento de código digitado não encontrado');
            return;
        }

        targetElement.classList.add(TYPING_CONFIG.cursorClass);

        let idx = 0;

        const typeNext = () => {
            if (idx <= codeString.length) {
                targetElement.innerHTML = codeString.substring(0, idx);
                idx += 1;
                typingTimeoutId = setTimeout(typeNext, TYPING_CONFIG.typeSpeed);
            } else {
                // Remover cursor após terminar
                targetElement.classList.remove(TYPING_CONFIG.cursorClass);
                // Reinicia após uma pausa
                typingTimeoutId = setTimeout(() => {
                    idx = 0;
                    targetElement.innerHTML = '';
                    targetElement.classList.add(TYPING_CONFIG.cursorClass);
                    typeNext();
                }, TYPING_CONFIG.pauseAfterComplete);
            }
        };

        typeNext();

        // Cleanup on navigation/unmount
        window.addEventListener('beforeunload', cleanupTyping);
        
    } catch (error) {
        console.error('Erro ao inicializar o snippet de código:', error);
    }
}

/**
 * Limpa recursos do módulo de código
 */
export function cleanupCodeSnippet() {
    cleanupTyping();
    if (targetElement) {
        targetElement.classList.remove(TYPING_CONFIG.cursorClass);
        targetElement = null;
    }
}