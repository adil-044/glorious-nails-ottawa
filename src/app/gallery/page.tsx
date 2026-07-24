'use client';

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, ParallaxImage } from "@/components/Reveal";
import { BOOK, asset } from "@/lib/site";
import site from "@/content/site.json";

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-[var(--plum-soft)]">
        <div className="section-pad !py-20 sm:!py-24">
          <p className="kicker">Gallery</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">Work &amp; studio</h1>
          <p className="mt-4 max-w-[44ch] text-[var(--muted)]">
            Real sets and salon floors from Glorious — scroll for parallax depth.
          </p>
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            Book on Fresha <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="section-pad">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {site.gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.04} className="mb-4 break-inside-avoid">
              <ParallaxImage className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--line)]">
                <Image src={asset(src)} alt={`Glorious gallery ${i + 1}`} fill className="object-cover" sizes="360px" />
              </ParallaxImage>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
