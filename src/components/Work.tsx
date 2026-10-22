import { useLang } from "../i18n";
import { projects, ui, work } from "../data/content";
import { ProjectArt } from "./ProjectArt";
import { Arrow } from "./Nav";

export function Work() {
  const { t } = useLang();
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <p className="watermark" aria-hidden="true">
        {t(work.watermark)}
      </p>
      <div className="section-head">
        <h2 id="work-title" className="section-title">
          {t(work.title)}
        </h2>
        <p className="section-intro">{t(work.intro)}</p>
      </div>

      <ol className="projects">
        {projects.map((p, i) => (
          <li key={p.id}>
            <article className="project" aria-labelledby={`${p.id}-title`}>
              <ProjectArt art={p.art} />
              <div className="project-meta">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{t(p.kind)}</span>
                <span>{p.year}</span>
              </div>
              <h3 id={`${p.id}-title`}>{t(p.name)}</h3>
              <p className="body">{t(p.summary)}</p>
              <h4 className="label">{t(ui.built)}</h4>
              <ul className="built">
                {p.built.map((b) => (
                  <li key={b.en}>{t(b)}</li>
                ))}
              </ul>
              <ul className="tags" aria-label={t(ui.stackUsed)}>
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {p.repo ? (
                <a className="link" href={p.repo}>
                  {t(ui.viewRepo)}
                  <Arrow />
                </a>
              ) : (
                p.note && <p className="note">{t(p.note)}</p>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
