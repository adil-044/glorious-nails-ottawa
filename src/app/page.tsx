'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { HeroScroll } from "@/components/HeroScroll";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reveal, ParallaxImage } from "@/components/Reveal";
import { BOOK, asset } from "@/lib/site";
import site from "@/content/site.json";

export default function HomePage() {
  return (
    <>
      <HeroScroll slides={site.heroSlides} rating={site.rating} reviewsCount={site.reviewsCount} />

      <section id="menu" className="section-pad">
        <Reveal>
          <p className="kicker">Services</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Nails · Skin · Lashes</h2>
          <p className="mt-4 max-w-[44ch] text-[var(--muted)] leading-relaxed">{site.description}</p>
        </Reveal>

        <div className="mt-12 space-y-5">
          {site.serviceGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.06}>
              <Link
                href="/services"
                className="group grid overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] transition hover:border-[var(--plum)]/40 md:grid-cols-[1.05fr_1fr]"
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[220px]">
                  <Image
                    src={asset(g.image)}
                    alt={g.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="560px"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <p className="text-sm font-semibold text-[var(--blush)]">{g.from}</p>
                  <h3 className="mt-1 font-display text-3xl">{g.name}</h3>
                  <p className="mt-3 text-sm text-[var(--muted)]">{g.items.length} options on Fresha</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--plum)]">
                    See menu <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book on Fresha <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="kicker">Studio</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Quiet luxury at Lansdowne</h2>
            <p className="mt-4 max-w-[42ch] text-[var(--muted)] leading-relaxed">
              Upscale amenities, eco-friendly products, and technicians ready for trendy or classic — your happy place in The Glebe.
            </p>
            <Link href="/gallery" className="btn-ghost mt-8 inline-flex">
              Open gallery
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <ParallaxImage className="relative aspect-[4/5] rounded-2xl border border-[var(--line)]">
              <Image src={asset("/media/fresha-4.jpg")} alt="Inside Glorious" fill className="object-cover" sizes="560px" />
            </ParallaxImage>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <Reveal>
          <p className="kicker">Detail</p>
          <h2 className="mt-3 font-display text-4xl">Before · After energy</h2>
        </Reveal>
        <div className="mt-8">
          <BeforeAfter before="/media/wa-1.jpeg" after="/media/spa-2.jpeg" label="Drag to compare" />
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--plum-soft)]">
        <div className="section-pad">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="kicker">Fresha</p>
                <h2 className="mt-3 font-display text-4xl">What clients say</h2>
              </div>
              <p className="inline-flex items-center gap-2 text-[var(--plum)]">
                <Star className="h-5 w-5 fill-current" />
                {site.rating} · {site.reviewsCount} reviews
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {site.featuredReviews.map((r, i) => (
              <Reveal key={`${r.author}-${i}`} delay={(i % 3) * 0.05}>
                <blockquote className="soft-panel h-full p-6">
                  <p className="text-[var(--blush)]" aria-hidden>
                    {"★".repeat(r.rating)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]">&ldquo;{r.text}&rdquo;</p>
                  <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--faint)]">
                    {r.author}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10 inline-flex">
            Book your visit <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
