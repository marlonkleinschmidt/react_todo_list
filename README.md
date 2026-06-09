# ✅ React Todo List

Uma aplicação de gerenciamento de tarefas construída com uma stack moderna de front-end, focada em tipagem estática, performance e experiência do desenvolvedor.

🔗 **Demo ao vivo:** [react-todo-list-auot.vercel.app](https://react-todo-list-auot.vercel.app)

---

## 🚀 Stack Tecnológica

### Core

| Tecnologia                                    | Versão  | Função                                  |
| --------------------------------------------- | ------- | --------------------------------------- |
| [React](https://react.dev/)                   | ^19.1.1 | Biblioteca de UI baseada em componentes |
| [TypeScript](https://www.typescriptlang.org/) | ~5.8.3  | Tipagem estática sobre JavaScript       |
| [Vite](https://vitejs.dev/)                   | ^7.1.2  | Build tool e dev server ultrarrápido    |

### Estilização

| Tecnologia                                     | Versão  | Função                                    |
| ---------------------------------------------- | ------- | ----------------------------------------- |
| [Tailwind CSS](https://tailwindcss.com/)       | ^4.1.12 | Framework CSS utility-first               |
| [class-variance-authority](https://cva.style/) | ^0.7.1  | Gerenciamento de variantes de componentes |

### Roteamento & Estado

| Tecnologia                                                      | Versão | Função                                           |
| --------------------------------------------------------------- | ------ | ------------------------------------------------ |
| [React Router](https://reactrouter.com/)                        | ^7.8.2 | Roteamento client-side declarativo               |
| [use-local-storage](https://github.com/nas5w/use-local-storage) | ^3.0.0 | Persistência de estado via localStorage com hook |

### Tooling & Qualidade de Código

| Ferramenta                                                                               | Versão  | Função                                    |
| ---------------------------------------------------------------------------------------- | ------- | ----------------------------------------- |
| [ESLint](https://eslint.org/)                                                            | ^9.33.0 | Linting estático de código                |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)     | ^5.2.0  | Regras para uso correto de Hooks          |
| [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) | ^0.4.20 | Compatibilidade com HMR                   |
| [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)                           | ^4.5.0  | Importação de SVGs como componentes React |
| [pnpm](https://pnpm.io/)                                                                 | —       | Gerenciador de pacotes eficiente          |

---

## 🏗️ Arquitetura

### Estrutura de Pastas

```
react_todo_list/
├── src/                    # Código-fonte principal
├── index.html              # Entry point HTML (Vite SPA)
├── vite.config.ts          # Configuração do Vite
├── tsconfig.json           # Config base do TypeScript
├── tsconfig.app.json       # Config TS para o código da aplicação
├── tsconfig.node.json      # Config TS para scripts Node (Vite config)
├── eslint.config.js        # Configuração do ESLint (flat config)
├── package.json            # Dependências e scripts
└── pnpm-lock.yaml          # Lockfile do pnpm
```

### Decisões Arquiteturais

#### ⚡ Vite com SWC

O projeto utiliza `@vitejs/plugin-react-swc` em vez do Babel padrão. SWC é um compilador escrito em Rust que oferece transpilação significativamente mais rápida, especialmente perceptível em projetos maiores. Isso resulta em tempos de HMR (Hot Module Replacement) mais ágeis durante o desenvolvimento.

#### 🎨 Tailwind CSS v4 via Plugin Vite

A integração do Tailwind é feita diretamente via `@tailwindcss/vite`, a abordagem nativa do Tailwind v4. Isso elimina a necessidade de configuração via `postcss.config.js`, simplificando o toolchain e melhorando a performance do build.

#### 🔀 TypeScript com Split de Configs

Três arquivos `tsconfig` com responsabilidades separadas:

- `tsconfig.json` — referências e configuração raiz
- `tsconfig.app.json` — configuração para o código da aplicação (DOM, JSX)
- `tsconfig.node.json` — configuração para scripts que rodam em Node (como `vite.config.ts`)

Essa separação garante que o compilador aplique o conjunto correto de `lib` e `types` para cada contexto, evitando vazamentos de tipos entre ambiente browser e Node.

#### 💾 Persistência com `use-local-storage`

O estado das tarefas é persistido no `localStorage` do browser por meio do hook `use-local-storage`. Isso dispensa a necessidade de um backend ou banco de dados para uma aplicação client-only, mantendo os dados entre sessões de forma simples e direta.

#### 🧩 Variantes com CVA

`class-variance-authority` é utilizado para gerenciar variantes de componentes UI de forma tipada. Em vez de concatenações manuais de classes Tailwind com lógica condicional, o CVA centraliza as variantes (ex: `size`, `variant`, `intent`) em um único lugar, tornando o código mais legível e refatorável.

#### 🗺️ Roteamento com React Router v7

React Router v7 adota o modelo de Data APIs, alinhando-se ao padrão de Remix. Permite definição de rotas com loaders e actions, facilitando a separação de responsabilidades entre busca de dados e renderização de UI.

---

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/marlonkleinschmidt/react_todo_list.git
cd react_todo_list

# Instale as dependências
pnpm install
```

### Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento com HMR
pnpm dev

# Verificar erros de tipo e gerar build de produção
pnpm build

# Inspecionar o build de produção localmente
pnpm preview

# Rodar o linter
pnpm lint
```

---

## 📦 Deploy

O projeto está configurado para deploy contínuo na **Vercel**. Cada push na branch `main` dispara automaticamente um novo deploy de produção.

Build command: `tsc -b && vite build`  
Output directory: `dist`

---

## 📄 Licença

Este projeto é de uso pessoal/educacional. Sinta-se livre para explorar e adaptar.
