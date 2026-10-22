import { useLang } from "../i18n";
import { stack } from "../data/content";

export function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="section stack" aria-labelledby="stack-title">
      <div className="section-head">
        <h2 id="stack-title" className="section-title">
          {t(stack.title)}
        </h2>
        <p className="section-intro">{t(stack.intro)}</p>
      </div>
      <dl className="stack-list">
        {stack.groups.map((g) => (
          <div key={g.label.en} className="stack-row">
            <dt>{t(g.label)}</dt>
            <dd>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
