/**
 * =====================================
 * ARQUIVO: assets/js/modules/typing.js
 * 
 * PROPÓSITO:
 * Cria efeito de "digitação" na seção hero.
 * Simula alguém digitando frases, apagando, e digitando a próxima.
 * 
 * CARACTERÍSTICA PRINCIPAL:
 * - Digita cada caractere individualmente
 * - Aguarda antes de apagar
 * - Cicla entre múltiplas frases
 * - Animação suave com delays calculados
 * - Inclui cursor animado ("|") piscando
 * 
 * CONFIGURAÇÃO:
 * As frases, velocidades e delays vêm de constants.js (CONFIG)
 * - typeSpeed: velocidade para digitar (ms)
 * - deleteSpeed: velocidade para apagar (ms)
 * - pauseEnd: pausa após completar frase (ms)
 * - pauseStart: pausa antes de digitar próxima (ms)
 * 
 * LÓGICA DO EFEITO:
 * Frase 1: "Developer Front-End"
 *          ↓ digita caractere por caractere
 *          D|
 *          De|
 *          Dev|
 *          ... (até completar)
 *          ↓ aguarda 2000ms
 *          ↓ apaga caractere por caractere
 *          Developer Front-En|
 *          Developer Front-E|
 *          ... (até vazio)
 *          ↓ digita Frase 2, repete...
 * =====================================
 */

// Importa funções para manipulação de DOM
import { getElement, clear, createElement } from '../core/dom.js';

// Importa configuração de digitação (frases, velocidades, pausas)
import { CONFIG } from '../core/constants.js';

/**
 * Inicializa o efeito de digitação no hero
 * 
 * PROCESSO:
 * 1. Encontra elemento .hero-typing na página
 * 2. Limpa conteúdo anterior
 * 3. Cria spans para texto e cursor
 * 4. Inicia loop de digitação com cursor piscando
 * 5. Para cada frase: digita → aguarda → apaga → próxima
 * 
 * EXEMPLO DE USO:
 * initTypingEffect(); // Chama 1x ao carregar página
 * 
 * ELEMENTO HTML ESPERADO:
 * <div class="hero-typing"></div> <!-- Aqui o texto vai aparecer -->
 */
export function initTypingEffect() {
    // ========================================
    // 1. OBTER ELEMENTO
    // ========================================
    // Procura elemento com classe hero-typing
    // Exemplo: <div class="hero-typing"></div>
    const textElement = getElement('.hero-typing');
    
    // Se não encontrou, cancela inicialização
    if (!textElement) return;

    // ========================================
    // 2. PREPARAR CONTAINER
    // ========================================
    // Limpa qualquer conteúdo anterior
    clear(textElement);
    // clear() remove todos os filhos do elemento

    // ========================================
    // 3. CONFIGURAÇÕES DO EFEITO
    // ========================================
    // Vem de constants.js -> CONFIG.typing
    const phrases = CONFIG.typing.phrases;
    // Ex: ["Developer Front-End", "Designer", "Criador", "Entusiasta"]
    
    let phraseIndex = 0; // Qual frase está sendo digitada (0, 1, 2, ...)
    let charIndex = 0; // Qual caractere está sendo digitado (0 até frase.length)
    let isDeleting = false; // Flag: true = apagando, false = digitando
    let delay = CONFIG.typing.typeSpeed; // Delay inicial em ms

    // ========================================
    // 4. CRIAR ELEMENTOS VISUAIS
    // ========================================
    // Span que vai conter o texto digitado
    // Exemplo: <span class="text">Developer</span>
    const textSpan = createElement('span', { className: 'text' });
    
    // Span para o cursor piscante
    // Exemplo: <span class="cursor">|</span>
    const cursorSpan = createElement('span', { className: 'cursor', text: '|' });
    
    // Adiciona ambos ao container
    textElement.appendChild(textSpan);
    textElement.appendChild(cursorSpan);

    // ========================================
    // 5. LOOP PRINCIPAL DE DIGITAÇÃO
    // ========================================
    /**
     * Função recursiva que controla toda animação
     * 
     * FLUXO:
     * 1. Se apagando, decrementa index
     * 2. Se digitando, incrementa index
     * 3. Atualiza texto no span
     * 4. Verifica conclusão de frase
     * 5. Agenda próxima chamada com delay apropriado
     * 
     * DELAYS UTILIZADOS:
     * - typeSpeed: digitando caractere normal (~150ms)
     * - deleteSpeed: apagando caractere (~100ms)
     * - pauseEnd: pausa após completar frase (~2000ms)
     * - pauseStart: pausa antes de digitar próxima (~500ms)
     */
    function type() {
        // ====================================
        // PASSO 1: OBTER FRASE ATUAL
        // ====================================
        // Frase que está sendo processada agora
        const currentPhrase = phrases[phraseIndex];
        // Se phraseIndex = 0, pega phrases[0], etc.

        // ====================================
        // PASSO 2: INCREMENTAL OU DECREMENTAL?
        // ====================================
        if (isDeleting) {
            // APAGANDO: reduz caracteres
            charIndex--;
            delay = CONFIG.typing.deleteSpeed; // deleteSpeed < typeSpeed (mais rápido)
        } else {
            // DIGITANDO: adiciona caracteres
            charIndex++;
            delay = CONFIG.typing.typeSpeed; // typeSpeed para digitação normal
        }

        // ====================================
        // PASSO 3: ATUALIZAR TEXTO NO SPAN
        // ====================================
        // substring(0, charIndex) pega primeiros charIndex caracteres
        // Exemplo: "Developer".substring(0, 3) = "Dev"
        textSpan.textContent = currentPhrase.substring(0, charIndex);

        // ====================================
        // PASSO 4: VERIFICAR CONCLUSÃO
        // ====================================
        // Verificar se COMPLETOU a digitação
        if (!isDeleting && charIndex === currentPhrase.length) {
            // ================================
            // TRANSIÇÃO: DIGITAR → APAGAR
            // ================================
            isDeleting = true;
            // Próxima chamada terá grande delay
            delay = CONFIG.typing.pauseEnd;
            // pauseEnd permite user ler a frase completa
            // Exemplo: pauseEnd = 2000ms (2 segundos)
        }
        // Verificar se COMPLETOU o apagamento
        else if (isDeleting && charIndex === 0) {
            // ================================
            // TRANSIÇÃO: APAGAR → PRÓXIMA FRASE
            // ================================
            isDeleting = false;
            // Vai para próxima frase (cicla ao fim)
            // % phrases.length faz: 0→1→2→...→(length-1)→0
            phraseIndex = (phraseIndex + 1) % phrases.length;
            // Reset para começar a digitar a nova frase
            charIndex = 0;
            // Pequena pausa após apagar
            delay = CONFIG.typing.pauseStart;
            // pauseStart permite user processar que mudou de frase
            // Exemplo: pauseStart = 500ms
        }

        // ====================================
        // PASSO 5: AGENDAR PRÓXIMA CHAMADA
        // ====================================
        // setTimeout chama type novamente após 'delay' ms
        // Isso cria a ilusão de digitação contínua
        setTimeout(type, delay);
    }

    // Inicia o loop de digitação
    type();
}

/**
 * EXEMPLO VISUAL DO EFEITO:
 * 
 * Configuração:
 * typeSpeed: 150ms (velocidade de digitar)
 * deleteSpeed: 100ms (velocidade de apagar)
 * pauseEnd: 2000ms (pausa após completar)
 * pauseStart: 500ms (pausa antes de próxima)
 * Frase: "Front-End"
 * 
 * TIMELINE VISUAL:
 * 0ms     → "|" (cursor só)
 * 150ms   → "F|"
 * 300ms   → "Fr|"
 * 450ms   → "Fro|"
 * 600ms   → "Fron|"
 * 750ms   → "Front|"
 * 900ms   → "Front-|"
 * 1050ms  → "Front-E|"
 * 1200ms  → "Front-En|"
 * 1350ms  → "Front-End|"
 * 1350ms  → ESPERA 2000ms (pauseEnd - user lê)
 * 3350ms  → começa APAGAR
 * 3450ms  → "Front-En|"
 * 3550ms  → "Front-E|"
 * 3650ms  → "Front-|"
 * 3750ms  → "Front|"
 * 3850ms  → "Fron|"
 * 3950ms  → "Fro|"
 * 4050ms  → "Fr|"
 * 4150ms  → "F|"
 * 4250ms  → "|"
 * 4250ms  → ESPERA 500ms (pauseStart)
 * 4750ms  → Próxima frase começa a digitar
 * 
 * CSS RELACIONADO:
 * .cursor tem @keyframes blink para piscar
 * .text tem transition suave
 */
