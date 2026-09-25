import { redirect } from "next/navigation";
import { getActiveSession } from "@/lib/auth";
import { dashboardPath } from "@/lib/session";
import { LandingHero } from "@/features/landing/LandingHero";
import { LandingFeatures } from "@/features/landing/LandingFeatures";
import { LandingStats } from "@/features/landing/LandingStats";
import { LandingCTA } from "@/features/landing/LandingCTA";
import Link from "next/link";

export default async function Home() {
  const session = await getActiveSession();
  if (session) redirect(dashboardPath(session.role));

  return (
    <div className="landing-page flex min-h-screen flex-col overflow-hidden bg-page">
      <main className="flex flex-1 flex-col">
        <LandingHero />
        <LandingFeatures />
        <LandingStats />
        <LandingCTA />
      </main>

      <footer className="relative z-10 border-t border-on-dark-faint px-5 py-6 text-center sm:px-8">
        <p className="text-sm text-on-dark-subtle">
          MindSpace helps your institution coordinate student support. It is not an emergency service or a substitute for professional care.
        </p>
        <nav aria-label="Legal" className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-on-dark-muted">
          <Link href="/privacy" className="underline-offset-4 hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="underline-offset-4 hover:underline">Terms and Conditions</Link>
          <Link href="/cookies" className="underline-offset-4 hover:underline">Cookies Policy</Link>
          <Link href="/refunds" className="underline-offset-4 hover:underline">Refund Policy</Link>
        </nav>
      </footer>
    </div>
  );
}
