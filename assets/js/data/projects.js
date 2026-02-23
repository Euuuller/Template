/**
 * =====================================
 * DATA LAYER: projects.js
 * PROPÓSITO: Centralizar todas as informações e dados dos projetos.
 * Isso permite popular o modal dinamicamente sem poluir o HTML.
 * =====================================
 */

export const projectsData = {
    // -------------------------------------
    // PROJETO 1: RFM Analysis
    // -------------------------------------
    "rfm-analysis": {
        badge: "Analysis",
        title: "Segmentação de Clientes (RFM)",
        subtitle: "Clusterização de base de clientes utilizando K-Means para campanhas de marketing personalizadas.",

        cards: {
            desafio: {
                icon: "ri-focus-3-line",
                title: "O Desafio",
                text: "Marketing massivo tinha baixo ROI e taxa de conversão."
            },
            solucao: {
                icon: "ri-lightbulb-line",
                title: "A Solução",
                text: "Algoritmo não-supervisionado para identificar personas baseado em Recência, Frequência e Valor."
            },
            impacto: {
                icon: "ri-line-chart-line",
                title: "Impacto & Resultados",
                text: "Aumento de 12% na conversão de campanhas de e-mail."
            }
        },

        links: {
            demo: "#",
            github: "https://github.com/euller-ds"
        },

        stack: [
            { name: "Python", class: "tag-python" },
            { name: "K-Means", class: "tag-xgboost" }, // usando as cores disponiveis 
            { name: "Scikit-learn", class: "tag-pandas" }
        ],

        metrics: [
            { label: "4 Perfis Definidos" },
            { label: "ROI +20%" },
            { label: "Python Puro" }
        ]
    },

    // -------------------------------------
    // PROJETO 2: Previsão de Vendas com XGBoost (Sales Dashboard)
    // -------------------------------------
    "sales-prediction": {
        badge: "MACHINE LEARNING",
        title: "Previsão de Vendas com XGBoost",
        subtitle: "Modelo preditivo de alta precisão para varejo, otimizando estoque através de análise de séries temporais e sazonalidade.",

        cards: {
            desafio: {
                icon: "ri-focus-3-line",
                title: "O Desafio",
                text: "Dificuldade em prever demanda futura causava excesso de estoque e perda de capital de giro."
            },
            solucao: {
                icon: "ri-lightbulb-line",
                title: "A Solução",
                text: "Modelo XGBoost treinado com 3 anos de histórico, considerando feriados e promoções."
            },
            impacto: {
                icon: "ri-line-chart-line",
                title: "Impacto & Resultados",
                text: "Redução de 15% em custos operacionais e melhor disponibilidade de produtos."
            }
        },

        links: {
            demo: "#",
            github: "https://github.com/euuuller"
        },

        stack: [
            { name: "Python", class: "tag-python" },
            { name: "XGBoost", class: "tag-xgboost" },
            { name: "Pandas", class: "tag-pandas" }
        ],

        metrics: [
            { label: "R² Score: 0.92" },
            { label: "Redução de Stockout" },
            { label: "Processamento < 2min" }
        ]
    },

    // -------------------------------------
    // PROJETO 3: Detecção de Fraudes
    // -------------------------------------
    "fraud-detection": {
        badge: "Machine Learning",
        title: "Detecção de Fraudes (ML)",
        subtitle: "Construção de um pipeline completo de detecção de fraudes em transações financeiras utilizando técnicas de ensemble learning.",

        cards: {
            desafio: {
                icon: "ri-focus-3-line",
                title: "O Desafio",
                text: "Alto índice de fraudes não detectadas prejudicando a receita e a taxa de aprovação legitima."
            },
            solucao: {
                icon: "ri-lightbulb-line",
                title: "A Solução",
                text: "Implementação de Random Forest e técnicas de balanceamento de classes (SMOTE)."
            },
            impacto: {
                icon: "ri-line-chart-line",
                title: "Impacto & Resultados",
                text: "Detecção de 95% das fraudes com uma taxa de falso positivo inferior a 2%."
            }
        },

        links: {
            demo: "#",
            github: "https://github.com/euuuller"
        },

        stack: [
            { name: "Python", class: "tag-python" },
            { name: "Scikit-Learn", class: "tag-xgboost" },
            { name: "XGBoost", class: "tag-pandas" }
        ],

        metrics: [
            { label: "95% Recall (Fraude)" },
            { label: "< 2% Falso Positivo" },
            { label: "API REST (Flask)" }
        ]
    }
};
