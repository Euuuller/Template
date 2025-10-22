import { describe, it, expect, vi, beforeEach } from 'vitest'
import { initSkills } from '../assets/js/components/skills.js'
import { fireEvent } from '@testing-library/dom'

const sampleData = {
    languages: [
        {
            name: 'Python',
            description: 'Data Science',
            icon_type: 'devicon',
            icon: 'devicon-python-plain colored',
        },
    ],
    visualization: [
        {
            name: 'D3.js',
            description: 'Visualizações web',
            icon_type: 'devicon',
            icon: 'devicon-d3js-plain colored',
        },
    ],
    'ml-stats': [
        {
            name: 'scikit-learn',
            description: 'Modelagem',
            icon_type: 'devicon',
            icon: 'devicon-scikitlearn-plain colored',
        },
    ],
    software: [
        {
            name: 'Docker',
            description: 'Containerização',
            icon_type: 'devicon',
            icon: 'devicon-docker-plain colored',
        },
    ],
}

beforeEach(() => {
    document.body.innerHTML = `
    <section class="skills">
      <div class="skills__tabs" role="tablist">
        <button class="skills__tab skills__tab--active" data-tab="languages">Idiomas</button>
        <button class="skills__tab" data-tab="visualization">Visualização</button>
        <button class="skills__tab" data-tab="ml-stats">ML & Stats</button>
        <button class="skills__tab" data-tab="software">Software</button>
      </div>

      <div class="skills__content">
        <div class="skills__panel skills__panel--active" data-panel="languages"><div class="skills__grid"></div></div>
        <div class="skills__panel" data-panel="visualization"><div class="skills__grid"></div></div>
        <div class="skills__panel" data-panel="ml-stats"><div class="skills__grid"></div></div>
        <div class="skills__panel" data-panel="software"><div class="skills__grid"></div></div>
      </div>
    </section>
  `
})

describe('Skills module - integration', () => {
    it('initSkills renders data and sets a11y roles and attributes', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: async () => sampleData,
        })
        await initSkills()

        const tablist = document.querySelector('.skills__tabs')
        expect(tablist.getAttribute('role')).toBe('tablist')

        // Cards render in active panel
        const activePanel = document.querySelector(
            '.skills__panel--active[data-panel="languages"]'
        )
        const cards = activePanel.querySelectorAll('.skill-card')
        expect(cards.length).toBe(1)
        expect(cards[0].querySelector('.skill-card__title').textContent).toBe(
            'Python'
        )

        // Abas possuem aria-selected corretamente
        const activeTab = document.querySelector('.skills__tab--active')
        expect(activeTab.getAttribute('aria-selected')).toBe('true')
    })

    it('keyboard navigation switches tabs and panels', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: async () => sampleData,
        })
        await initSkills()

        const tabs = Array.from(document.querySelectorAll('.skills__tab'))
        const first = tabs[0]
        expect(first.classList.contains('skills__tab--active')).toBe(true)

        // ArrowRight should move to next tab
        fireEvent.keyDown(document.querySelector('.skills__tabs'), {
            key: 'ArrowRight',
        })

        const newActive = document.querySelector('.skills__tab--active')
        expect(newActive).toBe(tabs[1])

        const newPanel = document.querySelector('.skills__panel--active')
        expect(newPanel.getAttribute('data-panel')).toBe('visualization')
    })
})
