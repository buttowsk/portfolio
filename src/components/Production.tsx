import { useLang } from "../i18n";
import { production } from "../data/content";

export function Production() {
  const { t } = useLang();
  return (
    <section aria-labelledby="prod-title">
      <h2 id="prod-title">{t({ en: "Production experience", pt: "Experiência em produção" })}</h2>
      <p>{t(production.intro)}</p>
      <div className="prod">
        {production.items.map((item) => (
          <div key={item.title.en}>
            <h3>{t(item.title)}</h3>
            <p>{t(item.text)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
