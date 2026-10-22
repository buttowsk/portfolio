import { useLang } from "../i18n";
import { hero, profile } from "../data/content";
import { heroScene } from "../data/scenes";
import { StoneScene } from "./StoneScene";
import { Arrow } from "./Nav";

export function Hero() {
  const { t } = useLang();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-rail" aria-hidden="true">
        <span className="hero-role">{t(profile.role)}</span>
        <span className="hero-line" />
        <span className="hero-year">{profile.year}</span>
      </div>

      <div className="hero-copy">
        <dl className="stats">
          {hero.stats.map((s) => (
            <div key={s.value} className="stat">
              <dt>
                <sup>+</sup>
                {s.value}
              </dt>
              <dd>{t(s.label)}</dd>
            </div>
          ))}
        </dl>

        <h1 id="hero-title" className="hello">
          <span className="hello-word">{t(hero.greeting)}</span>
          <span className="hello-sub">{t(hero.intro)}</span>
        </h1>

        <a className="scroll" href="#about">
          {t(hero.scroll)}
          <Arrow down />
        </a>
      </div>

      <div className="hero-art">
        <StoneScene layout={heroScene} />
      </div>
    </section>
  );
}
