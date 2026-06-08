Guia de Contribuição do Website da Burd

Explore o repositório do site oficial da Burd. Este projeto serve como a interface principal da nossa plataforma, ilustrando o poder da Burd — a camada de infraestrutura descentralizada que transforma GPUs distribuídas em um mercado livre e simples para Inteligência Artificial na América Latina.
Rodando o Projeto Localmente

Para rodar o repositório localmente e explorar a interface na sua máquina, siga estes passos simples:

1. Clone o Repositório:
Bash

git clone https://github.com/burd-network/website

2. Acesse o Diretório:
Bash

cd website

3. Instale as Dependências:
Bash

npm install

4. Rode o Servidor de Desenvolvimento:
Bash

npm run dev

5. Abra no Navegador:
Acesse http://localhost:3000 (porta padrão do Next.js) para visualizar o site da Burd localmente.
Diretrizes de Contribuição

Antes de enviar código para o projeto, pedimos que siga as diretrizes abaixo para garantir a integridade, a arquitetura e o padrão visual do projeto.
Convenção de Nomenclatura de Arquivos

Ao criar arquivos para componentes, páginas ou utilitários, utilize o padrão kebab-case (palavras em minúsculo separadas por hífen).

    Exemplo: gpu-card.tsx ou provider-bids-table.ts

Estrutura das Mensagens de Commit

Cada mensagem de commit deve seguir uma estrutura semântica clara, começando com o tipo seguido de uma descrição concisa. Utilize os seguintes padrões:

    feat: Introduz uma nova funcionalidade ou componente.

        Exemplo: feat: implementa gráfico de ganhos do provedor em tempo real

    fix: Corrige um bug ou falha visual/lógica.

        Exemplo: fix: resolve quebra de layout no bento grid no mobile

    docs: Focado em alterações de documentação (README, guias ou tutoriais).

        Exemplo: docs: atualiza instruções de deploy na Vercel

    style: Mudanças de formatação que não afetam a lógica (Tailwind, indentação, cores).

        Exemplo: style: ajusta o glow azul dos botões principais

    chore: Tarefas de rotina, manutenção ou atualização de dependências.

        Exemplo: chore: atualiza framer-motion para a última versão

    test: Adição ou modificação de testes unitários ou E2E.

        Exemplo: test: adiciona validação para o formulário de waitlist

    perf: Otimização de código focada em performance e carregamento.

        Exemplo: perf: otimiza carregamento das partículas 3D no hero

    refactor: Melhoria na estrutura do código sem adicionar novas features ou corrigir bugs.

        Exemplo: refactor: extrai lógica de formatação de valores em reais (R$)

Boas Práticas para Commits:

    Mantenha a mensagem curta e vá direto ao ponto.

    Utilize verbos no modo imperativo (ex: "adiciona", "corrige", "atualiza").

    Forneça contexto extra no corpo da mensagem caso a alteração seja complexa.

Como Contribuir com o Conteúdo do Site

A arquitetura do nosso conteúdo é baseada em Markdown/MDX. Siga os passos abaixo para adicionar novas páginas.
Como escrever um artigo / Blog

    Crie uma nova pasta em src/content/Blog/ com o slug do artigo. Exemplo: src/content/Blog/como-rodar-modelos-open-source/

    Crie um arquivo index.md dentro dessa nova pasta.

    Copie o frontmatter abaixo e preencha os detalhes:

Markdown

---
title: "Como rodar Modelos Open Source na Burd" # <--- Título do artigo
description: "Um guia prático para fazer o deploy sem lidar com Docker." # <--- Resumo
pubDate: "2026-06-10" # <--- Formato YYYY-MM-DD
draft: false # <--- Mude para true se não estiver pronto para publicar
categories:
  - Tutoriais
tags:
  - LLM
  - Deploy
author: "Nome do Contribuidor"
bannerImage: ./banner-image.jpg # <--- Imagem de capa na mesma pasta
---

    Adicione a imagem de capa na mesma pasta.

    Escreva o conteúdo em formato Markdown abaixo do bloco.

    Faça o commit e o push. O site fará o build e publicará automaticamente.

Como adicionar um projeto ao Ecossistema

A seção de ecossistema lista ferramentas e workloads que já rodam na rede da Burd.

    Crie uma pasta em src/content/Ecosystem/ com o nome do projeto. Exemplo: src/content/Ecosystem/chat-llm-template/

    Crie o arquivo index.md e utilize o template:

Markdown

---
projectTitle: Chat LLM Template
projectImage: "./project-banner.png"
pubDate: "2026-06-01"
tags: 
  - AI & ML
category: deployed_on_burd # <--- Pode ser "deployed_on_burd" ou "tools"
description: Interface de chat rodando Llama 3 direto nas GPUs distribuídas da Burd, com latência otimizada para LATAM.
websiteLink: "https://chat.sua-url.com/"
githubLink: "https://github.com/burd-network/chat-template"
featured: true # <--- Define se o projeto aparece no topo da página
---

Documentação (Docs)
Como alterar a sequência da Documentação

    Acesse o arquivo de configuração, geralmente em src/content/Docs/sequence.ts.

    Altere a ordem dos arrays para reorganizar a barra lateral.

TypeScript

export const docsSequence = [
  {
    label: "Documentação",
    subItems: [
      {
        label: "Começando", // <--- Altere a ordem aqui
        subItems: [ 
          { label: "O que é a Burd?" }, 
          { label: "Primeiro Deploy" },
          { label: "Guia para Provedores de GPU" },
          { label: "Trust Score e Bids" },
        ],
      },
  }]

Como adicionar uma nova página nos Docs

    Crie uma nova pasta em src/content/Docs/ com o assunto desejado. Exemplo: src/content/Docs/provedores/

    Crie o arquivo index.md utilizando o seguinte template:

Markdown

---
title: "Requisitos de Hardware para Provedores" # <--- Título do Doc
linkTitle: "Requisitos de Hardware" # <--- Título curto para o menu
weight: 1 # <--- Peso para a ordem de exibição
categories: ["Provedores"]
tags: ["Infraestrutura", "GPU"]
---

Contato

    Discord: [Burd Network]

    X/Twitter: [@BurdNetwork]

    Website Oficial: [burd.network]

    GitHub: [github.com/burd-network]
