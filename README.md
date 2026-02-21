# 💼 Portfólio de Analista de Dados

<div align="center">

![Portfolio Preview](./assets/images/print.png)

**Um portfólio web moderno e responsivo desenvolvido com HTML5, CSS3 (ITCSS) e JavaScript puro**

[![Status](https://img.shields.io/badge/Status-Ativo-success?style=for-the-badge)](.)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](.)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](.)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](.)

[🌐 Demo Ao Vivo](#demo) • [📁 Estrutura](#estrutura-do-projeto) • [🚀 Quick Start](#como-usar) • [📖 Documentação](#documentação-técnica)

</div>

---

## 📑 Índice

- [✨ Destaques](#-destaques)
- [🎯 Sobre](#-sobre)
- [🏗️ Arquitetura](#-arquitetura)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Stack Tecnológico](#-stack-tecnológico)
- [🚀 Quick Start](#-quick-start)
- [📖 Guia de Desenvolvimento](#-guia-de-desenvolvimento)
- [💻 Seções do Site](#-seções-do-site)
- [🎨 Sistema de Temas](#-sistema-de-temas)
- [📱 Responsividade](#-responsividade)
- [♿ Acessibilidade](#-acessibilidade)
- [🧭 Roadmap](#-roadmap)
- [📄 Licença](#-licença)

---

## ✨ Destaques

- 🎨 **Design ITCSS** com organização modular em 7 níveis de cascata CSS
- 🌓 **Sistema de Temas** persistente em localStorage (dark/light mode)
- 📱 **Totalmente Responsivo** com breakpoints otimizados (desktop, tablet, mobile)
- ⚡ **Zero Dependências** - HTML/CSS/JavaScript puro (vanilla)
- 🎬 **Animações Fluidas** com 11 @keyframes otimizadas
- ♿ **Acessível** com HTML semântico, ARIA labels e keyboard navigation
- 📊 **Documentação Completa** - 3.500+ linhas de comentários em português
- 🔍 **Otimizado para SEO** com meta tags e Open Graph

---

## 🎯 Sobre

Um portfólio profissional focado em **Análise de Dados**, desenvolvido para apresentar projetos, habilidades técnicas e experiência de forma moderna e interativa. 

### Por que este projeto?

Este portfólio demonstra não apenas competência em análise de dados, mas também:
- **Desenvolvimento web full-stack** (estrutura, estilo, interatividade)
- **Pensamento em arquitetura** (ITCSS, modularização JavaScript)
- **Domínio de performance e UX** (animações, responsividade, acessibilidade)
- **Documentação clara** (código altamente comentado)

Ideal para profissionais que desejam um portfólio técnico visualmente atraente e funcional.

---

## 🏗️ Arquitetura

### CSS - ITCSS (Inverted Triangle CSS)

A estrutura CSS segue o padrão **ITCSS**, dividida em 7 níveis de especificidade crescente:

```
📊 ITCSS Cascade (Do Geral para o Específico)

1️⃣  SETTINGS      → variables.css (tokens, cores, tipografia)
2️⃣  TOOLS         → (mixins, funções - não implementado)
3️⃣  GENERIC       → reset.css (normalização browser)
4️⃣  BASE          → typography.css, animations.css (elementos HTML base)
5️⃣  LAYOUT        → grid.css, spacing.css (estrutura e espaçamento)
6️⃣  COMPONENTS    → button.css (componentes reutilizáveis)
7️⃣  SECTIONS      → header.css, hero.css, etc. (seções de página)
8️⃣  UTILITIES     → (classes utilitárias - reservado)
```

**Benefícios:**
- Evita conflitos de especificidade
- Facilita manutenção e escalabilidade
- Permite adicionar novos componentes sem quebrar os existentes

### JavaScript - Arquitetura Modular (ES6)

Estrutura em módulos com separação de responsabilidades:

```
📦 JavaScript Modular

assets/js/
├── core/                 # Utilidades base
│   ├── dom.js           # Manipulação de DOM (17 funções)
│   ├── utils.js         # Helpers (debounce, throttle, storage, viewport)
│   └── constants.js     # Configurações, seletores e classes
│
├── config/              # Configurações
│   └── theme-config.js  # Sistema de temas (cores, preferências)
│
├── modules/             # Funcionalidades
│   ├── theme.js         # Toggle dark/light mode
│   ├── typing.js        # Efeito de digitação (hero)
│   └── navigation.js    # Scroll smooth e navegação
│
└── main.js              # Orquestrador (DOMContentLoaded)
```

**Padrão:**
- Entry point único (`main.js`) que inicializa na ordem correta
- Destruição e reinicialização suportadas
- Sem dependencies externas

---

## 📁 Estrutura do Projeto

```plaintext
Template/
│
├── 📄 index.html                # Página principal (950+ linhas comentadas)
├── 📄 README.md                 # Este arquivo
├── 📄 LICENSE                   # MIT License
│
└── 📂 assets/
    │
    ├── 📂 css/
    │   ├── main.css             # Entry point CSS (ITCSS) - 350+ comentários
    │   ├── variables.css        # CSS Custom Properties - 300+ comentários
    │   ├── reset.css            # Normalização browser - 250+ comentários
    │   │
    │   ├── 📂 base/
    │   │   ├── typography.css   # Tipografia e gradient text - 280+ comentários
    │   │   └── animations.css   # 11 @keyframes - 400+ comentários
    │   │
    │   ├── 📂 layout/
    │   │   ├── grid.css         # Sistema de container - 200+ comentários
    │   │   └── spacing.css      # Responsive padding - 150+ comentários
    │   │
    │   ├── 📂 components/
    │   │   └── button.css       # 9 variações de botão - 600+ comentários
    │   │
    │   └── 📂 sections/
    │       ├── header.css       # Navegação fixa - 200+ comentários
    │       ├── hero.css         # Seção hero - 250+ comentários
    │       ├── about.css        # Sobre mim - 200+ comentários
    │       ├── skills.css       # Carousel de skills - 140+ comentários
    │       ├── projects.css     # Grid de projetos - 280+ comentários
    │       ├── contact.css      # Formulário e info - 240+ comentários
    │       └── footer.css       # Rodapé com animações - 120+ comentários
    │
    ├── 📂 js/
    │   ├── main.js              # Orquestrador central
    │   │
    │   ├── 📂 core/
    │   │   ├── dom.js           # 17 funções de manipulação DOM
    │   │   ├── utils.js         # Utilitários (debounce, throttle, storage)
    │   │   └── constants.js     # CONFIG, SELECTORS, CLASSES
    │   │
    │   ├── 📂 config/
    │   │   └── theme-config.js  # Sistema dual-theme (dark/light)
    │   │
    │   └── 📂 modules/
    │       ├── theme.js         # Toggle tema com localStorage
    │       ├── typing.js        # Efeito digitação tipo Watson
    │       └── navigation.js    # Smooth scroll e menu interativo
    │
    ├── 📂 data/
    │   └── skills.json          # Dados de habilidades (estruturado)
    │
    └── 📂 image/                # Imagens do projeto
        └── *.png/svg            # Assets gráficos
```

---

## ⚙️ Stack Tecnológico

### Frontend
| Tecnologia | Versão | Finalidade |
|-----------|--------|-----------|
| **HTML5** | Latest | Semântica e estrutura |
| **CSS3** | Latest | Estilos e animações |
| **JavaScript (ES6+)** | Vanilla | Interatividade |
| **Lucide Icons** | Latest | Ícones SVG |
| **Remix Icon** | Latest | Ícones adicionais |

### Tipografia
- **Outfit** (Display) - Títulos
- **Inter** (Sans) - Corpo
- **JetBrains Mono** (Mono) - Código

### Deploy & Ferramentas
| Ferramenta | Uso |
|-----------|------------|
| **Git** | Versionamento |
| **GitHub Pages** | Hospedagem estática |
| **VS Code** | Editor |
| **LocalStorage** | Persistência de preferências |

---

## 🚀 Quick Start

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- VS Code (recomendado)
- Git instalado

### Instalação

#### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/Template.git
cd Template
```

#### 2. Abra localmente

**Opção A: Python SimpleHTTPServer**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Opção B: VS Code Live Server**
- Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Clique em "Go Live" no canto inferior direito

**Opção C: Abra direto no navegador**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

#### 3. Navegue para
```
http://localhost:8000/
```

---

## 📖 Guia de Desenvolvimento

### Adicionando Novo Componente CSS

1. **Crie o arquivo** em `assets/css/components/`:
   ```css
   /* assets/css/components/card.css */
   
   /* =======================================
      CARD COMPONENT
      ======================================= */
   
   .card {
       /* estilos base */
   }
   ```

2. **Importe em** `assets/css/main.css`:
   ```css
   /* ... existing imports ... */
   @import url('./components/button.css');
   @import url('./components/card.css'); /* ← Nova linha */
   ```

3. **Use na seção apropriada**:
   ```html
   <div class="card">
       <!-- conteúdo -->
   </div>
   ```

### Adicionando Novo Módulo JavaScript

1. **Crie o arquivo** em `assets/js/modules/`:
   ```javascript
   // assets/js/modules/carousel.js
   
   export const CarouselModule = (() => {
       // Estado privado
       let isInitialized = false;
   
       const init = () => {
           // Lógica de inicialização
           isInitialized = true;
       };
   
       const destroy = () => {
           // Lógica de destruição
           isInitialized = false;
       };
   
       return { init, destroy };
   })();
   ```

2. **Importe e inicialize em** `assets/js/main.js`:
   ```javascript
   import { CarouselModule } from './modules/carousel.js';
   
   document.addEventListener('DOMContentLoaded', () => {
       CarouselModule.init();
   });
   ```

### Personalizando Variáveis CSS

Edite `assets/css/variables.css`:

```css
:root {
    /* Cores */
    --primary: #3B82F6;        /* Azul */
    --secondary: #10B981;      /* Verde */
    --text-main: #FFFFFF;      /* Branco */
    --text-muted: #999999;     /* Cinza */
    
    /* Tipografia */
    --font-display: 'Outfit', sans-serif;
    --font-sans: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    
    /* Transitions */
    --transition-base: 0.3s ease;
    --transition-fast: 0.2s ease;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-main: #0F0F0F;
        --bg-surface: #1A1A1A;
    }
}
```

---

## 💻 Seções do Site

### 1. **Header** (`header.css`)
Navegação fixa com glassmorphism, logo e toggle de tema

**Features:**
- Navegação sticky com scroll detection
- Theme toggle com transição suave
- Menu responsivo em mobile

### 2. **Hero** (`hero.css`)
Seção inicial com efeito de digitação

**Features:**
- Badge com pulsing animation
- Título com gradient text
- Typing effect (muda de profissão em loop)
- CTA buttons com efeito hover
- Scroll indicator com bounce animation

### 3. **About** (`about.css`)
Seção "Sobre mim" com layout grid e stats

**Features:**
- Foto circular com shadow
- Grid 2-coluna (desktop) → 1-coluna (mobile)
- Cards de estatísticas com number counter
- Shimmer animation in highlighted text

### 4. **Skills** (`skills.css`)
Carousel infinito de tecnologias

**Features:**
- Scroll automático infinito (2 direções alternadas)
- Hover effect com translateY
- Responsivo: ajusta tamanho por breakpoint

### 5. **Projects** (`projects.css`)
Grid de projetos com overlay interativo

**Features:**
- Auto-fit grid (1-4 colunas conforme tamanho)
- Hover com zoom+blur de imagem
- Overlay com ícones de action (Demo/GitHub)
- Tech tags com destaque no hover
- Stats de projeto (forks, stars)

### 6. **Contact** (`contact.css`)
Seção de contato com formulário e informações

**Features:**
- Layout 2-coluna: Info (esquerda) + Form (direita)
- Ícones coloridos por tipo de contato
- Formulário com validação visual (focus states)
- Inputs com glow effect no focus

### 7. **Footer** (`footer.css`)
Rodapé minimalista com ícones animados

**Features:**
- Background secundário distinguido
- Ícones animados (coração pulsando, café com vapor)
- Créditos simples e elegantes

---

## 🎨 Sistema de Temas

### Como Funciona

1. **Detecção de Preferência**
   ```javascript
   // theme-config.js detecta: prefers-color-scheme media query
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
   ```

2. **Armazenamento Persistente**
   ```javascript
   localStorage.setItem('theme', 'dark'); // Salva preferência do usuário
   ```

3. **Aplicação de Cores**
   ```css
   /* variables.css */
   :root {
       --bg-main: #FFFFFF;      /* Default: light */
       --text-main: #000000;
   }
   
   [data-theme="dark"] {
       --bg-main: #0F0F0F;      /* Override: dark */
       --text-main: #FFFFFF;
   }
   ```

### Temas Disponíveis

| Tema | Palette |
|------|---------|
| **Light** | Fundo branco, texto escuro |
| **Dark** | Fundo #0F0F0F, texto branco |

### Toggle de Tema

```html
<button class="theme-toggle" id="themeToggle">
    <i class="ri-moon-line"></i>
</button>
```

Funcionamento:
1. Clique no botão
2. JavaScript alterna `data-theme` no `<html>`
3. CSS variables mudam automaticamente
4. localStorage salva preferência

---

## 📱 Responsividade

### Breakpoints

```css
/* Mobile-first approach */

/* Desktop: 1200px+ */
.container { max-width: 1200px; }

/* Tablet: até 992px */
@media (max-width: 992px) {
    .projects-grid { grid-template-columns: 1fr 1fr; }
}

/* Mobile: até 768px */
@media (max-width: 768px) {
    .projects-grid { grid-template-columns: 1fr; }
}

/* Small phones: até 480px */
@media (max-width: 480px) {
    font-size: 14px; /* Reduz base font */
}
```

### Técnicas Usadas

- **Fluid Typography**: `clamp()` para fonts responsivas
- **Auto-fit Grid**: `repeat(auto-fit, minmax())` para layouts adaptáveis
- **Flexbox & Grid**: Layouts flexíveis
- **Media Queries**: 3 breakpoints principais

---

## ♿ Acessibilidade

Implementação em conformidade com **WCAG 2.1 Level AA**:

### Semântica HTML
```html
<header>, <nav>, <main>, <section>, <article>, <footer>
```

### ARIA Labels
```html
<button aria-label="Alternar tema (dark/light)">
    <i class="ri-moon-line"></i>
</button>
```

### Contraste de Cores
- Razão de contraste ≥ 4.5:1 para texto normal
- Razão de contraste ≥ 3:1 para texto grande

### Keyboard Navigation
- Tab para navegar entre botões/links
- Enter para ativar
- Escape para fechar modais

### Suporte a Screen Readers
- Atributos `alt` em imagens
- `role` attributes quando necessário
- Estrutura lógica de headings

---

## 🧭 Roadmap

### Curto Prazo (v2.0)
- [ ] Sistema de dark mode com transição suave
- [ ] Animação de counter para estatísticas
- [ ] Menu mobile com drawer/hamburger
- [ ] Scroll-to-top button

### Médio Prazo (v3.0)
- [ ] Blog integrado para artigos de Data Science
- [ ] Filtros por categoria/tecnologia nos projetos
- [ ] Google Analytics integrado
- [ ] Seção de certificações

### Longo Prazo (v4.0)
- [ ] Versão em inglês
- [ ] PWA (Progressive Web App)
- [ ] Dark/Light/Auto theme modes
- [ ] Modo alto contraste para acessibilidade avançada
- [ ] CMS headless para gerenciar conteúdo

---

## 🤝 Contribuindo

Este é um projeto pessoal, mas você pode fazer fork e adaptá-lo para seu portfólio!

**Guia rápido:**
1. Faça um fork
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License

Copyright (c) 2024 Euller dos Santos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 👤 Autor

**Euller dos Santos**

Analista de Dados em formação | Desenvolvedor Front-End | Apaixonado por dados e web design

### Conectar-se

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/euuuller)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Euuuller)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:euller.santos.duarte@gmail.com)

---

## 📚 Recursos Complementares

- [ITCSS: Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [JavaScript.info - Modules](https://javascript.info/modules)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

<div align="center">

**Desenvolvido com ❤️ + ☕ por Euller dos Santos**

⭐ Se este projeto foi útil, considere deixar uma estrela!

![GitHub last commit](https://img.shields.io/github/last-commit/Euuuller/Portfolio?style=for-the-badge)

</div>
