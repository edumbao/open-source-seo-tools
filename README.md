# Field Guide: Open-source Tools for Search and Content

A beginner-friendly directory of open-source tools that may help with SEO, publishing, analytics, and content work. The project is also a record of learning how to build and publish a small web application with GitHub and Vercel.

The project name and scope are working choices. The first project records are starter examples for the interface. Review each project's description, current status, license, and requirements before treating the listings as editorially verified.

## Current features

- Next.js App Router with TypeScript and React
- Search by project name, summary, category, audience, and language
- Category filter and name sorting
- Browser-local saved projects; no accounts or database
- Dark mode by default, with a light/dark toggle that remembers the visitor's choice
- A detail page for each project
- Responsive layout for desktop and mobile screens

## Run the site locally

You need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```text
src/
  app/
    page.tsx               Homepage
    tools/[slug]/page.tsx  Individual project notes
    globals.css            Shared styles and theme colors
  components/
    project-directory.tsx  Search, filters, sorting, and saved items
    theme-toggle.tsx       Persistent light/dark mode control
  data/
    projects.ts            Directory records and categories
```

To add or edit a project, update `src/data/projects.ts`. Each record has a short description, category, audience, languages, repository and website links, a plain-language use case, and a review note.

## Learning notes

As the project develops, document each checkpoint with:

1. What I tried and why.
2. What worked and what confused me.
3. What I learned about the code, tools, or workflow.
4. How it connects to SEO, content writing, APIs, or documentation.
5. What I plan to try next.

## Next steps

- Review starter project records using each project's official repository and documentation.
- Refine the categories and curation criteria based on the intended audience.
- Add an RSS feed and a clear project suggestion process.
- Consider scheduled metadata updates after the manual publishing workflow is reliable.

## Deployment

The app is deployed with Vercel and connected to this GitHub repository. New commits to the production branch trigger a deployment, while other branches can be previewed before merging.
