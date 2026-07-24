'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BOOK, BRAND, NAV, PHONE, TEL, IG, asset } from "@/lib/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-white/15 bg-[var(--plum-ink)]/70 px-3 py-1.5 text-white backdrop-blur-xl"
        >
          <Image src={asset("/media/logo.png")} alt="" width={28} height={28} className="rounded-full bg-white object-cover" />
          <span className="font-display text-lg leading-none">Glorious</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-[var(--plum-ink)]/55 px-1.5 py-1.5 backdrop-blur-xl md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition",
                  active ? "bg-white text-[var(--plum-ink)]" : "text-white/75 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-4 text-xs sm:text-sm">
            Book <ArrowUpRight className="hidden h-4 w-4 sm:inline" />
          </a>
          <button
            type="button"
            className="rounded-full border border-white/15 bg-[var(--plum-ink)]/70 p-2 text-white backdrop-blur-xl md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-4 rounded-2xl border border-white/10 bg-[var(--plum-ink)]/95 p-3 text-white backdrop-blur-xl md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block rounded-xl bg-[var(--blush)] px-3 py-3 text-center text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Book on Fresha
          </a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--plum-ink)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">{BRAND}</p>
          <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-white/65">
            Nails, skin care, and lashes at Lansdowne. Safe products. Quiet luxury.
          </p>
        </div>
        <div>
          <p className="kicker !text-[var(--blush)] mb-3">Visit</p>
          <p className="text-sm text-white/70">
            100 Marché Way, Unit 103
            <br />
            Lansdowne — TD Place, Ottawa
          </p>
          <a href={TEL} className="mt-3 inline-block text-sm text-[var(--blush)] hover:underline">
            {PHONE}
          </a>
        </div>
        <div>
          <p className="kicker !text-[var(--blush)] mb-3">Book</p>
          <a
            href={BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--blush)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--blush-deep)]"
          >
            Open Fresha <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={IG} target="_blank" rel="noopener noreferrer" className="mt-4 block text-sm text-white/60 hover:text-white">
            @glorious.nailsspa
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-3 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {BRAND} · Pitch redesign · Booking via Fresha
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
