"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Copies the contact address without relying on a mail client.
 * Falls back silently if the Clipboard API is unavailable (non-HTTPS, etc.).
 */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard blocked — the mailto link next to this button still works. */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-border-custom bg-bg-1 px-3 py-2 text-sm text-text-secondary transition hover:border-brand-blue/40 hover:text-brand-ink"
    >
      {copied ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
