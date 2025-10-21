# Portfólio de Projetos - Cientista de Dados

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Code Style: Prettier">
  <img src="https://img.shields.io/badge/built%20with-Vite-646CFF.svg" alt="Built with Vite">
</p>

Este repositório contém o código-fonte do meu portfólio profissional, uma aplicação web estática projetada para apresentar minha jornada, habilidades e projetos na área de Ciência de Dados. O projeto foi desenvolvido com foco em design limpo, performance e uma experiência de usuário moderna e interativa.

**[➡️ Ver Demonstração Ao Vivo](https://euuuller.github.io/Template/)**

---

<!--
## 📸 Screenshot

(Recomendo que você tire um print da sua página e coloque aqui!)

![Screenshot do Portfólio](./docs/screenshot.png)

-->

## ✨ Funcionalidades Principais

O portfólio não é apenas um mostruário de projetos, mas também uma demonstração de competências em desenvolvimento frontend:

- **Design Responsivo:** Interface totalmente adaptável para desktops, tablets e dispositivos móveis.
- **Tema Claro/Escuro:** Alternância de tema para conforto visual do usuário, com persistência da preferência.
- **Animações Interativas:** Efeito de digitação na seção principal e animações de fade-in ao rolar a página, criadas com JavaScript puro e `Intersection Observer API`.
- **Arquitetura Modular:** Código CSS e JavaScript organizado em módulos para alta manutenibilidade, seguindo as melhores práticas do mercado.
- **Ambiente de Desenvolvimento Moderno:** O projeto é configurado com ferramentas profissionais para garantir a qualidade e a consistência do código.

## 🛠️ Stack de Tecnologias e Ferramentas

Este projeto foi construído utilizando um conjunto de tecnologias modernas para garantir performance e uma ótima experiência de desenvolvimento.

- **Frontend:**
  - HTML5 (Semântico)
  - CSS3 (com Variáveis Customizadas para theming)
  - JavaScript (ES6+ com sistema de Módulos)

- **Build e Desenvolvimento:**
  - **Vite:** Ferramenta de build ultrarrápida para o ambiente de desenvolvimento e otimização para produção.
  - **Node.js:** Ambiente de execução para as ferramentas de desenvolvimento.

- **Qualidade e Padronização de Código:**
  - **ESLint:** Para análise estática e identificação de padrões problemáticos no JavaScript.
  - **Prettier:** Para formatação de código automática e consistente.
  - **Stylelint:** Para garantir boas práticas e padrões no código CSS.

- **Automação:**
  - **Husky & lint-staged:** Para executar os linters e formatadores automaticamente antes de cada commit, garantindo que apenas código de alta qualidade seja versionado.

## 🚀 Executando o Projeto Localmente

Para explorar ou contribuir com o projeto, siga os passos abaixo.

**Pré-requisitos:**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)

**Passos:**

1.  **Clone o repositório:**

    ```sh
    git clone https://github.com/Euuuller/Template.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```sh
    cd Template
    ```

3.  **Instale as dependências:**

    ```sh
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```sh
    npm run dev
    ```

Após executar o último comando, o Vite iniciará um servidor local (geralmente em `http://localhost:5173`) com _hot reload_, que atualiza a página automaticamente a cada alteração no código.

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão otimizada do site para produção na pasta `dist/`.
- `npm run format`: Formata todo o código do projeto usando o Prettier.
- `npm run lint`: Executa o ESLint e o Stylelint para encontrar possíveis erros no código.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
