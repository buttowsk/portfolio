import { useState } from "react";
import { useLang } from "../i18n";
import { ui } from "../data/content";

export function CopyEmail({ email }: { email: string }) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" className="copy" onClick={copy} aria-label={t(ui.copyEmail)}>
      <span aria-live="polite">{copied ? t(ui.copied) : t(ui.copy)}</span>
    </button>
  );
}
