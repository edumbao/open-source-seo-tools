import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/tools/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} | Field Guide`,
    description: project.summary,
  };
}

type ProjectParams = PageProps<"/tools/[slug]">["params"];

export default function ProjectPage(props: PageProps<"/tools/[slug]">) {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Field Guide home">
          <span className="brand-mark" aria-hidden="true">F.</span>
          <span className="brand-name">Field Guide<span> / Open source for search &amp; content</span></span>
        </Link>
        <nav className="header-nav" aria-label="Main navigation"><Link href="/#directory">Directory</Link><Link href="/#method">How we choose</Link></nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="header-cta" href="/#directory">All tools</Link>
        </div>
      </header>

      <Suspense fallback={<ProjectLoading />}>
        <ProjectContent params={props.params} />
      </Suspense>

      <footer className="site-footer">
        <div className="wrap footer-inner"><Link className="footer-brand" href="/">FIELD GUIDE</Link><span className="footer-muted">A learning project · 2026</span></div>
      </footer>
    </>
  );
}

function ProjectLoading() {
  return <main className="detail-main wrap" aria-live="polite">Loading field note…</main>;
}

async function ProjectContent({ params }: { params: ProjectParams }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="detail-main wrap">
      <Link className="back-link" href="/#directory">Back to all tools</Link>
      <article className="detail-article">
        <div className="detail-kicker"><span className="category-pill">{project.category}</span><span>FIELD NOTE · {String(projects.findIndex((item) => item.slug === slug) + 1).padStart(2, "0")}</span></div>
        <h1>{project.name}</h1>
        <p className="detail-summary">{project.summary}</p>

        <div className="detail-actions">
          <a className="button button-dark" href={project.website} target="_blank" rel="noreferrer">Visit project site</a>
          <a className="button button-light" href={project.repository} target="_blank" rel="noreferrer">View source on GitHub</a>
        </div>

        <div className="detail-rule" />

        <section className="detail-section">
          <p className="eyebrow">At a glance</p>
          <dl className="detail-facts">
            <div><dt>Topic</dt><dd>{project.category}</dd></div>
            <div><dt>May suit</dt><dd>{project.audience}</dd></div>
            <div><dt>Repository languages</dt><dd>{project.languages.join(", ")}</dd></div>
            <div><dt>Repository license</dt><dd><a href={project.licenseUrl} target="_blank" rel="noreferrer">{project.license}</a></dd></div>
            <div><dt>License checked</dt><dd>{project.licenseCheckedOn}</dd></div>
          </dl>
        </section>

        <section className="detail-section detail-highlight">
          <p className="eyebrow">Why it may be useful</p>
          <p>{project.whyItMayHelp}</p>
        </section>

        <section className="detail-section detail-caution">
          <p className="eyebrow">Before you try it</p>
          <p>{project.reviewNote}</p>
        </section>

        <p className="detail-disclaimer">This is an introductory note, not a recommendation. Check the project’s current documentation, license, activity, and requirements before adopting it.</p>
      </article>
    </main>
  );
}
