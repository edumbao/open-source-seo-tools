import Link from "next/link";
import { ProjectDirectory } from "@/components/project-directory";
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
        <a className="header-cta" href="#directory">Browse tools <span aria-hidden="true">↘</span></a>
      </header>

      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="issue-line"><span className="status-dot" /> A practical guide for curious teams <span className="issue-number">ISSUE 001 · WORK IN PROGRESS</span></p>
            <h1>Open tools.<br /><em>Clearer choices.</em></h1>
            <p className="hero-description">
              A growing field guide to open-source tools for SEO, publishing, analytics, and content work—written for people who want to understand what a tool does before they try it.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#directory">Explore the directory <span aria-hidden="true">↓</span></a>
              <a className="text-link hero-secondary" href="#method">How entries are selected <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-footnote">
              <span><strong>{projects.length}</strong> starter project notes</span>
              <span className="footnote-divider" />
              <span>Built for writers, marketers, and small teams</span>
            </div>
          </div>

          <aside className="hero-note" aria-label="Editor's note">
            <div className="note-topline"><span>EDITOR’S NOTE</span><span>NO. 001</span></div>
            <p className="note-quote">“Open source” is a starting point, not a guarantee that a tool will fit your workflow.</p>
            <div className="note-rule" />
            <p className="note-copy">Each listing is meant to help you ask better questions: Who is it for? What does it need? What should you review before using it?</p>
            <span className="note-stamp">LEARN<br />BY DOING</span>
          </aside>
        </section>

        <div className="ticker" aria-label="Guide topics">
          <div className="ticker-inner">
            <span>SEO &amp; SEARCH</span><b>✳</b><span>CONTENT TOOLS</span><b>✳</b><span>ANALYTICS</span><b>✳</b><span>DOCUMENTATION</span><b>✳</b><span>SMALL TEAM WORKFLOWS</span>
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
            <a className="text-link" href="#directory">Back to the directory <span aria-hidden="true">↑</span></a>
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
