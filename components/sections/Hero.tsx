"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  ExternalLink,
  Mail
} from "lucide-react";

export type HeroProps = {
  name: string;
  tagline: string;
  headshotUrl?: string;
  resumeUrl?: string;
  appUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export function Hero({
  name,
  tagline,
  headshotUrl,
  resumeUrl,
  appUrl,
  githubUrl,
  linkedinUrl
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] pt-28 md:pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-gold pointer-events-none" />

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <p className="eyebrow">Welcome — Portfolio</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="block text-ivory">{name.split(" ")[0]}</span>
            <span className="block gold-text">
              {name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-ivory/80 leading-relaxed max-w-2xl">
            {tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {resumeUrl && (
              <a href={resumeUrl} download>
                <Button size="lg">
                  <Download size={16} /> Download Resume
                </Button>
              </a>
            )}
            {appUrl && (
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <ExternalLink size={16} /> Launch Analytics App
                </Button>
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost">
                  <Github size={16} /> GitHub
                </Button>
              </a>
            )}
            <Link href="#contact">
              <Button size="lg" variant="ghost">
                <Mail size={16} /> Contact
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            )}
            <Link
              href="#about"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <ArrowDown size={14} /> Scroll
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold/20 blur-2xl" />
            <div className="relative aspect-[3/4] w-[280px] sm:w-[320px] md:w-[360px] overflow-hidden rounded-2xl border border-gold/30 shadow-gold-glow">
              {headshotUrl ? (
                <Image
                  src={headshotUrl}
                  alt={name}
                  fill
                  priority
                  sizes="(min-width:1024px) 360px, 320px"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-navy-800 text-muted-foreground text-sm">
                  Upload headshot in Sanity
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-full border border-gold/40 bg-navy-900/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur">
              MBA · BU '27
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
