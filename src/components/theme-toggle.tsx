"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const THEME_KEY = "fieldguide-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem(THEME_KEY);
      if (savedTheme === "light" || savedTheme === "dark") {
        document.documentElement.dataset.theme = savedTheme;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(savedTheme);
      }
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);

    try {
      window.localStorage.setItem(THEME_KEY, nextTheme);
    } catch {
      // Keep the current selection for this page view if storage is unavailable.
    }
  }

  const nextLabel = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextLabel} mode`}
      title={`Switch to ${nextLabel} mode`}
    >
      <span aria-hidden="true" className="theme-toggle-icon">{theme === "dark" ? "☼" : "☾"}</span>
      <span className="theme-toggle-label">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
