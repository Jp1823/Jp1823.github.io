# jp1823.github.io

Site pessoal (portfólio + CV), feito com [Astro](https://docs.astro.build) e publicado no GitHub Pages.

## Como funciona

O Astro transforma as páginas e o conteúdo (Markdown/JSON) em HTML estático na pasta `dist/`. Não há servidor nem base de dados: é isso que o GitHub Pages serve. Cada `git push` para `main` faz o build e publica automaticamente (`.github/workflows/deploy.yml`, 1 a 2 min).

## Node.js local

O Node está numa pasta portátil, `.node/`, dentro do projeto (não vai para o Git, nem altera o sistema). O ficheiro `npm.cmd` na raiz usa esse Node, por isso no PowerShell ou no CMD, dentro desta pasta:

```
.\npm install        # só da primeira vez (ou após clonar)
.\npm run dev        # site em http://localhost:4321, atualiza ao gravar
.\npm run build      # gera dist/ (o mesmo que o GitHub faz)
```

Se clonares o repositório noutro PC, instala o Node.js LTS normalmente e usa `npm` em vez de `.\npm`.

## Editar conteúdo (sem mexer em código)

| Quero… | Ficheiro |
|---|---|
| Mudar nome, apresentação, links, CV | `src/content/cv/pt.json` e `src/content/cv/en.json` |
| Adicionar um projeto | criar `src/content/projects/pt/<nome>.md` **e** `src/content/projects/en/<nome>.md` (mesmo `<nome>`) |
| Mudar textos fixos (menu, botões) | `src/i18n/ui.ts` |
| Mudar cores / fontes | topo de `src/styles/global.css` |

### Cabeçalho de um projeto

```md
---
title: Nome do projeto
summary: Uma frase sobre o que é.
year: 2025
context: UMinho · UC          # opcional
stack: [Python, Docker]
repo: https://github.com/Jp1823/repo   # opcional; sem repo aparece "código privado"
demo: https://...                      # opcional
featured: true                # aparece no início (máx. 3)
order: 1                      # opcional, ordem na lista
---

Texto em Markdown…
```

### PDF do CV

Coloca `cv-pt.pdf` e `cv-en.pdf` em `public/cv/` e adiciona `"pdf": "/cv/cv-pt.pdf"` (ou `cv-en.pdf`) ao respetivo JSON. Aparece um botão de download na página do CV.

## Publicar pela primeira vez

1. Criar no GitHub o repositório **`Jp1823.github.io`** (público, vazio).
2. Fazer push deste projeto para `main`.
3. No repositório: *Settings → Pages → Build and deployment → Source: **GitHub Actions***.
4. O site fica em https://jp1823.github.io.

## Estrutura

```
src/
├─ content/          conteúdo editável (projetos .md, cv .json)
├─ content.config.ts formato esperado do conteúdo
├─ i18n/ui.ts        textos PT/EN e rotas
├─ views/            páginas (início, projetos, projeto, cv)
├─ pages/            rotas /pt/… e /en/… (só chamam as views)
├─ components/       menu, rodapé, lista de projetos
├─ layouts/Base.astro  <head>, SEO, estrutura comum
└─ styles/global.css   cores, tipografia
```
