# 📊 Data Science & Data Analytics Portfolio

<div align="center">

![Portfolio Preview](./assets/images/image.png)

**Portfólio web desenvolvido do zero para apresentar meus projetos como Analista de Dados**

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://euuuller.github.io/Portfolio/)
[![GitHub Stars](https://img.shields.io/github/stars/Euuuller/Portfolio?style=for-the-badge)](https://github.com/Euuuller/Portfolio/stargazers)
[![License](https://img.shields.io/github/license/Euuuller/Portfolio?style=for-the-badge)](./LICENSE)

[🌐 Ver Portfólio ao Vivo](https://euuuller.github.io/Portfolio/) • [🐛 Reportar Bug](https://github.com/Euuuller/Portfolio/issues) • [✨ Solicitar Feature](https://github.com/Euuuller/Portfolio/issues)

</div>

---

## 📚 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Motivação](#-motivação)
- [Principais Funcionalidades](#-principais-funcionalidades)
- [Foco em Análise de Dados](#-foco-em-análise-de-dados)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [Personalização](#-personalização)
- [Habilidades de Analista de Dados Evidenciadas](#-habilidades-de-analista-de-dados-evidenciadas)
- [Roadmap](#-roadmap)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🎯 Sobre o Projeto

Este é meu **portfólio pessoal focado em Análise de Dados e Ciência de Dados**, desenvolvido completamente por mim para apresentar meus projetos, habilidades técnicas e trajetória profissional de forma moderna e interativa.

O site foi construído do zero utilizando HTML, CSS e JavaScript puro, demonstrando minhas capacidades como Analista de Dados em:
- apresentar resultados de forma clara e visual
- organizar informações de forma objetiva para recrutadores
- estruturar um portfólio técnico alinhado às demandas de mercado

Além disso, o projeto também evidencia conhecimentos em desenvolvimento web front-end, essenciais para publicar dashboards, análises e projetos de dados na web.

## 💡 Motivação

Criei este portfólio para:
- ✅ Centralizar todos os meus projetos de Análise e Ciência de Dados em um único lugar
- ✅ Demonstrar habilidades técnicas além da análise de dados (como desenvolvimento web e deploy)
- ✅ Apresentar meu trabalho de forma profissional para recrutadores e empresas
- ✅ Praticar desenvolvimento front-end e design de interfaces
- ✅ Ter um espaço personalizado que represente minha identidade profissional como Analista de Dados

## ✨ Principais Funcionalidades

- 🌓 **Tema Claro/Escuro** com detecção automática de preferência do sistema
- 📱 **Design Responsivo** para desktop, tablet e mobile
- ⚡ **Alta Performance** com JavaScript vanilla e CSS moderno
- 🎨 **Animações Suaves** (scroll, hover, digitação) para melhor experiência
- 📊 **Skills Dinâmicas** carregadas via JSON para fácil manutenção
- ♿ **Acessibilidade** com HTML semântico e atributos ARIA
- 🔍 **SEO Otimizado** com meta tags e Open Graph configurados

## � Foco em Análise de Dados

Este portfólio foi pensado especificamente para o contexto de **Analista de Dados**, destacando:

- **Projetos de análise exploratória de dados (EDA)** com foco em geração de insights
- **Visualizações e dashboards** que facilitam a tomada de decisão
- **Projetos com SQL, Python e bibliotecas de análise** (como Pandas, NumPy, Matplotlib/Seaborn, etc.)
- **Estudos de caso** conectados a problemas de negócio reais
- **Storytelling com dados**, organizando problemas, abordagem, resultados e próximos passos

Cada projeto listado no portfólio é descrito de forma que recrutadores consigam entender rapidamente:
- qual problema foi atacado
- quais dados foram utilizados
- quais técnicas foram aplicadas
- quais foram os principais resultados e aprendizados

## �🛠️ Tecnologias Utilizadas

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Ferramentas & Deploy
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

---

## 📁 Estrutura do Projeto

```
Portfolio/
├── 📂 assets/
│   ├── 📂 css/
│   │   ├── 📂 base/
│   │   ├── 📂 components/
│   │   └── 📂 layout/
│   ├── 📂 data/
│   │   └── skills.json
│   ├── 📂 images/
│   └── 📂 js/
│       ├── 📂 components/
│       ├── 📂 utils/
│       └── main.js
├── 📂 docs/
│   └── Curriculum.pdf
├── index.html
├── README.md
└── LICENSE
```

---

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Git instalado

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Euuuller/Portfolio.git
cd Portfolio
```

2. Abra no navegador:
```bash
# Com Python
python -m http.server 8000

# Ou abra o arquivo index.html diretamente
```

3. Acesse `http://localhost:8000`

---

## 🎨 Personalização

### 1. Informações Pessoais

Edite o arquivo `index.html` para ajustar nome, bio e links sociais:

```html
<h1>Seu Nome</h1>
<p>Sua descrição profissional</p>
```

### 2. Skills e Tecnologias

Modifique `assets/data/skills.json` para refletir suas habilidades como Analista de Dados:

```json
{
  "categories": [
    {
      "name": "Linguagens",
      "skills": [
        { "name": "Python", "icon": "python" },
        { "name": "SQL", "icon": "database" }
      ]
    }
  ]
}
```

### 3. Estilos e Cores

Ajuste as variáveis em `assets/css/base/variables.css` para alinhar com sua identidade visual.

### 4. Projetos

Atualize a seção de projetos no `index.html` e adicione screenshots em `assets/images/projects/`, destacando:
- nome do projeto
- problema de negócio
- principais insights/resultados
- principais tecnologias usadas

---

## 🧠 Habilidades de Analista de Dados Evidenciadas

Este portfólio foi desenhado para mostrar, na prática, habilidades importantes para atuação como Analista de Dados, como:

- Análise exploratória de dados (EDA) e geração de insights
- Manipulação e limpeza de dados
- Criação de visualizações claras e objetivas
- Organização de projetos de dados com foco em reprodutibilidade
- Comunicação de resultados para diferentes públicos (técnico e não técnico)
- Publicação de projetos na web para facilitar o acesso de recrutadores e gestores

Nos projetos exibidos no site, essas habilidades aparecem em forma de:
- dashboards e gráficos interativos
- relatórios e estudos de caso
- códigos organizados em notebooks e scripts

---

## 📝 Roadmap

- [ ] Adicionar blog para artigos de Data Science e Análise de Dados
- [ ] Implementar sistema de filtros para projetos (por tema e tecnologia)
- [ ] Integrar Google Analytics para acompanhar acesso ao portfólio
- [ ] Adicionar seção de certificações e cursos
- [ ] Criar versão em inglês do portfólio
- [ ] Implementar modo de alto contraste para acessibilidade avançada

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Euller dos Santos**

Estudante de Engenharia Elétrica com especialização em Ciência de Dados no IFMA, em transição de carreira para atuar como **Analista de Dados**. Apaixonado por transformar dados em insights valiosos e resolver problemas reais através de análises.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/euuuller)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:euller.santos.duarte@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Euuuller)

---

<div align="center">

**⭐ Se este projeto te ajudou ou te inspirou, considere dar uma estrela!**

Feito com ❤️ por [Euller dos Santos](https://github.com/Euuuller)

</div>