import { useLang } from "../i18n";
import { stack } from "../data/content";
import { Tags } from "./Tags";

export function Stack() {
  const { t } = useLang();
  return (
    <section aria-labelledby="stack-title">
      <h2 id="stack-title">{t({ en: "Stack", pt: "Tecnologias" })}</h2>
      <div className="stack">
        {stack.map((group) => (
          <div key={group.label.en}>
            <span className="label">{t(group.label)}</span>
            <Tags items={group.items} />
          </div>
        ))}
      </div>
    </section>
  );
}
