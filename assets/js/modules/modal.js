/**
 * =====================================
 * MODULE: modal.js
 * PROPÓSITO: Gerenciar abertura e fechamento do modal de detalhes do projeto,
 * injetando dinamicamente o conteúdo HTML baseado no projeto clicado.
 * =====================================
 */

import { projectsData } from '../data/projects.js';

export function initProjectModal() {
    // Busca todos os botões de abrir modal
    const modalTriggers = document.querySelectorAll('.overlay-text[data-project-id]');
    const modalOverlay = document.getElementById('project-modal');
    const closeBtn = modalOverlay?.querySelector('.modal-close');

    if (modalTriggers.length === 0 || !modalOverlay) return;

    // Elementos Internos do Modal para Injeção
    const mBadge = modalOverlay.querySelector('.modal-badge');
    const mTitle = modalOverlay.querySelector('.modal-title');
    const mSubtitle = modalOverlay.querySelector('.modal-subtitle');

    // Cards Esquerda
    const cDesafioIcon = modalOverlay.querySelector('.card-desafio .info-icon i');
    const cDesafioTitle = modalOverlay.querySelector('.card-desafio h4');
    const cDesafioText = modalOverlay.querySelector('.card-desafio p');

    const cSolucaoIcon = modalOverlay.querySelector('.card-solucao .info-icon i');
    const cSolucaoTitle = modalOverlay.querySelector('.card-solucao h4');
    const cSolucaoText = modalOverlay.querySelector('.card-solucao p');

    const cImpactoIcon = modalOverlay.querySelector('.card-impacto .info-icon i');
    const cImpactoTitle = modalOverlay.querySelector('.card-impacto h4');
    const cImpactoText = modalOverlay.querySelector('.card-impacto p');

    // Stats Direita
    const btnDemo = modalOverlay.querySelector('.demo-btn');
    const btnGithub = modalOverlay.querySelector('.sidebar-btn');
    const stackList = modalOverlay.querySelector('.stack-list');
    const metricsList = modalOverlay.querySelector('.metrics-list');

    // Função para renderizar as métricas (Array para HTML)
    const renderMetrics = (metricsArray) => {
        return metricsArray.map(metric => `
            <div class="metric-item">
                <span class="metric-dot"></span> ${metric.label}
            </div>
        `).join('');
    };

    // Função para renderizar as tags do stack (Array para HTML)
    const renderTags = (tagsArray) => {
        return tagsArray.map(tag => `
            <span class="stack-tag ${tag.class}">${tag.name}</span>
        `).join('');
    };

    // Função para popular o modal
    const populateModal = (projectId) => {
        const data = projectsData[projectId];
        if (!data) {
            console.error(`Projeto ${projectId} não encontrado em projects.js`);
            return;
        }

        // Header
        mBadge.textContent = data.badge;
        mTitle.textContent = data.title;
        mSubtitle.textContent = data.subtitle;

        // Desafio
        cDesafioIcon.className = data.cards.desafio.icon;
        cDesafioTitle.textContent = data.cards.desafio.title;
        cDesafioText.textContent = data.cards.desafio.text;

        // Solução
        cSolucaoIcon.className = data.cards.solucao.icon;
        cSolucaoTitle.textContent = data.cards.solucao.title;
        cSolucaoText.textContent = data.cards.solucao.text;

        // Impacto
        cImpactoIcon.className = data.cards.impacto.icon;
        cImpactoTitle.textContent = data.cards.impacto.title;
        cImpactoText.textContent = data.cards.impacto.text;

        // Buttons
        btnDemo.href = data.links.demo;
        btnGithub.href = data.links.github;

        // Listas Geradas Dinamicamente
        stackList.innerHTML = renderTags(data.stack);
        metricsList.innerHTML = renderMetrics(data.metrics);
    };

    // Função para abrir o modal
    const openModal = (projectId) => {
        populateModal(projectId); // Injeta os dados antes de exibir
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Impede scroll do body
    };

    // Função para fechar o modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaura scroll do body
    };

    // Listeners em cada Card de Projeto
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = trigger.getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    closeBtn?.addEventListener('click', closeModal);

    // Fechar ao clicar no overlay (fora do container)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Fechar com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}
