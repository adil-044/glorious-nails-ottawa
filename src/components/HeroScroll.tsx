'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { BOOK, asset } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

type Slide = { src: string; alt: string };

export function HeroScroll({
  slides,
  rating,
  reviewsCount,
}: {
  slides: Slide[];
  rating: number;
  reviewsCount: number;
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const panels = el.querySelectorAll<HTMLElement>("[data-hero-panel]");
    const progress = el.querySelectorAll<HTMLElement>("[data-hero-dot]");
    const copy = el.querySelector<HTMLElement>("[data-hero-copy]");

    if (reduce) {
      panels.forEach((p, i) => {
        p.style.opacity = i === 0 ? "1" : "0";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(panels, { opacity: 0, scale: 1.08 });
      gsap.set(panels[0], { opacity: 1, scale: 1 });

      if (copy) {
        gsap.fromTo(
          copy.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.15 }
        );
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${window.innerHeight * Math.max(slides.length - 1, 1) * 0.95}`,
          pin: true,
          scrub: 0.75,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          onUpdate: (self) => {
            const idx = Math.min(
              slides.length - 1,
              Math.round(self.progress * (slides.length - 1))
            );
            progress.forEach((d, i) => d.classList.toggle("is-on", i === idx));
          },
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;
        tl.to(
          panels[i - 1],
          { opacity: 0, scale: 1.06, duration: 1, ease: "power2.inOut" },
          i - 1
        ).fromTo(
          panel,
          { opacity: 0, scale: 1.12 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" },
          i - 1
        );
      });
    }, el);

    return () => ctx.revert();
  }, [slides.length]);

  return (
    <section ref={root} className="relative h-[100svh] w-full overflow-hidden bg-[var(--plum-ink)]">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          data-hero-panel
          className="absolute inset-0 will-change-transform"
          style={{ zIndex: i + 1 }}
        >
          <Image
            src={asset(slide.src)}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-ink)] via-[var(--plum-ink)]/45 to-[var(--plum-ink)]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--plum-ink)]/80 via-transparent to-transparent" />
        </div>
      ))}

      <div
        data-hero-copy
        className="relative z-20 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20"
      >
        <p className="kicker !text-[var(--blush)]">Lansdowne · The Glebe · Ottawa</p>
        <h1 className="mt-3 font-display text-[clamp(3rem,12vw,5.75rem)] leading-[0.92] text-white">
          Glorious
        </h1>
        <p className="mt-1 font-display text-[clamp(1.35rem,4vw,2.1rem)] text-[var(--blush)]">
          Nails &amp; Spa
        </p>
        <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-white/75">
          Hygienic luxury for nails, skin, and lashes — book the same Fresha link your clients already use.
        </p>
        <p className="mt-3 text-sm text-white/60">
          {rating}★ · {reviewsCount} Fresha reviews · Highly recommended
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book on Fresha <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#menu" className="btn-ghost-light">
            View services
          </a>
        </div>

        <div className="mt-10 flex items-center gap-2" aria-hidden="true">
          {slides.map((_, i) => (
            <span key={i} data-hero-dot className={`hero-dot${i === 0 ? " is-on" : ""}`} />
          ))}
          <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-white/45">Scroll</span>
        </div>
      </div>
    </section>
  );
}
