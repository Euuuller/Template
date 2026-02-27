/**
 * =====================================
 * ARQUIVO: assets/js/modules/navigation.js
 * 
 * PROPÓSITO:
 * Gerencia navegação suave entre seções da página.
 * Intercepta cliques em links com âncoras (#about, #projects, etc)
 * e faz scroll suave até a seção correspondente.
 * 
 * FUNCIONALIDADE PRINCIPAL:
 * Quando user clica em <a href="#about">
 * Em vez de pular instantaneamente, faz scroll suave
 * e garante que seção fica visível no topo
 * 
 * SELETOR UTILIZADO:
 * a[href^="#"] - Seleciona TODOS links que começam com #
 * Exemplo: <a href="#about">, <a href="#projects">
 * 
 * COMPORTAMENTO:
 * - Clique normal em links externos: Mantém comportamento padrão
 * - Clique em âncora (#about): Scroll suave
 * - Se âncora não existe: Nada acontece
 * =====================================
 */

// Importa função para encontrar múltiplos elementos e fazer scroll
import { getElements, smoothScroll } from '../core/dom.js';

/**
 * Inicializa o menu mobile (hamburger)
 * - Toggle abrir/fechar ao clicar no botão
 * - Fechar ao clicar em qualquer link
 * - Fechar ao redimensionar para desktop
 */
function initMobileMenu() {
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!toggleBtn || !mobileMenu) return;

    /** Abre ou fecha o menu */
    function toggleMenu(forceClose = false) {
        const isOpen = toggleBtn.classList.contains('is-open') || forceClose;

        if (isOpen) {
            // FECHAR
            toggleBtn.classList.remove('is-open');
            mobileMenu.classList.remove('is-open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        } else {
            // ABRIR
            toggleBtn.classList.add('is-open');
            mobileMenu.classList.add('is-open');
            toggleBtn.setAttribute('aria-expanded', 'true');
            mobileMenu.setAttribute('aria-hidden', 'false');
        }
    }

    // Clique no botão hamburger
    toggleBtn.addEventListener('click', () => toggleMenu());

    // Fechar ao clicar em qualquer link do menu mobile
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });

    // Fechar ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            toggleMenu(true);
        }
    });
}

/**
 * Inicializa o sistema de navegação suave
 * 
 * PROCESSO:
 * 1. Encontra TODOS os links que apontam para âncoras (href="#...")
 * 2. Adiciona listener de clique em cada um
 * 3. Ao clicar: encontra elemento alvo e faz scroll suave
 * 4. Ignora links especiais como "#theme-toggle"
 * 
 * EXEMPLO DE USO:
 * initNavigation(); // Chama 1x ao carregar página
 * 
 * ELEMENTOS HTML ESPERADOS:
 * <!-- Navegação com links -->
 * <nav>
 *     <a href="#about">Sobre</a>
 *     <a href="#projects">Projetos</a>
 *     <a href="#contact">Contato</a>
 * </nav>
 * 
 * <!-- Seções com IDs correspondentes -->
 * <section id="about">...</section>
 * <section id="projects">...</section>
 * <section id="contact">...</section>
 * 
 * <!-- Links especiais (ignorados) -->
 * <button class="theme-toggle" data-action="#">
 *     <!-- Este # é ignorado por ser vazio -->
 * </button>
 */
export function initNavigation() {
    // Inicializa menu mobile
    initMobileMenu();

    // ========================================
    // 1. ENCONTRAR TODOS OS LINKS COM ÂNCORA
    // ========================================
    const anchorLinks = getElements('a[href^="#"]');

    // ========================================
    // 2. ADICIONAR LISTENER A CADA LINK
    // ========================================
    // Para cada link encontrado
    anchorLinks.forEach(anchor => {
        // Intercepta o clique
        anchor.addEventListener('click', function (e) {
            // ================================
            // PASSO 1: OBTER HREF
            // ================================
            // Pega atributo href do link
            // Exemplo: <a href="#about"> → href = "#about"
            const href = this.getAttribute('href');

            // ================================
            // PASSO 2: IGNORAR LINKS ESPECIAIS
            // ================================
            // Se href é exatamente "#" (link vazio)
            // Não faz nothing, deixa comportamento padrão
            // Usado em botões que não são navegação real
            // Exemplo: <a href="#">Novo parágrafo</a> (links sem destino)
            if (href === '#') return;

            // ================================
            // PASSO 3: PREVENIR COMPORTAMENTO PADRÃO
            // ================================
            // Impede que navegador:
            // 1. Scrolle instantaneamente
            // 2. Adicione # à URL (já está em href)
            // Nós vamos fazer scroll suave com JavaScript
            e.preventDefault();

            // ================================
            // PASSO 4: ENCONTRAR ELEMENTO ALVO
            // ================================
            // document.querySelector(href) procura elemento
            // com ID correspondente ao href
            // Exemplo: href="#about" → Procura id="about"
            const target = document.querySelector(href);

            // ================================
            // PASSO 5: FAZER SCROLL SE ENCONTROU
            // ================================
            // Se elemento com esse ID existe
            if (target) {
                // Chama smoothScroll() do core/dom.js
                // smoothScroll(elemento, opções)
                smoothScroll(target, {
                    behavior: 'smooth', // Scroll suave (não instantâneo)
                    block: 'start' // Alinha elemento no topo da viewport
                });
                // Comportamento resultante:
                // - Página anima scroll durante ~500ms
                // - Elemento destino fica no topo ou próximo
                // - User vê transição suave
            }
            // Se elemento não existe, nada acontece (sem erro)
        });
    });
}

/**
 * EXEMPLO VISUAL DE FUNCIONAMENTO:
 * 
 * HTML:
 * <a href="#projects">Ver Projetos</a>
 * <section id="projects">
 *     <h2>Meus Projetos</h2>
 * </section>
 * 
 * AÇÃO DO USER:
 * 1. User vê link "Ver Projetos" na página
 * 2. User clica no link
 * 
 * PROCESSAMENTO:
 * 1. addEventListener dispara
 * 2. this.getAttribute('href') → "#projects"
 * 3. if (href === '#') → false, continua
 * 4. e.preventDefault() → cancela jump automático
 * 5. document.querySelector("#projects") → encontra <section id="projects">
 * 6. smoothScroll(target, {...}) → anima scroll
 * 
 * RESULTADO:
 * - Página anima scroll para seção #projects
 * - Seção fica alinhada no topo
 * - URL não muda (já tem # no href)
 * - User experimenta navegação suave
 * 
 * CASOS ESPECIAIS:
 * 
 * 1. Link especial (href="#"):
 *    if (href === '#') return;
 *    → Ignora, permite comportamento padrão
 * 
 * 2. Âncora não existe:
 *    const target = document.querySelector(href); → null
 *    if (target) { ... } → false
 *    → Nada acontece (sem erro)
 * 
 * 3. Link externo:
 *    href não começa com # (ex: href="/about")
 *    a[href^="#"] não seleciona
 *    → Não tem listener, navegação normal
 */
