import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { App } from "./App";
import { LangProvider } from "./i18n";
import { timeline, projects } from "./data/content";

function renderApp() {
  return render(
    <LangProvider>
      <App />
    </LangProvider>,
  );
}

describe("portfolio", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the name, every project and the timeline in English by default", () => {
    renderApp();
    expect(screen.getByRole("heading", { level: 1, name: "Vinícius Nunes" })).toBeInTheDocument();
    for (const p of projects) {
      expect(screen.getByRole("heading", { name: p.name })).toBeInTheDocument();
    }
    expect(screen.getByRole("heading", { name: "Timeline" })).toBeInTheDocument();
  });

  it("switches to Portuguese and remembers the choice", () => {
    renderApp();
    fireEvent.click(screen.getByRole("button", { name: "PT" }));
    expect(screen.getByRole("heading", { name: "Linha do tempo" })).toBeInTheDocument();
    expect(localStorage.getItem("portfolio-lang")).toBe("pt");
    expect(document.documentElement.lang).toBe("pt-BR");
  });

  it("shows one year heading per year, in order", () => {
    renderApp();
    const years = [...new Set(timeline.map((e) => e.year))];
    const shown = [...document.querySelectorAll(".timeline .year span")].map((el) => Number(el.textContent));
    expect(shown).toEqual(years);
    expect(years).toEqual([...years].sort((a, b) => a - b));
  });

  it("has an English and Portuguese text for every timeline entry", () => {
    for (const e of timeline) {
      for (const b of [e.when, e.title, e.text]) {
        expect(b.en.length).toBeGreaterThan(0);
        expect(b.pt.length).toBeGreaterThan(0);
      }
    }
  });
});
