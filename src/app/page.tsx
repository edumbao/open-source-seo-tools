import Link from "next/link";
import { ProjectDirectory } from "@/components/project-directory";
import { ThemeToggle } from "@/components/theme-toggle";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Field Guide home">
          <span className="brand-mark" aria-hidden="true">F.</span>
          <span className="brand-name">Field Guide<span> / Open source for search &amp; content</span></span>
        </Link>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#directory">Directory</a>
          <a href="#method">How we choose</a>
          <a href="#about">About</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-cta" href="#directory">Browse tools</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-kicker">A practical guide for curious teams</p>
            <h1>Discover open-source tools</h1>
            <p className="hero-description">Find projects for SEO, publishing, analytics, and content work. Each field note explains what a tool does and what to check before you try it.</p>
            <a className="hero-button" href="#directory">Browse the directory</a>
            <p className="hero-footnote">{projects.length} starter project notes · Built for writers, marketers, and small teams</p>
          </div>
        </section>

        <div className="ticker" aria-label="Guide topics">
          <div className="ticker-inner">
            <span>SEO &amp; SEARCH</span><b>•</b><span>CONTENT TOOLS</span><b>•</b><span>ANALYTICS</span><b>•</b><span>DOCUMENTATION</span><b>•</b><span>SMALL TEAM WORKFLOWS</span>
          </div>
        </div>

        <div className="wrap content-wrap">
          <ProjectDirectory projects={projects} />

          <section className="method-section" id="method">
            <div className="method-heading">
              <p className="eyebrow">A note on curation</p>
              <h2>Useful context<br />before another list.</h2>
            </div>
            <div className="method-copy">
              <p>This directory is being built as a learning project by a content writer. The goal is to explain tools in plain language, connect them to real content and SEO work, and be honest about setup requirements.</p>
              <div className="method-points">
                <div><span>01</span><p>Start with the project’s own documentation and repository.</p></div>
                <div><span>02</span><p>Explain who may find it useful and what it asks them to learn.</p></div>
                <div><span>03</span><p>Keep descriptions current, attributed, and open to correction.</p></div>
              </div>
            </div>
          </section>

          <section className="about-strip" id="about">
            <div className="about-mark" aria-hidden="true">F.</div>
            <div>
              <p className="eyebrow">An independent learning project</p>
              <h2>Made by learning in public.</h2>
              <p>This guide will grow as I research projects, test workflows, and document what I learn about GitHub, code, APIs, and publishing.</p>
            </div>
            <a className="text-link" href="#directory">Back to the directory</a>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>FIELD GUIDE <span className="footer-muted">· OPEN-SOURCE TOOLS FOR SEARCH &amp; CONTENT</span></span>
          <span className="footer-muted">A learning project · 2026</span>
        </div>
      </footer>
    </>
  );
}
