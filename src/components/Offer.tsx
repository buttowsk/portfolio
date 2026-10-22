import { useLang } from "../i18n";
import { offers, price } from "../data/content";

export function Offer() {
  const { t } = useLang();
  return (
    <section aria-labelledby="offer-title">
      <h2 id="offer-title">{t({ en: "What I build for clients", pt: "O que construo para clientes" })}</h2>
      <div className="offer">
        {offers.map((o) => (
          <div key={o.title.en}>
            <h3>{t(o.title)}</h3>
            <p>{t(o.text)}</p>
          </div>
        ))}
      </div>
      <p className="price">{t(price)}</p>
    </section>
  );
}
