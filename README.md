<div align="center">
  <h1>Calculadora React + Next.js</h1>
  
  Projeto de calculadora feito com **React** e **Next.js 15**, usando **TypeScript**, **Tailwind CSS** e componentes de interface do pacote `@heroui`.

  <p>
    <img src="https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>


</div>

## Visão geral

A aplicação exibe uma calculadora funcional com entrada de expressão, teclado virtual e histórico de cálculos. A interface possui:

- Campo de expressão visual e resultado atual
- Botões para números, operações, ponto decimal, limpar e apagar
- Alternância entre modo claro e escuro
- Histórico de cálculos realizado
- Modal de ajuda com atalhos de teclado

## Funcionalidades

1. Cálculo de expressões matemáticas simples usando `eval`
2. Histórico de cálculos exibido ao alternar para a aba de histórico
3. Alternância de tema claro/escuro com persistência no `localStorage`
4. Suporte a teclado:
   - Digitação de números e operadores com teclado físico
   - `TAB` para alternar entre calculadora e histórico
   - `?` para abrir o modal de ajuda
5. Layout responsivo e estilo baseado em Tailwind CSS

## Estrutura do projeto

```
calculator/
├── src/
│   ├── app/                # Layouts raiz, páginas e arquivos de roteamento (App Router)
│   │   ├── globals.css     # Variáveis CSS e diretivas globais do Tailwind
│   │   └── page.tsx        # Entry-point principal da interface da calculadora
│   ├── components/         # Blocos de construção da interface e lógicas isoladas
│   │   ├── ui/             # Componentes primitivos gerados pelo shadcn/ui
│   │   └── ...             # Componentes específicos (Visor, Teclado, Histórico)
│   ├── lib/                # Funções utilitárias compartilhadas
│   │   └── utils.ts        # Utilitário 'cn' (mesclagem de classes via clsx + tailwind-merge)
├── public/                 # Assets estáticos servidos diretamente (imagens, ícones)
├── components.json         # Configuração arquitetural do shadcn/ui
├── tailwind.config.ts      # Integrações de design (Plugins HeroUI, Cores, Animações)
├── next.config.ts          # Configurações do compilador do Next.js
└── package.json            # Gerenciamento de dependências e scripts do projeto
```

## Dependências principais

- `next` 15.1.5
- `react` 19
- `typescript` 5
- `tailwindcss` 3
- `@heroui/button`, `@heroui/input`, `@heroui/modal`, `@heroui/switch`, `@heroui/tooltip`, `@heroui/kbd`
- `@mui/material` e `@mui/icons-material`
- `framer-motion`

## Requisitos

- Node.js 18 ou superior
- npm 10 ou superior

## Instalação

No diretório do projeto, execute:

```bash
npm install
```

## Execução em desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Depois disso, abra o navegador em:

```bash
http://localhost:3000
```

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para iniciar o servidor de produção local:

```bash
npm run start
```

## Como usar

- Clique nos botões da calculadora para montar expressões
- Use `=` para calcular
- Use `AC` para limpar tudo, `C` para limpar apenas a expressão e `DEL` para apagar o último caractere
- Clique no botão `?` para ver o modal de ajuda
- Use o botão de alternância para mudar entre tema claro e escuro
- Pressione `TAB` para alternar entre a visualização da calculadora e o histórico

## Observações

- O cálculo de expressões é feito com `eval`, portanto o comportamento segue as regras de avaliação do JavaScript
- O histórico é mantido apenas durante a sessão atual de execução do aplicativo
- O tema selecionado é salvo no `localStorage`

## Demonstração Visual
<div align="center">
<img width="1920" height="962" alt="image" src="https://github.com/user-attachments/assets/373a4141-f6f1-41a1-96e0-fc25f9de3cbf" />
</div>

<div align="center" >
Construído com dedicação utilizando o poder do React e Next.js.
</div>
