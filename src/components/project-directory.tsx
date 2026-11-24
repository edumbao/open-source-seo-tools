"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/data/projects";

const SAVED_KEY = "fieldguide-saved-projects";

export function ProjectDirectory({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All topics");
  const [sort, setSort] = useState("featured");
  const [saved, setSaved] = useState<string[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(SAVED_KEY);
      if (stored) setSaved(JSON.parse(stored) as string[]);
    } catch {
      setSaved([]);
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
      const searchable = [
        project.name,
        project.summary,
        project.category,
        project.audience,
        ...project.languages,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!needle || searchable.includes(needle)) &&
        (category === "All topics" || project.category === category) &&
        (!savedOnly || saved.includes(project.slug))
      );
    });

    if (sort === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [category, projects, query, saved, savedOnly, sort]);

  return (
    <section className="directory-section" id="directory" aria-labelledby="directory-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The directory</p>
          <h2 id="directory-heading">Tools worth understanding</h2>
          <p className="section-intro">
            Search a small starter collection. Each entry explains who a tool may help and what to check before using it.
          </p>
        </div>
        <p className="result-count" aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <div className="filter-panel">
        <label className="search-box">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            placeholder="Search by name, topic, audience…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <span className="search-hint">TYPE TO SEARCH</span>
        </label>

        <label className="select-label">
          <span className="sr-only">Filter by topic</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>All topics</option>
            <option>Publishing</option>
            <option>Analytics</option>
            <option>Site quality</option>
            <option>Documentation</option>
          </select>
        </label>

        <label className="select-label sort-label">
          <span className="sr-only">Sort projects</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="name">Name A–Z</option>
          </select>
        </label>

        <button
          className={`saved-filter ${savedOnly ? "is-active" : ""}`}
          type="button"
          onClick={() => setSavedOnly((current) => !current)}
          aria-pressed={savedOnly}
        >
          <span aria-hidden="true">♡</span> Saved <span className="saved-count">{saved.length}</span>
        </button>
      </div>

      {visibleProjects.length ? (
        <div className="project-grid">
          {visibleProjects.map((project, index) => {
            const isSaved = saved.includes(project.slug);
            return (
              <article className="project-card" key={project.slug}>
                <div className="card-topline">
                  <span className="category-pill">{project.category}</span>
                  <button
                    type="button"
                    className={`bookmark-button ${isSaved ? "is-saved" : ""}`}
                    onClick={() => toggleSaved(project.slug)}
                    aria-label={`${isSaved ? "Remove" : "Save"} ${project.name}`}
                    aria-pressed={isSaved}
                  >
                    {isSaved ? "♥" : "♡"}
                  </button>
                </div>
                <p className="card-index">FIELD NOTE {String(index + 1).padStart(2, "0")}</p>
                <h3><Link href={`/tools/${project.slug}`}>{project.name}</Link></h3>
                <p className="card-summary">{project.summary}</p>
                <div className="card-meta">
                  <span>{project.audience}</span>
                  <span className="meta-dot" aria-hidden="true">·</span>
                  <span>{project.languages.join(" / ")}</span>
                </div>
                <div className="card-bottom">
                  <Link className="text-link" href={`/tools/${project.slug}`}>
                    Read the field note <span aria-hidden="true">↗</span>
                  </Link>
                  <a
                    className="repo-link"
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} on GitHub`}
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">⌕</span>
          <h3>No matching projects yet</h3>
          <p>Try another search or choose a different topic.</p>
          <button
            className="text-link"
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All topics");
              setSavedOnly(false);
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
