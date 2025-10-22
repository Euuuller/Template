/**
 * ==========================================
 * MÓDULO: HABILIDADES & FERRAMENTAS
 * - Carrega dados de skills
 * - Renderiza cartões por categoria
 * - Controla abas com acessibilidade e teclado
 * ==========================================
 */

const SKILLS_FILE_PATH = 'assets/data/skills.json'

export function createSkillCard(skill) {
    const safeName = skill?.name ?? '—'
    const safeDesc = skill?.description ?? ''
    const icon =
        skill?.icon_type === 'devicon'
            ? `<i class="${skill.icon}"></i>`
            : (skill?.icon ?? '')

    return `
      <div class="skill-card" tabindex="0">
        <div class="skill-card__icon">
          ${icon}
        </div>
        <h3 class="skill-card__title">${safeName}</h3>
        <p class="skill-card__description">${safeDesc}</p>
      </div>
    `
}

async function fetchSkills() {
    const response = await fetch(SKILLS_FILE_PATH, { cache: 'no-cache' })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return response.json()
}

export function setupA11yTabs(tabsContainer, contentContainer) {
    if (!tabsContainer || !contentContainer) return

    tabsContainer.setAttribute('role', 'tablist')

    const tabs = Array.from(tabsContainer.querySelectorAll('.skills__tab'))

    tabs.forEach((tab, idx) => {
        const tabId = `skills-tab-${idx}`
        const panelKey = tab.dataset.tab
        const panel = contentContainer.querySelector(
            `[data-panel="${panelKey}"]`
        )

        tab.setAttribute('role', 'tab')
        tab.id = tabId
        tab.setAttribute(
            'tabindex',
            tab.classList.contains('skills__tab--active') ? '0' : '-1'
        )
        tab.setAttribute(
            'aria-selected',
            tab.classList.contains('skills__tab--active') ? 'true' : 'false'
        )
        if (panel) {
            const panelId = `skills-panel-${panelKey}`
            panel.id = panelId
            panel.setAttribute('role', 'tabpanel')
            panel.setAttribute('aria-labelledby', tabId)
            panel.setAttribute('tabindex', '0')
        }
    })

    function activateTab(tab) {
        const activeTab = tabsContainer.querySelector('.skills__tab--active')
        const activePanel = contentContainer.querySelector(
            '.skills__panel--active'
        )

        if (activeTab) {
            activeTab.classList.remove('skills__tab--active')
            activeTab.setAttribute('aria-selected', 'false')
            activeTab.setAttribute('tabindex', '-1')
        }
        if (activePanel) {
            activePanel.classList.remove('skills__panel--active')
        }

        tab.classList.add('skills__tab--active')
        tab.setAttribute('aria-selected', 'true')
        tab.setAttribute('tabindex', '0')

        const newPanel = contentContainer.querySelector(
            `[data-panel="${tab.dataset.tab}"]`
        )
        if (newPanel) {
            newPanel.classList.add('skills__panel--active')
            newPanel.focus({ preventScroll: true })
        }
    }

    tabsContainer.addEventListener('click', (event) => {
        const tab = event.target.closest('.skills__tab')
        if (tab) activateTab(tab)
    })

    tabsContainer.addEventListener('keydown', (event) => {
        const currentIndex = tabs.findIndex((t) =>
            t.classList.contains('skills__tab--active')
        )
        let nextIndex = currentIndex
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                nextIndex = (currentIndex + 1) % tabs.length
                event.preventDefault()
                break
            case 'ArrowLeft':
            case 'ArrowUp':
                nextIndex = (currentIndex - 1 + tabs.length) % tabs.length
                event.preventDefault()
                break
            case 'Home':
                nextIndex = 0
                event.preventDefault()
                break
            case 'End':
                nextIndex = tabs.length - 1
                event.preventDefault()
                break
            case 'Enter':
            case ' ':
                activateTab(tabs[currentIndex])
                event.preventDefault()
                return
            default:
                return
        }
        tabs[nextIndex].focus()
        activateTab(tabs[nextIndex])
    })
}

export function renderSkills(skillsData, contentContainer) {
    for (const category in skillsData) {
        const panel = contentContainer.querySelector(
            `[data-panel="${category}"]`
        )
        if (!panel) continue
        const grid = panel.querySelector('.skills__grid')
        if (!grid) continue
        grid.innerHTML = skillsData[category].map(createSkillCard).join('')
    }
}

export async function initSkills() {
    const tabsContainer = document.querySelector('.skills__tabs')
    const contentContainer = document.querySelector('.skills__content')

    if (!tabsContainer || !contentContainer) {
        return
    }

    try {
        const skillsData = await fetchSkills()
        renderSkills(skillsData, contentContainer)
        setupA11yTabs(tabsContainer, contentContainer)
    } catch (error) {
        console.error('Failed to load skills:', error)
        contentContainer.innerHTML =
            '<p>Erro ao carregar habilidades. Tente novamente mais tarde.</p>'
    }
}
