export type ProjectCategory =
  | "Publishing"
  | "Analytics"
  | "Site quality"
  | "Documentation";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  category: ProjectCategory;
  audience: string;
  languages: string[];
  repository: string;
  license: string;
  licenseUrl: string;
  licenseCheckedOn: string;
  website: string;
  whyItMayHelp: string;
  reviewNote: string;
};

// License details were checked against each project's official repository on
// 2026-11-24. Recheck them before making legal or adoption decisions.
export const projects: Project[] = [
  {
    slug: "hugo",
    name: "Hugo",
    summary: "A fast static site generator for publishing websites and blogs.",
    category: "Publishing",
    audience: "Writers and site owners",
    languages: ["Go"],
    repository: "https://github.com/gohugoio/hugo",
    license: "Apache-2.0",
    licenseUrl: "https://github.com/gohugoio/hugo/blob/master/LICENSE",
    licenseCheckedOn: "2026-11-24",
    website: "https://gohugo.io/",
    whyItMayHelp: "Useful to explore if you want to publish a content site from files in a Git repository.",
    reviewNote: "Check the setup requirements and theme options before choosing it for a project.",
  },
  {
    slug: "docusaurus",
    name: "Docusaurus",
    summary: "A framework for building documentation websites with React.",
    category: "Documentation",
    audience: "Product and documentation teams",
    languages: ["TypeScript", "React"],
    repository: "https://github.com/meta/docusaurus",
    license: "MIT (software); CC BY 4.0 (documentation)",
    licenseUrl: "https://github.com/meta/docusaurus#license",
    licenseCheckedOn: "2026-11-24",
    website: "https://docusaurus.io/",
    whyItMayHelp: "A practical option to study when organizing guides, tutorials, and product documentation.",
    reviewNote: "It expects some familiarity with JavaScript and React for deeper customization.",
  },
  {
    slug: "pagefind",
    name: "Pagefind",
    summary: "Search for static websites, designed to work without a search server.",
    category: "Site quality",
    audience: "Static site owners",
    languages: ["Rust", "JavaScript"],
    repository: "https://github.com/Pagefind/pagefind",
    license: "MIT",
    licenseUrl: "https://github.com/Pagefind/pagefind/blob/main/LICENSE",
    licenseCheckedOn: "2026-11-24",
    website: "https://pagefind.app/",
    whyItMayHelp: "It can add an on-site search experience to a published content library.",
    reviewNote: "Confirm that its build process fits your site generator and deployment workflow.",
  },
  {
    slug: "umami",
    name: "Umami",
    summary: "A self-hosted web analytics application with a simple reporting interface.",
    category: "Analytics",
    audience: "Site owners and marketers",
    languages: ["TypeScript", "JavaScript"],
    repository: "https://github.com/umami-software/umami",
    license: "MIT",
    licenseUrl: "https://github.com/umami-software/umami/blob/master/LICENSE",
    licenseCheckedOn: "2026-11-24",
    website: "https://umami.is/",
    whyItMayHelp: "A project to compare when researching alternatives for understanding website activity.",
    reviewNote: "Self-hosting requires a database and deployment setup; check current requirements first.",
  },
  {
    slug: "lighthouse",
    name: "Lighthouse",
    summary: "An open-source tool for auditing web page quality and performance.",
    category: "Site quality",
    audience: "Writers, marketers, and site teams",
    languages: ["JavaScript"],
    repository: "https://github.com/GoogleChrome/lighthouse",
    license: "Apache-2.0",
    licenseUrl: "https://github.com/GoogleChrome/lighthouse/blob/main/LICENSE",
    licenseCheckedOn: "2026-11-24",
    website: "https://developer.chrome.com/docs/lighthouse/",
    whyItMayHelp: "Its reports can help teams spot performance, accessibility, and search-related issues.",
    reviewNote: "A score is a diagnostic signal; review the findings and page context before deciding what to change.",
  },
  {
    slug: "mkdocs",
    name: "MkDocs",
    summary: "A static site generator aimed at project documentation.",
    category: "Documentation",
    audience: "Technical writers and software teams",
    languages: ["Python"],
    repository: "https://github.com/mkdocs/mkdocs",
    license: "BSD-2-Clause",
    licenseUrl: "https://github.com/mkdocs/mkdocs/blob/master/LICENSE",
    licenseCheckedOn: "2026-11-24",
    website: "https://www.mkdocs.org/",
    whyItMayHelp: "A beginner-friendly project to examine if you want documentation written in Markdown.",
    reviewNote: "Check theme, plugin, and hosting needs for your intended documentation site.",
  },
  {
    slug: "matomo",
    name: "Matomo",
    summary: "A web analytics platform with a self-hosted open-source edition.",
    category: "Analytics",
    audience: "Organizations that want more control over analytics hosting",
    languages: ["PHP", "JavaScript"],
    repository: "https://github.com/matomo-org/matomo",
    license: "GPL-3.0-or-later",
    licenseUrl: "https://github.com/matomo-org/matomo/blob/6.x-dev/LICENSE",
    licenseCheckedOn: "2026-11-24",
    website: "https://matomo.org/",
    whyItMayHelp: "Worth comparing when evaluating analytics tools and data ownership options.",
    reviewNote: "The self-hosted edition needs infrastructure and ongoing maintenance.",
  },
  {
    slug: "scrapy",
    name: "Scrapy",
    summary: "A Python framework for crawling websites and extracting structured data.",
    category: "Site quality",
    audience: "Researchers and developers",
    languages: ["Python"],
    repository: "https://github.com/scrapy/scrapy",
    license: "BSD-3-Clause",
    licenseUrl: "https://github.com/scrapy/scrapy/blob/master/LICENSE",
    licenseCheckedOn: "2026-11-24",
    website: "https://www.scrapy.org/",
    whyItMayHelp: "A useful reference project for learning how developers build repeatable data collection workflows.",
    reviewNote: "Review the target site's terms, robots guidance, and applicable rules before crawling.",
  },
];

export const categories: ProjectCategory[] = [
  "Publishing",
  "Analytics",
  "Site quality",
  "Documentation",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
