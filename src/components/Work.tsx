import { useLang } from "../i18n";
import { projects } from "../data/content";
import { Tags } from "./Tags";

export function Work() {
  const { t } = useLang();
  return (
    <section aria-labelledby="work-title">
      <h2 id="work-title">{t({ en: "Selected work", pt: "Projetos selecionados" })}</h2>
      <div className="work">
        {projects.map((p) => (
          <article className="card" key={p.name}>
            <div>
              <h3>{p.name}</h3>
              <p className="meta">{t(p.meta)}</p>
            </div>
            <p>{t(p.summary)}</p>
            <ul>
              {p.points.map((point) => (
                <li key={point.en}>{t(point)}</li>
              ))}
            </ul>
            <div className="foot">
              <Tags items={p.tags} />
              <p className="note">{t(p.note)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
