import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, Mail, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ADDRESS, BOOK, EMAIL, IG, MAPS, PHONE, TEL, asset } from "@/lib/site";
import site from "@/content/site.json";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-[var(--plum-soft)]">
        <div className="section-pad !py-20 sm:!py-24">
          <p className="kicker">Contact</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">Visit &amp; book</h1>
          <p className="mt-4 max-w-[44ch] text-[var(--muted)]">
            Primary CTA is Fresha — same booking clients already trust.
          </p>
        </div>
      </section>

      <section className="section-pad grid gap-10 lg:grid-cols-2">
        <Reveal>
          <a
            href={BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-[var(--plum)] px-6 py-5 text-white transition hover:bg-[var(--plum-deep)]"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Primary CTA</p>
              <p className="mt-1 font-display text-2xl">Book on Fresha</p>
            </div>
            <ArrowUpRight className="h-6 w-6" />
          </a>

          <div className="mt-6 soft-panel space-y-5 p-6">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--plum)]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--faint)]">Address</p>
                <p>{ADDRESS}</p>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-[var(--plum)]">
                  Open maps
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--plum)]" />
              <a href={TEL} className="hover:text-[var(--plum)]">
                {PHONE}
              </a>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--plum)]" />
              <a href={EMAIL} className="hover:text-[var(--plum)]">
                contact@gloriousnailsandspa.ca
              </a>
            </div>
            <div>
              <p className="kicker mb-2">Hours</p>
              <ul className="space-y-1 text-sm text-[var(--muted)]">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--plum)]">
              <Star className="h-4 w-4 fill-current" />
              {site.rating} · {site.reviewsCount} Fresha reviews · {site.ratingLabel}
            </div>
            <a href={IG} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-[var(--blush)]">
              @glorious.nailsspa
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[var(--line)]">
            <Image src={asset("/media/fresha-8.jpg")} alt="Glorious polish wall" fill className="object-cover" sizes="560px" />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="section-pad">
          <Reveal>
            <p className="kicker">Reviews</p>
            <h2 className="mt-3 font-display text-3xl">Recent Fresha words</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {site.featuredReviews.slice(0, 4).map((r, i) => (
              <Reveal key={`${r.author}-${i}`}>
                <blockquote className="soft-panel p-5">
                  <p className="text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                  <footer className="mt-3 text-xs font-semibold uppercase tracking-wider text-[var(--faint)]">
                    {r.author} · {r.rating}★
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
