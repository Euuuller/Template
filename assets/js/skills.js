/**
 * FUNCIONALIDADE DAS ABAS DE HABILIDADES
 * Gerencia a navegação entre as diferentes categorias de habilidades
 */

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões de aba e painéis
    const tabButtons = document.querySelectorAll('.skills__tab')
    const tabPanels = document.querySelectorAll('.skills__panel')

    // Função para ativar uma aba específica
    function activateTab(targetTab) {
        // Remove a classe ativa de todos os botões e painéis
        tabButtons.forEach((button) => {
            button.classList.remove('skills__tab--active')
        })

        tabPanels.forEach((panel) => {
            panel.classList.remove('skills__panel--active')
        })

        // Adiciona a classe ativa ao botão clicado
        const activeButton = document.querySelector(`[data-tab="${targetTab}"]`)
        if (activeButton) {
            activeButton.classList.add('skills__tab--active')
        }

        // Adiciona a classe ativa ao painel correspondente
        const activePanel = document.querySelector(
            `[data-panel="${targetTab}"]`
        )
        if (activePanel) {
            activePanel.classList.add('skills__panel--active')
        }
    }

    // Adiciona event listeners aos botões das abas
    tabButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab')
            activateTab(targetTab)
        })
    })

    // Animação de entrada dos cards quando uma aba é ativada
    function animateCards(panel) {
        const cards = panel.querySelectorAll('.skill-card')
        cards.forEach((card, index) => {
            card.style.opacity = '0'
            card.style.transform = 'translateY(20px)'

            setTimeout(() => {
                card.style.transition = 'all 0.3s ease'
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
            }, index * 100)
        })
    }

    // Observer para animar cards quando entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    }

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const panel = entry.target
                if (panel.classList.contains('skills__panel--active')) {
                    animateCards(panel)
                }
            }
        })
    }, observerOptions)

    // Observa todos os painéis
    tabPanels.forEach((panel) => {
        cardObserver.observe(panel)
    })

    // Inicializa a primeira aba como ativa (caso não haja nenhuma ativa)
    const activeTab = document.querySelector('.skills__tab--active')
    if (!activeTab && tabButtons.length > 0) {
        const firstTab = tabButtons[0].getAttribute('data-tab')
        activateTab(firstTab)
    }
})
