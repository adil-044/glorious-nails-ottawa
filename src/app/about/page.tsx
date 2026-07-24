import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, ParallaxImage } from "@/components/Reveal";
import { BOOK, asset } from "@/lib/site";
import site from "@/content/site.json";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-[var(--plum-ink)] text-white">
        <div className="section-pad !py-24">
          <p className="kicker !text-[var(--blush)]">About</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">Your happy place</h1>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-white/70">{site.description}</p>
        </div>
      </section>

      <section className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <ParallaxImage className="relative aspect-[4/5] rounded-2xl border border-[var(--line)]">
            <Image src={asset("/media/fresha-0.jpg")} alt="Glorious salon" fill className="object-cover" sizes="560px" />
          </ParallaxImage>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="kicker">Craft</p>
          <h2 className="mt-3 font-display text-4xl">Trendy. Healthy you.</h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            Whether you want a celebration look or a quiet reset, technicians bring new ideas with NuGenesis, OPI, and careful hygiene standards.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[var(--ink)]">
            <li>· Artificial nails, care, skin, lashes under one roof</li>
            <li>· Eco-friendly, vitamin-fortified dipping systems</li>
            <li>· Lansdowne / TD Place — easy Glebe access</li>
          </ul>
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            Book on Fresha <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
