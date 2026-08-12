"use client";
import { useEffect, useState } from "react";
type Theme = "light" | "dark";
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const saved = localStorage.getItem("ogt-theme") as Theme | null;
    const initial = saved ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("ogt-theme", next);
    setTheme(next);
  };
  return <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === "light" ? "night" : "day"} mode`}><span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span><b>{theme === "light" ? "Night" : "Day"}</b></button>;
}
