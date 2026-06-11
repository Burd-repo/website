<div align="left">

<a href="https://burd.ia">
  <img src="./public/burd%20logo.svg" alt="Logo da Burd" title="Burd Website" height="48" />
</a>

<br />

<p>
  Website oficial da Burd para apresentar a plataforma, publicar conteúdos, organizar documentação e comunicar a proposta da Burd para infraestrutura descentralizada de compute.
</p>

[![status](https://img.shields.io/badge/status-active-2C5E8A)](https://github.com/Burd-repo/website)
[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![website](https://img.shields.io/badge/website-burd.ia-lightgrey)](https://burd.ia)
[![content](https://img.shields.io/badge/content-mdx-blue)](https://github.com/Burd-repo/website)

</div>

---

## Sumário

* [Visão geral](#visão-geral)
* [Início rápido](#início-rápido)
* [Rodando o projeto](#rodando-o-projeto)
* [Regras de desenvolvimento](#regras-de-desenvolvimento)
* [Conteúdo do website](#conteúdo-do-website)
* [Artigos e posts](#artigos-e-posts)
* [Ecossistema](#ecossistema)
* [Documentação](#documentação)
* [Diretrizes para Pull Request](#diretrizes-para-pull-request)
* [Checklist de Pull Request](#checklist-de-pull-request)
* [Convenção de commits](#convenção-de-commits)
* [Não commitar](#não-commitar)
* [Notas para mantenedores](#notas-para-mantenedores)
* [Licença](#licença)

---

## Visão geral

Este repositório contém o website oficial da Burd.

O site é responsável por:

* apresentar a proposta da Burd;
* organizar páginas institucionais;
* publicar artigos e conteúdos;
* manter documentação pública;
* listar projetos e ferramentas do ecossistema;
* comunicar a experiência visual da marca;
* servir como ponto principal de entrada para usuários, builders e providers.

O website deve manter uma identidade visual consistente, clara e objetiva.

---

## Início rápido

```bash
git clone https://github.com/Burd-repo/website.git
cd website
npm install
npm run dev
```

Acesse:

```txt
http://localhost:3000
```

Antes de abrir um Pull Request, rode:

```bash
npm run build
```

Se o projeto tiver script de lint ou typecheck configurado, rode também:

```bash
npm run lint
npm run typecheck
```

---

## Rodando o projeto

### Desenvolvimento

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview local

```bash
npm run preview
```

Use o comando disponível no `package.json` caso o projeto tenha uma variação específica para preview.

---

## Regras de desenvolvimento

### Nomenclatura de arquivos

Use `kebab-case` para arquivos.

Exemplos:

```txt
gpu-card.tsx
provider-bids-table.tsx
use-provider-stats.ts
format-currency.ts
hero-section.tsx
pricing-card.tsx
```

Evite nomes de arquivo em PascalCase ou camelCase.

---

### Consistência visual

Toda mudança visual deve respeitar a identidade da Burd.

Regras:

* manter a direção visual existente;
* evitar componentes com aparência genérica;
* preservar espaçamentos, bordas, tipografia e hierarquia visual;
* não adicionar cores fora do padrão sem justificativa;
* não substituir a identidade visual por estilos prontos de template;
* testar alterações em desktop e mobile;
* evitar excesso de animações ou poluição visual;
* manter a experiência objetiva e técnica.

---

### Componentes

Ao criar ou alterar componentes:

* mantenha o componente pequeno e legível;
* evite duplicação de lógica;
* use nomes claros;
* preserve acessibilidade básica;
* mantenha responsividade;
* não crie componentes novos se um existente puder ser reutilizado;
* não misture conteúdo, layout e regra de negócio sem necessidade.

---

## Conteúdo do website

O conteúdo do website pode ser organizado em arquivos Markdown ou MDX.

Ao adicionar conteúdo:

* use frontmatter válido;
* mantenha títulos claros;
* use imagens otimizadas;
* coloque imagens na pasta correta;
* evite textos genéricos;
* mantenha o tom da Burd;
* não publique conteúdo sem revisar links, datas e metadados.

---

## Artigos e posts

Para adicionar um novo artigo, crie uma pasta em:

```txt
src/content/Blog/
```

Use o slug do artigo como nome da pasta.

Exemplo:

```txt
src/content/Blog/como-rodar-modelos-open-source/
```

Dentro da pasta, crie:

```txt
index.md
```

Template recomendado:

```md
---
title: "Como rodar modelos open source na Burd"
description: "Um guia prático para fazer deploy de modelos sem lidar diretamente com infraestrutura complexa."
pubDate: "2026-06-10"
draft: false
categories:
  - Tutoriais
tags:
  - LLM
  - Deploy
  - GPU
author: "Nome do Contribuidor"
bannerImage: ./banner-image.jpg
---

Escreva aqui o conteúdo do artigo.
```

A imagem de capa deve ficar na mesma pasta do artigo.

Exemplo:

```txt
src/content/Blog/como-rodar-modelos-open-source/banner-image.jpg
```

---

## Ecossistema

Para adicionar um projeto ao ecossistema, crie uma pasta em:

```txt
src/content/Ecosystem/
```

Use o nome do projeto como slug.

Exemplo:

```txt
src/content/Ecosystem/chat-llm-template/
```

Dentro da pasta, crie:

```txt
index.md
```

Template recomendado:

```md
---
projectTitle: "Chat LLM Template"
projectImage: "./project-banner.png"
pubDate: "2026-06-01"
tags:
  - AI & ML
  - LLM
  - GPU
category: deployed_on_burd
description: "Interface de chat para modelos open source usando compute distribuído."
websiteLink: "https://exemplo.com/"
githubLink: "https://github.com/Burd-repo/exemplo"
featured: true
---

Escreva aqui uma descrição mais completa do projeto.
```

Categorias aceitas:

```txt
deployed_on_burd
tools
```

O campo `featured` deve ser:

```txt
true
false
```

---

## Documentação

Para adicionar uma nova página de documentação, crie uma pasta em:

```txt
src/content/Docs/
```

Use o assunto como nome da pasta.

Exemplo:

```txt
src/content/Docs/provedores/
```

Dentro da pasta, crie:

```txt
index.md
```

Template recomendado:

```md
---
title: "Requisitos de hardware para providers"
linkTitle: "Requisitos de hardware"
weight: 1
categories:
  - Providers
tags:
  - Infraestrutura
  - GPU
  - Compute
---

Escreva aqui o conteúdo da documentação.
```

---

### Sequência da documentação

Se existir um arquivo de sequência para a navegação da documentação, altere apenas a ordem necessária.

Exemplo:

```txt
src/content/Docs/sequence.ts
```

A ordem dos itens define a ordem exibida na navegação.

Evite reorganizar toda a documentação sem necessidade.

---

## Diretrizes para Pull Request

Antes de abrir um Pull Request, confirme:

* a alteração tem um objetivo claro;
* a mudança respeita a identidade visual da Burd;
* a página funciona em desktop e mobile;
* arquivos novos usam `kebab-case`;
* conteúdo em Markdown/MDX possui frontmatter válido;
* imagens estão na pasta correta;
* links foram revisados;
* não há arquivos temporários no commit;
* não há alterações sem relação com o objetivo do PR;
* o build local foi testado.

Rode:

```bash
npm run build
```

Se disponível, rode também:

```bash
npm run lint
npm run typecheck
```

---

## Checklist de Pull Request

* [ ] A alteração tem propósito claro.
* [ ] O build passa.
* [ ] O layout foi testado em desktop.
* [ ] O layout foi testado em mobile.
* [ ] Os arquivos novos usam `kebab-case`.
* [ ] O conteúdo possui frontmatter válido.
* [ ] As imagens estão na pasta correta.
* [ ] Os links foram revisados.
* [ ] Não há arquivos temporários no commit.
* [ ] A mensagem de commit segue a convenção do projeto.
* [ ] A mudança respeita a identidade visual da Burd.

---

## Convenção de commits

Use mensagens semânticas curtas:

```txt
tipo: descrição curta
```

Tipos aceitos:

```txt
feat
fix
docs
style
chore
test
perf
refactor
```

Exemplos:

```txt
feat: adiciona seção de providers
fix: corrige espaçamento do hero no mobile
docs: adiciona guia para providers
style: ajusta grid da seção de preços
chore: atualiza dependências
refactor: extrai componente de card
perf: otimiza imagens da landing
```

Evite mensagens genéricas como:

```txt
update
ajustes
correções
final
```

---

## Não commitar

Não commite:

```txt
node_modules/
dist/
build/
.next/
out/
.cache/
tmp/
logs/
.env
.env.*
*.log
.DS_Store
```

Também não commite:

```txt
arquivos temporários
imagens sem uso
prints de teste
conteúdo duplicado
credenciais
tokens
chaves privadas
```

---

## Notas para mantenedores

Ao revisar mudanças, preste atenção especial em:

* consistência visual;
* responsividade;
* copywriting;
* estrutura dos componentes;
* validade do frontmatter;
* peso e formato das imagens;
* links quebrados;
* mudanças fora do escopo do PR;
* arquivos gerados ou temporários.

Um Pull Request que introduza visual inconsistente, conteúdo genérico, arquivos desnecessários ou quebra de responsividade não deve ser mesclado.

---

## Licença

Este projeto é licenciado sob a licença **MIT**.

Consulte o arquivo [`LICENSE`](./LICENSE) para mais detalhes.
