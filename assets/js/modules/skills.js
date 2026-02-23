/**
 * =====================================
 * ARQUIVO: assets/js/modules/skills.js
 * 
 * PROPÓSITO:
 * Carregamento dinâmico das habilidades técnicas via JSON.
 * Gerencia o preenchimento dos carrosséis e a duplicação
 * automática necessária para o efeito de loop infinito no CSS.
 * =====================================
 */

/**
 * Cria o elemento HTML de uma skill individual
 * @param {Object} skill - Objeto com dados da skill
 * @returns {string} - String de template HTML
 */
const createSkillItem = (skill) => {
    return `
        <div class="skill-item">
            <img src="${skill.iconUrl}" alt="${skill.name}">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-desc">${skill.description}</span>
        </div>
    `.trim();
};

/**
 * Inicializa a renderização das habilidades
 */
export const initSkills = async () => {
    const carousel1 = document.querySelector('.carousel-wrapper.scroll-left');
    const carousel2 = document.querySelector('.carousel-wrapper.scroll-right');

    if (!carousel1 || !carousel2) return;

    try {
        // 1. Buscar os dados do JSON
        const response = await fetch('assets/data/skills.json');
        if (!response.ok) throw new Error('Não foi possível carregar as habilidades');

        const skills = await response.json();

        // Limpar carrosséis antes de renderizar (se houver algo hardcoded)
        carousel1.innerHTML = '';
        carousel2.innerHTML = '';

        // 2. Renderizar itens originais
        const row1Content = skills
            .filter(s => s.carousel === 1)
            .map(createSkillItem)
            .join('');

        const row2Content = skills
            .filter(s => s.carousel === 2)
            .map(createSkillItem)
            .join('');

        // Inserir originais
        carousel1.innerHTML = row1Content;
        carousel2.innerHTML = row2Content;

        // 3. Duplicação automática para o loop infinito
        // Clonamos o conteúdo e anexamos novamente
        // Isso garante que o CSS animation (translateX -50%) funcione perfeitamente
        carousel1.innerHTML += row1Content;
        carousel2.innerHTML += row2Content;

        console.log('✓ Skills carousel populated and optimized dynamically');

    } catch (error) {
        console.error('Erro ao carregar habilidades:', error);
        // Fallback or message if necessary
    }
};
