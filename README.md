<div align="center">
  <h1>Calculator</h1>
  
  <p>
    Uma aplicação de calculadora moderna, responsiva e de alta performance.
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>

<br/>

## Sobre o Projeto

Este projeto é uma calculadora desenvolvida com as mais recentes tecnologias do ecossistema front-end. O foco principal foi criar uma interface de utilizador (UI) limpa, com animações fluidas e uma estrutura de código escalável, utilizando o App Router do Next.js.

## Funcionalidades

- **Interface Moderna e Acessível:** Construída com componentes do **HeroUI** e arquitetura do **shadcn/ui**.
- **Animações Fluidas:** Interações e transições de estado geridas pelo **Framer Motion**.
- **Design Responsivo:** Totalmente adaptável a qualquer ecrã (Mobile, Tablet, Desktop) graças ao **Tailwind CSS**.
- **Dark/Light Mode:** Suporte nativo a temas utilizando variáveis CSS e as configurações do shadcn.
- **Métricas e Performance:** Integração com **Vercel Speed Insights** para monitorização em tempo real.

## Tecnologias Utilizadas

Abaixo está a lista das principais bibliotecas e *frameworks* que compõem este projeto:

* [Next.js 15](https://nextjs.org/)
* [React 19](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [HeroUI](https://heroui.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [Lucide React](https://lucide.dev/) & [MUI Icons](https://mui.com/)

## Instalação e Execução

Para correr este projeto localmente na tua máquina, segue os passos abaixo.

### Pré-requisitos
* [Node.js](https://nodejs.org/en/) (versão 18+ recomendada)
* `npm`, `yarn`, `pnpm` ou `bun`

### Passos

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/o-teu-utilizador/calculator.git](https://github.com/o-teu-utilizador/calculator.git)

   Aceder ao diretório:

Bash
cd calculator
Instalar as dependências:

Bash
npm install
Iniciar o servidor de desenvolvimento:

Bash
npm run dev
Visualizar a aplicação:
Abre o teu navegador e acede a http://localhost:3000. A página será atualizada automaticamente conforme editas o código (via Turbopack).

Estrutura do Projeto
A organização principal do código segue a norma do Next.js App Router:

src/app/ - Rotas, páginas e estilos globais.

src/components/ - Componentes reutilizáveis da interface (inclui as pastas geradas pelo shadcn/ui).

src/lib/ - Ficheiros utilitários (ex: utils.ts para a gestão de classes do Tailwind).

tailwind.config.ts - Configuração dos temas e integração do plugin HeroUI.

Como Contribuir
Contribuições são muito bem-vindas! Se quiseres melhorar este projeto, segue estes passos:

Faz um Fork do projeto

Cria uma Branch para a tua modificação (git checkout -b feature/NovaFuncionalidade)

Faz o Commit das tuas alterações (git commit -m 'Adiciona NovaFuncionalidade')

Faz o Push para a tua Branch (git push origin feature/NovaFuncionalidade)

Abre um Pull Request no GitHub

Licença
Este projeto está sob a licença MIT. Consulta o ficheiro LICENSE para mais detalhes.
