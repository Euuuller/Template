/**
 * =====================================
 * ARQUIVO: assets/js/main.js
 * 
 * PROPÓSITO:
 * Ponto de entrada principal da aplicação JavaScript.
 * Este arquivo é responsável por inicializar todos os módulos
 * e features quando o DOM está pronto.
 * 
 * ESTRUTURA DO PROJETO JS:
 * ├── core/          → Funções base (DOM, utils, constantes)
 * ├── modules/       → Módulos funcionais (theme, typing, nav)
 * ├── config/        → Configurações (theme-config.js)
 * └── main.js        → Este arquivo (orquestrador)
 * 
 * FLUXO DE EXECUÇÃO:
 * 1. DOMContentLoaded é disparado
 * 2. initTheme() → ativa sistema de tema
 * 3. initTypingEffect() → ativa efeito de digitação
 * 4. initNavigation() → ativa navegação smooth scroll
 * =====================================
 */

// Importa a função que gerencia tema (dark/light)
// Localizado em: assets/js/modules/theme.js
import { initTheme } from './modules/theme.js';

// Importa a função que cria o efeito de digitação no hero
// Localizado em: assets/js/modules/typing.js
import { initTypingEffect } from './modules/typing.js';

// Importa a função que configura navegação e smooth scroll
// Localizado em: assets/js/modules/navigation.js
import { initNavigation } from './modules/navigation.js';

// Importa a função que integra estatísticas do GitHub
import { initGithubStats } from './modules/github.js';

// Importa a função que gerencia as habilidades técnicas via JSON
import { initSkills } from './modules/skills.js';

// Importa a função que gerencia o modal de detalhes do projeto
import { initProjectModal } from './modules/modal.js';

// Importa a função que injeta dados estruturais no HTML (Data-Driven)
import { initDataBinder } from './modules/binder.js';

// Importa a função de automação do formulário de contato
import { initContact } from './modules/contact.js';

/**
 * Event Listener: DOMContentLoaded
 * 
 * Dispara quando o DOM foi completamente carregado e parseado.
 * Garante que todos os elementos HTML estao disponíveis
 * antes de executar o JavaScript.
 * 
 * Ordem de inicialização:
 * 1º - Sistema de tema (precisa estar ativo antes de outras coisas)
 * 2º - Efeito de digitação (hero section)
 * 3º - Navegação (permite smooth scroll)
 */
document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // 1. INICIALIZAR SISTEMA DE TEMA
    // ========================================
    // Responsável por:
    // - Detectar tema salvo (localStorage)
    // - Aplicar tema ao documento
    // - Adicionar listener ao botão de toggle
    // - Animar transição entre temas
    initTheme();

    // ========================================
    // 2. INJETAR DADOS NO HTML (Data-Driven Architecture)
    // ========================================
    // Responsável por capturar <tags data-bind>
    // Injeta os dados vindos de portfolio.js antes das animações
    initDataBinder();

    // ========================================
    // 2. INICIALIZAR EFEITO DE DIGITAÇÃO
    // ========================================
    // Responsável por:
    // - Criar efeito de typing na hero section
    // - Alternar entre diferentes frases
    // - Animar cursor piscante
    // - Gerenciar velocidade de digitação
    initTypingEffect();

    // ========================================
    // 3. INICIALIZAR NAVEGAÇÃO
    // ========================================
    // Realizar scroll suave até a seção
    // Previne comportamento padrão do navegador
    initNavigation();

    // ========================================
    // 4. INICIALIZAR ESTATÍSTICAS DO GITHUB
    // ========================================
    initGithubStats();

    // ========================================
    // 5. INICIALIZAR HABILIDADES TÉCNICAS (JSON)
    // ========================================
    initSkills();

    // ========================================
    // 6. INICIALIZAR MODAL DE PROJETOS
    // ========================================
    initProjectModal();

    // ========================================
    // 7. INICIALIZAR AUTOMAÇÃO DE CONTATO
    // ========================================
    initContact();

    // ========================================
    // LOG DE INICIALIZAÇÃO (OPCIONAL)
    // ========================================
    // Útil para debug e confirmação que tudo foi carregado
    // Remova em produção se desejar
    console.log('✓ Application initialized successfully');
    // Mensagens de sucesso no console indicam:
    // ✓ Todos os módulos foram carregados
    // ✓ Todas as inicializações foram executadas
    // ✓ Aplicação está pronta para uso
});
