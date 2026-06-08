# Guia de Contribuição do Website da Burd

Bem-vindo ao repositório do site oficial da **Burd**.

Este projeto é a interface principal da nossa plataforma e apresenta a proposta da Burd: uma camada de infraestrutura descentralizada que transforma GPUs distribuídas em um mercado livre, acessível e simples para aplicações de Inteligência Artificial na América Latina.

Este guia explica como rodar o projeto localmente, seguir os padrões de contribuição e adicionar novos conteúdos ao website.

---

## Rodando o projeto localmente

Para executar o site da Burd na sua máquina, siga os passos abaixo.

### 1. Clone o repositório

```bash
git clone https://github.com/burd-network/website
```

### 2. Acesse o diretório do projeto

```bash
cd website
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Abra no navegador

Acesse:

```txt
http://localhost:3000
```

---

## Diretrizes de contribuição

Antes de enviar código para o projeto, siga as diretrizes abaixo para manter a consistência visual, técnica e estrutural do website da Burd.

---

## Convenção de nomenclatura de arquivos

Ao criar arquivos para componentes, páginas, hooks, utilitários ou módulos, utilize o padrão **kebab-case**.

Exemplos:

```txt
gpu-card.tsx
provider-bids-table.tsx
use-provider-stats.ts
format-currency.ts
```

Evite nomes em PascalCase ou camelCase para arquivos.

---

## Estrutura das mensagens de commit

As mensagens de commit devem seguir uma estrutura semântica simples:

```txt
tipo: descrição curta da alteração
```

Use os seguintes tipos:

### `feat`

Use para novas funcionalidades, páginas ou componentes.

```txt
feat: adiciona seção de provedores de GPU
```

### `fix`

Use para correções de bugs, falhas visuais ou problemas de lógica.

```txt
fix: corrige quebra do bento grid no mobile
```

### `docs`

Use para mudanças em documentação, guias, tutoriais ou README.

```txt
docs: atualiza instruções de deploy
```

### `style`

Use para ajustes visuais ou de formatação que não alteram a lógica.

```txt
style: ajusta espaçamento do hero
```

### `chore`

Use para tarefas de manutenção, organização ou atualização de dependências.

```txt
chore: atualiza dependências do projeto
```

### `test`

Use para criação ou alteração de testes.

```txt
test: adiciona validação do formulário de waitlist
```

### `perf`

Use para melhorias de performance.

```txt
perf: otimiza carregamento das imagens do hero
```

### `refactor`

Use para melhorias internas no código sem alterar comportamento ou adicionar funcionalidades.

```txt
refactor: extrai lógica de formatação de valores
```

---

## Boas práticas para commits

- Mantenha a mensagem curta e objetiva.
- Use verbos no modo imperativo, como `adiciona`, `corrige`, `atualiza`, `remove` ou `melhora`.
- Quando a alteração for complexa, adicione contexto no corpo do commit.
- Evite mensagens genéricas como `ajustes`, `correções` ou `update`.

---

# Como contribuir com o conteúdo do site

O conteúdo do website é organizado em arquivos **Markdown/MDX**. Abaixo estão os padrões para adicionar artigos, projetos do ecossistema e páginas de documentação.

---

## Como escrever um artigo ou post de blog

Para adicionar um novo artigo:

### 1. Crie uma nova pasta em:

```txt
src/content/Blog/
```

Use o slug do artigo como nome da pasta.

Exemplo:

```txt
src/content/Blog/como-rodar-modelos-open-source/
```

### 2. Crie um arquivo `index.md`

Dentro da pasta criada, adicione:

```txt
index.md
```

### 3. Use o frontmatter abaixo

```md
---
title: "Como rodar modelos open source na Burd"
description: "Um guia prático para fazer deploy de modelos sem lidar diretamente com Docker."
pubDate: "2026-06-10"
draft: false
categories:
  - Tutoriais
tags:
  - LLM
  - Deploy
author: "Nome do Contribuidor"
bannerImage: ./banner-image.jpg
---
```

### 4. Adicione a imagem de capa

Coloque a imagem de capa na mesma pasta do artigo.

Exemplo:

```txt
src/content/Blog/como-rodar-modelos-open-source/banner-image.jpg
```

### 5. Escreva o conteúdo

Abaixo do frontmatter, escreva o conteúdo do artigo em Markdown.

### 6. Faça o commit e envie as alterações

```bash
git add .
git commit -m "docs: adiciona artigo sobre modelos open source"
git push
```

Após o push, o site fará o build e publicará o conteúdo automaticamente conforme o fluxo de deploy configurado.

---

# Como adicionar um projeto ao Ecossistema

A seção de Ecossistema lista ferramentas, aplicações e workloads que já rodam ou podem rodar na infraestrutura da Burd.

---

## 1. Crie uma nova pasta em:

```txt
src/content/Ecosystem/
```

Use o nome do projeto como slug.

Exemplo:

```txt
src/content/Ecosystem/chat-llm-template/
```

---

## 2. Crie o arquivo `index.md`

Dentro da pasta do projeto, crie:

```txt
index.md
```

---

## 3. Use o template abaixo

```md
---
projectTitle: "Chat LLM Template"
projectImage: "./project-banner.png"
pubDate: "2026-06-01"
tags:
  - AI & ML
category: deployed_on_burd
description: "Interface de chat rodando Llama 3 em GPUs distribuídas da Burd, com latência otimizada para a América Latina."
websiteLink: "https://chat.sua-url.com/"
githubLink: "https://github.com/burd-network/chat-template"
featured: true
---
```

---

## Campos principais

### `projectTitle`

Nome do projeto exibido no website.

### `projectImage`

Imagem de destaque do projeto. A imagem deve estar na mesma pasta do `index.md`.

### `pubDate`

Data de publicação no formato:

```txt
YYYY-MM-DD
```

### `tags`

Lista de tags relacionadas ao projeto.

Exemplos:

```txt
AI & ML
Deploy
Infraestrutura
LLM
GPU
```

### `category`

Categoria do projeto.

Valores aceitos:

```txt
deployed_on_burd
tools
```

### `description`

Descrição curta do projeto.

### `websiteLink`

Link para acessar o projeto em produção.

### `githubLink`

Link para o repositório do projeto.

### `featured`

Define se o projeto aparece em destaque.

```txt
true
false
```

---

# Documentação

A documentação da Burd também é organizada em Markdown/MDX.

---

## Como alterar a sequência da documentação

Para alterar a ordem dos itens da documentação, edite o arquivo de sequência, geralmente localizado em:

```txt
src/content/Docs/sequence.ts
```

A ordem dos itens no array define a ordem exibida na barra lateral da documentação.

Exemplo:

```ts
export const docsSequence = [
  {
    label: "Documentação",
    subItems: [
      {
        label: "Começando",
        subItems: [
          { label: "O que é a Burd?" },
          { label: "Primeiro Deploy" },
          { label: "Guia para Provedores de GPU" },
          { label: "Trust Score e Bids" },
        ],
      },
    ],
  },
];
```

Para reorganizar a sidebar, altere a ordem dos objetos dentro de `subItems`.

---

## Como adicionar uma nova página nos Docs

### 1. Crie uma nova pasta em:

```txt
src/content/Docs/
```

Use o assunto da documentação como nome da pasta.

Exemplo:

```txt
src/content/Docs/provedores/
```

---

### 2. Crie o arquivo `index.md`

Dentro da pasta criada, adicione:

```txt
index.md
```

---

### 3. Use o template abaixo

```md
---
title: "Requisitos de hardware para provedores"
linkTitle: "Requisitos de hardware"
weight: 1
categories:
  - Provedores
tags:
  - Infraestrutura
  - GPU
---

Escreva aqui o conteúdo da documentação.
```

---

## Campos principais dos Docs

### `title`

Título completo da página.

### `linkTitle`

Título curto exibido na navegação lateral.

### `weight`

Define a ordem de exibição da página.

### `categories`

Categoria principal da documentação.

### `tags`

Tags relacionadas ao conteúdo.

---

# Checklist antes de abrir um Pull Request

Antes de enviar sua contribuição, confira:

- O projeto roda localmente com `npm run dev`.
- O código segue a estrutura e o padrão visual existente.
- Os arquivos novos usam `kebab-case`.
- As mensagens de commit seguem o padrão semântico.
- O conteúdo em Markdown possui frontmatter válido.
- Imagens estão na pasta correta.
- Não há arquivos desnecessários ou temporários no commit.
- O layout foi testado em desktop e mobile.

---

# Contato

- Discord: Burd IA
- X/Twitter: @Burd.ia
- Website oficial: burd.ia
- GitHub: github.com/repo-burd

---

Obrigado por contribuir com a Burd.
