"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "mindspace-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(CONSENT_KEY) === null);
  }, []);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside aria-label="Cookie notice" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-(--radius-card) border border-line bg-surface p-4 shadow-(--shadow-pop) sm:inset-x-auto sm:right-6 sm:left-auto">
      <p className="text-sm leading-relaxed text-ink-secondary">
        MindSpace uses necessary cookies for sign-in and your theme. No analytics or advertising cookies are currently enabled. Read our <a href="/cookies" className="font-semibold text-brand-ink underline">Cookies Policy</a>.
      </p>
      <div className="mt-3 flex flex-wrap justify-end gap-2">
        <button type="button" onClick={() => choose("rejected")} className="rounded-(--radius-btn) border border-line-strong px-3 py-2 text-sm font-semibold text-ink hover:bg-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Reject optional cookies</button>
        <button type="button" onClick={() => choose("accepted")} className="rounded-(--radius-btn) bg-brand px-3 py-2 text-sm font-semibold text-white hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Accept optional cookies</button>
      </div>
    </aside>
  );
}
