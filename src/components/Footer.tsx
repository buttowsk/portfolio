import { useLang } from "../i18n";
import { profile } from "../data/content";
import { CopyEmail } from "./CopyEmail";

export function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <h2>{t({ en: "Have a task that eats your week?", pt: "Tem uma tarefa que consome sua semana?" })}</h2>
      <p>
        {t({
          en: "Send me two lines about it. I will tell you whether it can be automated, how long it would take and a fixed price.",
          pt: "Me mande duas linhas sobre ela. Digo se dá para automatizar, quanto tempo leva e um preço fechado.",
        })}
      </p>
      <div className="links">
        <a href={`mailto:${profile.email}`}>{t({ en: "Send an email", pt: "Enviar email" })}</a>
        <CopyEmail email={profile.email} />
        <a href={profile.linkedin.href}>LinkedIn</a>
        <a href={profile.github.href}>GitHub</a>
      </div>
    </footer>
  );
}
