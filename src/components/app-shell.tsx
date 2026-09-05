import Link from "next/link";
import { LogoutButton } from "@/features/auth/LogoutButton";
import { WordmarkMark, Wordmark } from "@/components/wordmark";
import { BottomNav, SideNav, type NavItem } from "@/components/app-nav";
import { BackButton } from "@/components/ui/back-button";
import type { SessionPayload } from "@/lib/session";

export function AppShell({
  session,
  roleLabel,
  items,
  home,
  variant = "default",
  children,
}: {
  session: SessionPayload;
  roleLabel: string;
  items: NavItem[];
  home: string;
  variant?: "default" | "student";
  children: React.ReactNode;
}) {
  const initial = session.name.slice(0, 1).toUpperCase();
  const isStudent = variant === "student";

  return (
    <div className={isStudent ? "student-workspace flex min-h-screen" : "flex min-h-screen"}>
      {/* Desktop sidebar — dark plum with glass morphism */}
      <aside
        className={
          isStudent
            ? "sticky top-0 hidden h-screen w-[260px] shrink-0 flex-col border-r border-[#e5e9f6] bg-white px-5 py-7 lg:flex"
            : "sticky top-0 hidden h-screen w-[260px] shrink-0 flex-col border-r border-white/[0.06] bg-[#1a1430]/80 px-4 py-5 backdrop-blur-xl lg:flex"
        }
      >
        <div className="px-2">
          <Wordmark href={home} />
        </div>
        <div className="mt-8 flex-1">
          <SideNav items={items} />
        </div>
        <div className={isStudent ? "flex items-center gap-3 border-t border-[#edf0f8] pt-6" : "flex items-center gap-3 border-t border-white/[0.06] pt-4"}>
          <span className={isStudent ? "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#18213b] text-sm font-bold text-white" : "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#4ecdc4] text-sm font-bold text-white shadow-lg shadow-[#6c5ce720]"}>
            {initial}
          </span>
          <span className="min-w-0 flex-1">
            <span className={isStudent ? "block truncate text-sm font-semibold text-[#17213d]" : "block truncate text-sm font-semibold text-white/90"}>
              {session.name}
            </span>
            <span className={isStudent ? "block truncate text-xs text-[#8790aa]" : "block truncate text-xs text-white/40"}>{roleLabel}</span>
          </span>
          <LogoutButton iconOnly />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar — glass morphism */}
        <header className={isStudent ? "sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-[#e5e9f6] bg-white px-4 py-3 lg:hidden" : "sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-white/[0.06] bg-[#1a1430]/70 px-4 py-2.5 backdrop-blur-xl lg:hidden"}>
          <Link href={home} aria-label="MindSpace home">
            <WordmarkMark size="sm" />
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="text-right">
                <span className={isStudent ? "block text-sm font-semibold leading-tight text-[#17213d]" : "block text-sm font-semibold leading-tight text-white/90"}>
                {session.name}
              </span>
              <span className={isStudent ? "block text-xs leading-tight text-[#8790aa]" : "block text-xs leading-tight text-white/40"}>
                {roleLabel}
              </span>
            </span>
            <LogoutButton iconOnly />
          </div>
        </header>

        <main className={isStudent ? "mx-auto w-full max-w-[1440px] flex-1 px-5 pb-24 pt-6 sm:px-8 lg:px-10 lg:pb-10 lg:pt-8" : "mx-auto w-full max-w-[1180px] flex-1 px-4 pb-24 pt-5 sm:px-6 lg:pb-8 lg:pt-7"}>
          <BackButton home={home} />
          {children}
        </main>
      </div>

      <BottomNav items={items} />
    </div>
  );
}
