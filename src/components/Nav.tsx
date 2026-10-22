import { useLang } from "../i18n";
import { nav, ui } from "../data/content";
import { useActiveSection } from "../useActiveSection";
import { Mark } from "./Mark";

const ids = nav.map((n) => n.id);

export function Nav() {
  const { lang, setLang, t } = useLang();
  const active = useActiveSection(ids);

  return (
    <header className="nav">
      <a className="nav-mark" href="#top" aria-label={t(ui.home)}>
        <Mark />
      </a>
      <nav className="nav-links" aria-label={t(ui.sections)}>
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined}>
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="nav-end">
        <div className="lang" role="group" aria-label={t(ui.language)}>
          <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
            EN
          </button>
          <button type="button" aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>
            PT
          </button>
        </div>
        <a className="cta" href="#contact">
          {t(ui.getInTouch)}
          <Arrow />
        </a>
      </div>
    </header>
  );
}

export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      {down ? (
        <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" />
      ) : (
        <path d="M4 12 12 4M5.5 4H12v6.5" />
      )}
    </svg>
  );
}
