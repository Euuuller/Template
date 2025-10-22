import { describe, it, expect } from 'vitest'
import {
    createSkillCard,
    renderSkills,
} from '../assets/js/components/skills.js'

describe('Skills module - unit', () => {
    it('createSkillCard renders devicon class when icon_type is devicon', () => {
        const html = createSkillCard({
            name: 'JavaScript',
            description: 'Linguagem base do frontend',
            icon_type: 'devicon',
            icon: 'devicon-javascript-plain colored',
        })
        expect(html).toContain(
            '<i class="devicon-javascript-plain colored"></i>'
        )
        expect(html).toContain('JavaScript')
        expect(html).toContain('Linguagem base do frontend')
    })

    it('createSkillCard renders inline SVG when icon_type is svg', () => {
        const svg =
            '<svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="5"/></svg>'
        const html = createSkillCard({
            name: 'Custom',
            description: 'Ícone SVG inline',
            icon_type: 'svg',
            icon: svg,
        })
        expect(html).toContain(svg)
        expect(html).toContain('Custom')
    })

    it('renderSkills injects cards into correct panel grid', () => {
        document.body.innerHTML = `
      <section>
        <div class="skills__content">
          <div data-panel="languages" class="skills__panel">
            <div class="skills__grid"></div>
          </div>
        </div>
      </section>
    `

        const data = {
            languages: [
                {
                    name: 'Python',
                    description: 'Data Science',
                    icon_type: 'devicon',
                    icon: 'devicon-python-plain colored',
                },
                {
                    name: 'R',
                    description: 'Estatística',
                    icon_type: 'devicon',
                    icon: 'devicon-r-plain colored',
                },
            ],
        }

        const content = document.querySelector('.skills__content')
        renderSkills(data, content)

        const cards = content.querySelectorAll(
            '.skills__panel[data-panel="languages"] .skill-card'
        )
        expect(cards.length).toBe(2)
        expect(cards[0].querySelector('.skill-card__title').textContent).toBe(
            'Python'
        )
    })
})
