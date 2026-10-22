import { useRef, useState } from "react";
import { useLang } from "../i18n";

export function CopyEmail({ email }: { email: string }) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const text = useRef<HTMLSpanElement>(null);

  const selectText = () => {
    if (!text.current) return;
    const range = document.createRange();
    range.selectNodeContents(text.current);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      selectText();
    }
  };

  return (
    <button type="button" className="copy" onClick={copy} aria-label={t({ en: "Copy email address", pt: "Copiar endereço de email" })}>
      <span ref={text}>{copied ? t({ en: "copied", pt: "copiado" }) : email}</span>
    </button>
  );
}
