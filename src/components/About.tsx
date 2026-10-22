import { useLang } from "../i18n";
import { about, profile } from "../data/content";
import { aboutScene } from "../data/scenes";
import { StoneScene } from "./StoneScene";
import { Mark } from "./Mark";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <Mark className="watermark-mark" />
      <div className="about-text">
        <h2 id="about-title" className="section-title">
          {t(about.title)}
        </h2>
        <p className="lede">{t(about.lede)}</p>
        {about.paragraphs.map((p) => (
          <p key={p.en} className="body">
            {t(p)}
          </p>
        ))}
        <p className="about-where">
          <span>{t(about.location)}</span> {t(profile.location)}
        </p>
      </div>

      <figure className="about-photo">
        <StoneScene layout={aboutScene} align="xMinYMid" />
        <figcaption className="float-card">
          <span className="float-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l2.5 2.5M9.5 2.5h5" />
            </svg>
          </span>
          <strong className="float-value">{about.stat.value}</strong>
          <span className="float-label">{t(about.stat.label)}</span>
        </figcaption>
      </figure>
    </section>
  );
}
