"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/data/projects";

const SAVED_KEY = "fieldguide-saved-projects";

function repositoryOwner(repository: string) {
  return repository.replace("https://github.com/", "").split("/")[0];
}

export function ProjectDirectory({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All topics");
  const [sort, setSort] = useState("featured");
  const [saved, setSaved] = useState<string[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(SAVED_KEY);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSaved(JSON.parse(stored) as string[]);
      }
    } catch {
      // The initial state is already an empty saved list.
    }
  }, []);

  function toggleSaved(slug: string) {
    setSaved((current) => {
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug];
      window.localStorage.setItem(SAVED_KEY, JSON.stringify(next));
      return next;
    });
  }

  const visibleProjects = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = projects.filter((project) => {
      const searchable = [project.name, project.summary, project.category, project.audience, ...project.languages]
        .join(" ").toLowerCase();
      return (!needle || searchable.includes(needle)) &&
        (category === "All topics" || project.category === category) &&
        (!savedOnly || saved.includes(project.slug));
    });
    if (sort === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [category, projects, query, saved, savedOnly, sort]);

  return (
    <section className="directory-section" id="directory" aria-labelledby="directory-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The directory</p>
          <h2 id="directory-heading">Open-source tools for real workflows</h2>
          <p className="section-intro">Browse a focused collection of projects for SEO, publishing, analytics, and content work.</p>
        </div>
        <p className="result-count" aria-live="polite">{visibleProjects.length} {visibleProjects.length === 1 ? "tool" : "tools"}</p>
      </div>

      <div className="filter-panel">
        <label className="search-box">
          <span className="sr-only">Search projects</span>
          <input type="search" placeholder="Search tools, topics, audiences, or languages" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <label className="select-label">
          <span className="sr-only">Filter by topic</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>All topics</option><option>Publishing</option><option>Analytics</option><option>Site quality</option><option>Documentation</option>
          </select>
        </label>
        <label className="select-label sort-label">
          <span className="sr-only">Sort projects</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option><option value="name">Name A–Z</option>
          </select>
        </label>
        <button className={`saved-filter ${savedOnly ? "is-active" : ""}`} type="button" onClick={() => setSavedOnly((current) => !current)} aria-pressed={savedOnly}>
          <span aria-hidden="true">♡</span> Saved <span className="saved-count">{saved.length}</span>
        </button>
      </div>

      {visibleProjects.length ? (
        <div className="project-grid">
          {visibleProjects.map((project) => {
            const isSaved = saved.includes(project.slug);
            const owner = repositoryOwner(project.repository);
            return (
              <article className="project-card" key={project.slug}>
                <div className="card-topline">
                  <div className="project-identity">
                    <span className="project-logo" aria-hidden="true">
                      <span className="logo-fallback">{project.name.slice(0, 1)}</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://github.com/${owner}.png?size=96`} alt="" loading="lazy" onError={(event) => { event.currentTarget.hidden = true; }} />
                    </span>
                    <div><span className="category-pill">{project.category}</span><span className="project-license">{project.license}</span></div>
                  </div>
                  <button type="button" className={`bookmark-button ${isSaved ? "is-saved" : ""}`} onClick={() => toggleSaved(project.slug)} aria-label={`${isSaved ? "Remove" : "Save"} ${project.name}`} aria-pressed={isSaved}>{isSaved ? "♥" : "♡"}</button>
                </div>
                <h3><Link href={`/tools/${project.slug}`}>{project.name}</Link></h3>
                <p className="card-summary">{project.summary}</p>
                <div className="card-meta"><span>{project.audience}</span><span className="meta-dot" aria-hidden="true">·</span><span>{project.languages.join(" / ")}</span></div>
                <div className="card-bottom">
                  <Link className="field-note-link" href={`/tools/${project.slug}`}>View field note</Link>
                  <div className="card-links">
                    <a className="repo-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>GitHub</a>
                    <a className="site-link" href={project.website} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} website`}>Website</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-state"><h3>No matching projects yet</h3><p>Try another search or choose a different topic.</p><button className="clear-filters" type="button" onClick={() => { setQuery(""); setCategory("All topics"); setSavedOnly(false); }}>Clear filters</button></div>
      )}
      <p className="collection-note">A finite starter collection · {projects.length} project notes</p>
    </section>
  );
}
