import { useLang } from "../i18n";
import { journey } from "../data/content";

export function Journey() {
  const { t } = useLang();
  return (
    <section id="journey" className="section journey" aria-labelledby="journey-title">
      <div className="section-head">
        <h2 id="journey-title" className="section-title">
          {t(journey.title)}
        </h2>
      </div>
      <ol className="journey-list">
        {journey.entries.map((e) => (
          <li key={e.start + e.org} className={e.now ? "entry now" : "entry"}>
            <p className="entry-when">
              <time dateTime={e.start}>{t(e.when)}</time>
              {e.now && <span className="badge">{t(journey.now)}</span>}
            </p>
            <div className="entry-body">
              <h3>{t(e.role)}</h3>
              <p className="entry-org">
                {e.org}
                {e.place && <span> · {t(e.place)}</span>}
              </p>
              {e.points && (
                <ul>
                  {e.points.map((p) => (
                    <li key={p.en}>{t(p)}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
