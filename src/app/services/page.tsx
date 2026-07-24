import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BOOK, asset } from "@/lib/site";
import site from "@/content/site.json";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--plum-ink)] text-white">
        <div className="absolute inset-0 opacity-35">
          <Image src={asset("/media/fresha-6.jpg")} alt="" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--plum-ink)] via-[var(--plum-ink)]/85 to-[var(--plum-ink)]/40" />
        <div className="relative section-pad !py-24 sm:!py-28">
          <p className="kicker !text-[var(--blush)]">Services</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">Menu</h1>
          <p className="mt-4 max-w-[46ch] text-white/70 leading-relaxed">
            Artificial nails, care, skin, and lashes — book any service on Fresha.
          </p>
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            Book on Fresha <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <div className="section-pad space-y-16">
        {site.serviceGroups.map((g) => (
          <Reveal key={g.name}>
            <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-start">
              <div>
                <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--line)]">
                  <Image src={asset(g.image)} alt={g.name} fill className="object-cover" sizes="240px" />
                </div>
                <h2 className="font-display text-3xl">{g.name}</h2>
                <p className="mt-1 text-sm font-semibold text-[var(--blush)]">{g.from}</p>
              </div>
              <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {g.items.map((item) => (
                  <li key={item.name} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                    <span>{item.name}</span>
                    <span className="text-sm text-[var(--muted)]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6 inline-flex">
              Book {g.name.toLowerCase()} <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        ))}
      </div>
    </>
  );
}
