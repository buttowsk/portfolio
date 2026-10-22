import { useLang } from "../i18n";
import { contact, profile, ui } from "../data/content";
import { CopyEmail } from "./CopyEmail";
import { Arrow } from "./Nav";

const base = import.meta.env.BASE_URL;

export function Contact() {
  const { t } = useLang();
  return (
    <>
      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <h2 id="contact-title" className="contact-title">
          {t(contact.title)}
        </h2>
        <p className="lede">{t(contact.text)}</p>

        <div className="contact-grid">
          <div>
            <p className="label">{t(contact.emailLabel)}</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <CopyEmail email={profile.email} />
          </div>
          <div>
            <p className="label">{t(contact.elsewhere)}</p>
            <ul className="contact-links">
              {[profile.linkedin, profile.github].map((l) => (
                <li key={l.href}>
                  <a className="link" href={l.href}>
                    {l.label}
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">{t(contact.resume)}</p>
            <ul className="contact-links">
              {profile.resumes.map((r) => (
                <li key={r.file}>
                  <a className="link" href={`${base}${r.file}`} download>
                    {t(r.label)}
                    <span className="file">.docx</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="wordmark" aria-hidden="true">
          {profile.name}
        </p>
        <div className="footer-row">
          <span>
            © {profile.year} {profile.name}
          </span>
          <span>{t(ui.rights)}</span>
          <a href="#top">{t(ui.backToTop)}</a>
        </div>
      </footer>
    </>
  );
}
