/**
 * Typing Effect for the Hero Section
 */
export function initTypingEffect() {
    const textElement = document.querySelector('.hero-typing');
    if (!textElement) return;

    // Clear initial content
    textElement.innerHTML = '';

    const phrases = ['<Data Analyst/>', '<Analista de Dados/>', '<Eng. Elétrica/>'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    // Create container elements
    const textSpan = document.createElement('span');
    textSpan.className = 'text';
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'cursor';
    cursorSpan.textContent = '|';

    textElement.appendChild(textSpan);
    textElement.appendChild(cursorSpan);

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            charIndex--;
            delay = 50;
        } else {
            charIndex++;
            delay = 120; // Slightly slower for readability
        }

        textSpan.textContent = currentPhrase.substring(0, charIndex);

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            delay = 2000; // Long pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 500; // Pause before starting new phrase
        }

        setTimeout(type, delay);
    }

    type();
}
