import { Fragment } from "react";
import { useLang } from "../i18n";
import { timeline } from "../data/content";

export function Timeline() {
  const { t } = useLang();
  return (
    <section aria-labelledby="timeline-title">
      <h2 id="timeline-title">{t({ en: "Timeline", pt: "Linha do tempo" })}</h2>
      <p>
        {t({
          en: "From the first HTML pages to production systems. Older projects are student work, kept to show the path.",
          pt: "Das primeiras páginas HTML até sistemas em produção. Os projetos mais antigos são trabalhos de estudante, mantidos para mostrar o caminho.",
        })}
      </p>
      <ol className="timeline">
        {timeline.map((entry, i) => (
          <Fragment key={entry.when.en + entry.title.en}>
            {(i === 0 || timeline[i - 1].year !== entry.year) && (
              <li className="year">
                <span>{entry.year}</span>
              </li>
            )}
            <li className={entry.now ? "item now" : "item"}>
              <div className="when">{t(entry.when)}</div>
              <div className="what">
                <h3>{t(entry.title)}</h3>
                <p>{t(entry.text)}</p>
                {entry.links && (
                  <p className="links-inline">
                    {entry.links.map((l) => (
                      <a key={l.href} href={l.href}>
                        {l.label}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </li>
          </Fragment>
        ))}
      </ol>
    </section>
  );
}
