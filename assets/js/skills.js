document.addEventListener('DOMContentLoaded', () => {
    const SKILLS_FILE_PATH = 'assets/data/skills.json'
    const tabsContainer = document.querySelector('.skills__tabs')
    const contentContainer = document.querySelector('.skills__content')

    function createSkillCard(skill) {
        const icon =
            skill.icon_type === 'devicon'
                ? `<i class="${skill.icon}"></i>`
                : skill.icon

        return `
      <div class="skill-card">
        <div class="skill-card__icon">
          ${icon}
        </div>
        <h3 class="skill-card__title">${skill.name}</h3>
        <p class="skill-card__description">${skill.description}</p>
      </div>
    `
    }

    async function loadSkills() {
        try {
            const response = await fetch(SKILLS_FILE_PATH)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const skillsData = await response.json()

            // Populate panels with skills
            for (const category in skillsData) {
                const panel = contentContainer.querySelector(
                    `[data-panel="${category}"]`
                )
                if (panel) {
                    const grid = panel.querySelector('.skills__grid')
                    if (grid) {
                        grid.innerHTML = skillsData[category]
                            .map(createSkillCard)
                            .join('')
                    }
                }
            }

            // Setup tab switching
            tabsContainer.addEventListener('click', (event) => {
                const tab = event.target.closest('.skills__tab')
                if (!tab) return

                // Deactivate current active tab and panel
                const activeTab = tabsContainer.querySelector(
                    '.skills__tab--active'
                )
                const activePanel = contentContainer.querySelector(
                    '.skills__panel--active'
                )

                if (activeTab) {
                    activeTab.classList.remove('skills__tab--active')
                }
                if (activePanel) {
                    activePanel.classList.remove('skills__panel--active')
                }

                // Activate new tab and panel
                tab.classList.add('skills__tab--active')
                const newPanel = contentContainer.querySelector(
                    `[data-panel="${tab.dataset.tab}"]`
                )
                if (newPanel) {
                    newPanel.classList.add('skills__panel--active')
                }
            })
        } catch (error) {
            console.error('Failed to load skills:', error)
            if (contentContainer) {
                contentContainer.innerHTML =
                    '<p>Error loading skills. Please try again later.</p>'
            }
        }
    }

    loadSkills()
})
