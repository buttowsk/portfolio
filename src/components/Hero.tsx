import { useLang } from "../i18n";
import { profile } from "../data/content";
import { CopyEmail } from "./CopyEmail";

export function TopBar() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="bar">
      <span className="where">
        {profile.location} · {t(profile.remote)}
      </span>
      <div className="switch" role="group" aria-label="Language">
        <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
          EN
        </button>
        <button type="button" aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>
          PT
        </button>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLang();
  return (
    <header className="hero">
      <h1>{profile.name}</h1>
      <p className="role">{t(profile.role)}</p>
      <p className="intro">{t(profile.intro)}</p>
      <div className="links">
        <a href={profile.github.href}>{profile.github.label}</a>
        <a href={profile.linkedin.href}>{profile.linkedin.label}</a>
        <CopyEmail email={profile.email} />
      </div>
    </header>
  );
}
