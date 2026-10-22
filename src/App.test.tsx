import { render, screen, fireEvent, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { App } from "./App";
import { LangProvider } from "./i18n";
import type { Bi } from "./i18n";
import * as content from "./data/content";
import { journey, nav, profile, projects, stack } from "./data/content";

function renderApp() {
  return render(
    <LangProvider>
      <App />
    </LangProvider>,
  );
}

function collectBi(value: unknown, out: Bi[] = []): Bi[] {
  if (Array.isArray(value)) {
    for (const v of value) collectBi(v, out);
  } else if (value && typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 2 && keys.includes("en") && keys.includes("pt")) {
      out.push(value as Bi);
    } else {
      for (const v of Object.values(value)) collectBi(v, out);
    }
  }
  return out;
}

describe("portfolio", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the hero greeting, every section and every project in English by default", () => {
    renderApp();
    expect(screen.getByRole("heading", { level: 1, name: /Hello.*Vinícius/ })).toBeInTheDocument();
    for (const name of ["About me", "Selected work", "Stack", "Journey", "Let's build something"]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
    }
    for (const p of projects) {
      expect(screen.getByRole("heading", { level: 3, name: p.name.en })).toBeInTheDocument();
    }
    for (const g of stack.groups) {
      expect(screen.getByText(g.label.en)).toBeInTheDocument();
    }
    expect(screen.getAllByText("WestPoint Software Solutions", { exact: false }).length).toBeGreaterThan(0);
    expect(journey.entries).toHaveLength(4);
  });

  it("switches to Portuguese, updates the lang attribute and remembers the choice", () => {
    renderApp();
    expect(document.documentElement.lang).toBe("en");
    fireEvent.click(screen.getByRole("button", { name: "PT" }));
    expect(screen.getByRole("heading", { level: 1, name: /Olá/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Trajetória" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "PT" })).toHaveAttribute("aria-pressed", "true");
    expect(localStorage.getItem("portfolio-lang")).toBe("pt");
    expect(document.documentElement.lang).toBe("pt-BR");
  });

  it("links every nav item to an existing section and the call to action to contact", () => {
    renderApp();
    const sections = screen.getByRole("navigation", { name: "Sections" });
    const links = within(sections).getAllByRole("link");
    expect(links.map((l) => l.textContent)).toEqual(nav.map((n) => n.label.en));
    for (const item of nav) {
      expect(document.getElementById(item.id)).not.toBeNull();
    }
    expect(screen.getByRole("link", { name: /Get in touch/ })).toHaveAttribute("href", "#contact");
    expect(document.getElementById("contact")).not.toBeNull();
  });

  it("offers email, profiles and both resumes under the site base path", () => {
    renderApp();
    expect(screen.getByRole("link", { name: profile.email })).toHaveAttribute("href", `mailto:${profile.email}`);
    expect(screen.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute("href", profile.linkedin.href);
    expect(screen.getByRole("link", { name: /^GitHub/ })).toHaveAttribute("href", profile.github.href);
    for (const r of profile.resumes) {
      const link = screen.getByRole("link", { name: new RegExp(r.label.en) });
      expect(link).toHaveAttribute("href", `${import.meta.env.BASE_URL}${r.file}`);
      expect(link).toHaveAttribute("download");
    }
  });

  it("only links public repositories", () => {
    renderApp();
    const repoLinks = screen.getAllByRole("link", { name: /View repository/ });
    expect(repoLinks).toHaveLength(projects.filter((p) => p.repo).length);
    for (const link of repoLinks) {
      expect(link.getAttribute("href")).toMatch(/^https:\/\/github\.com\/buttowsk\//);
    }
  });

  it("has English and Portuguese text for every piece of copy", () => {
    const all = collectBi(Object.values(content));
    expect(all.length).toBeGreaterThan(50);
    for (const b of all) {
      expect(b.en.trim().length).toBeGreaterThan(0);
      expect(b.pt.trim().length).toBeGreaterThan(0);
    }
  });
});
