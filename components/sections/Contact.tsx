"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export type ContactProps = {
  email?: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  ctaText?: string;
};

const FALLBACK_CTA =
  "Open to MBA finance internship and full-time leadership opportunities — corporate finance, FP&A, investment management, and strategic analytics. Let's talk.";

export function Contact({
  email,
  phone,
  location,
  github,
  linkedin,
  ctaText
}: ContactProps) {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-gold opacity-70 pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-10 md:p-16 text-center max-w-4xl mx-auto"
        >
          <p className="eyebrow">Let's connect</p>
          <h2 className="section-heading mt-4">
            Ready to build the next chapter — <br className="hidden md:block" />
            <span className="gold-text">together</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-ivory/85 leading-relaxed max-w-2xl mx-auto">
            {ctaText ?? FALLBACK_CTA}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {email && (
              <a href={`mailto:${email}`}>
                <Button size="lg">
                  <Mail size={16} /> {email}
                </Button>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Linkedin size={16} /> LinkedIn
                </Button>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost">
                  <Github size={16} /> GitHub
                </Button>
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {phone && (
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-gold" /> {phone}
              </span>
            )}
            {location && (
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" /> {location}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
