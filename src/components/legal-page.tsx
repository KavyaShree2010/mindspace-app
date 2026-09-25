import Link from "next/link";
import { LEGAL_CONTACT_EMAIL, LEGAL_OPERATOR, LEGAL_VERSION } from "@/lib/legal";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-svh bg-page px-5 py-10 text-ink sm:px-8 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-brand-ink hover:underline">
          Back to MindSpace
        </Link>
        <header className="mt-10 border-b border-line pb-8">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand-ink">MindSpace legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-strong">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-secondary">{intro}</p>
          <p className="mt-4 text-sm text-ink-muted">Version {LEGAL_VERSION} · {LEGAL_OPERATOR}</p>
        </header>
        <div className="legal-copy mt-8 flex flex-col gap-8 text-[0.975rem] leading-7 text-ink-secondary">
          {children}
        </div>
        <footer className="mt-12 border-t border-line pt-6 text-sm text-ink-muted">
          <p>Privacy contact: <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-semibold text-brand-ink hover:underline">{LEGAL_CONTACT_EMAIL}</a></p>
          <nav aria-label="Legal" className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-ink hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:text-ink hover:underline">Terms</Link>
            <Link href="/cookies" className="hover:text-ink hover:underline">Cookies</Link>
            <Link href="/refunds" className="hover:text-ink hover:underline">Refunds</Link>
          </nav>
        </footer>
      </article>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-ink-strong">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
