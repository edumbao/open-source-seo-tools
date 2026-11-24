# Field Guide: Open-source Tools for Search and Content

A beginner-friendly directory of open-source tools that may help with SEO, publishing, analytics, and content work. The project is also a record of learning how to build and publish a small web application with GitHub and Vercel.

The project name and scope are working choices. The first project records are starter examples for the interface. Review each project's description, current status, license, and requirements before treating the listings as editorially verified.

## Current version

- Next.js App Router with TypeScript and React
- Search by project name, summary, category, audience, and language
- Category filter and name sorting
- Browser-local saved projects; no accounts or database
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
    globals.css            Shared styles
  components/
    project-directory.tsx  Search, filters, sorting, and saved items
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

- Review and improve the starter project records using their official repositories and documentation.
- Create a GitHub repository and connect it to Vercel.
- Add an RSS feed and a clear project suggestion process.
- Consider scheduled metadata refreshes after the manual publishing workflow is reliable.

## Deployment

The app is designed for Vercel. Import the GitHub repository as a new Vercel project and use the detected Next.js settings. Vercel can create preview deployments for branch changes and a production deployment for the configured production branch.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
