/**
 * =====================================
 * DATA LAYER: portfolio.js
 * PROPÓSITO: Centralizar TODAS as strings, textos e links estáticos da página.
 * Isso permite atualizar o portfólio sem precisar ler o HTML gigantesco.
 * =====================================
 */

export const portfolioData = {
    // -------------------------------------
    // DADOS PESSOAIS & GLOBAIS
    // -------------------------------------
    profile: {
        logoHtml: "<span>&lt;/</span> E.D",
        firstName: "Euller",
        lastName: "Duarte",
        fullName: "Euller Duarte",
        role: "Analista de Dados & Graduando em Engenharia",
        email: "euller.santos.duarte@email.com",
        github: "https://github.com/euuuller",
        linkedin: "https://linkedin.com/in/euuuller",
        medium: "https://medium.com/@euller.duarte",
        cvLink: "assets/docs/Vitae.pdf",
        availability: "Disponivel para projetos",
        avatar: "https://github.com/Euuuller.png"
    },

    // -------------------------------------
    // SEÇÃO: HERO
    // -------------------------------------
    hero: {
        titleHtml: "Euller <span>Duarte</span>",
        greeting: "Olá, seja muito bem-vindo ao meu portfólio de projetos!",
        descriptionHtml: `Fique à vontade para explorar o <span class="highlight-text">portfólio</span> e entrar em <span class="highlight-text">contato</span> pelos links ao final da página.`
    },

    // -------------------------------------
    // SEÇÃO: SOBRE MIM
    // -------------------------------------
    about: {
        title: "Sobre Mim",
        subtitle: "Minha jornada profissional e acadêmica",
        descriptionHtml1: `Graduando em <span class="highlight-text">Engenharia Elétrica</span> pelo Instituto Federal do Maranhão (IFMA), com foco em <span class="highlight-text">Análise de Dados</span>. Possuo experiência prática com <span class="tech-highlight tech-excel">Excel</span>, <span class="tech-highlight tech-powerbi">Power BI</span>, <span class="tech-highlight tech-sql">SQL</span> e <span class="tech-highlight tech-python">Python</span>, aplicando conceitos de Estatística e os principais tipos de análise de dados Descritiva, Diagnóstica, Preditiva e Prescritiva para resolver problemas de negócio.`,
        descriptionHtml2: `Desenvolvi projetos completos utilizando dados públicos, incluindo segmentação de clientes (RFM), análise de retenção por cohort, diagnóstico de queda de vendas, criação de dashboards gerenciais e previsão do número de pedidos, transformando dados em tomada de decisão orientada a dados.`,
        stats: {
            focusTitle: "Foco Principal",
            focusValue: "Análise de Dados & BI",
            educationTitle: "Formação",
            educationValue: "Eng. Elétrica (IFMA)"
        }
    },

    // -------------------------------------
    // SEÇÃO: HABILIDADES
    // -------------------------------------
    skills: {
        title: "Habilidades Técnicas",
        subtitle: "Stack tecnológica otimizada para análise de dados e desenvolvimento de soluções escaláveis."
    },

    // -------------------------------------
    // SEÇÃO: PROJETOS EM DESTAQUE
    // -------------------------------------
    projectsList: {
        title: "Projetos em Destaque",
        subtitle: "Aplicações reais desenvolvidas com foco em Ciência de Dados e Business Intelligence."
    },

    // -------------------------------------
    // SEÇÃO: CONTATO
    // -------------------------------------
    contact: {
        title: "Vamos Conversar?",
        subtitle: "Estou disponível para novas oportunidades e colaborações",
        introTitle: "Canais de Contato",
        introText: "Sinta-se à vontade para me adicionar nas redes ou enviar um email direto. Será um prazer entrar em contato com você.",
        details: {
            linkedin: "Faça uma conexão comigo",
            github: "Veja meus projetos",
            medium: "Leia meus artigos"
        }
    },

    // -------------------------------------
    // SEÇÃO: FOOTER
    // -------------------------------------
    footer: {
        copyright: "© 2026 Euller dos Santos Rodrigues Duarte. Todos os direitos reservados."
    }
};
