"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

const FALLBACK_BIO = [
  "I am a finance professional with a passion for harnessing data to drive business growth and operational excellence. With a proven record at KK Medicals and Evaron Pharmaceutical, I've led cross-functional teams, developed innovative strategies, and quality processes to deliver impactful business outcomes.",
  "As a results-oriented leader, I excel in crafting financial strategies, optimizing processes, and engaging stakeholders to drive business success. My key achievements include increasing contract value by 25% through strategic negotiations, cutting operational costs by 20% by realigning budget priorities and streamlining the supply chain network, improving financial reporting accuracy with streamlined inventory management, and enhancing customer retention by 20% through effective dispute resolution.",
  "What sets me apart is my ability to blend advanced financial modeling with strategic insight, seamlessly integrating data-focused solutions with business objectives. I leverage this expertise to improve processes, align cross-functional teams, and achieve sustainable organizational success."
];

const HIGHLIGHTS = [
  { label: "Increase in contract value", value: "+25%" },
  { label: "Reduction in operating expenses", value: "-20%" },
  { label: "Improvement in customer retention", value: "+20%" },
  { label: "Reporting accuracy uplift", value: "95%" }
];

export function About({ blocks }: { blocks?: PortableTextBlock[] }) {
  return (
    <SectionShell
      id="about"
      eyebrow="About Me"
      title={
        <>
          Finance leader at the intersection of{" "}
          <span className="gold-text">strategy</span> and{" "}
          <span className="gold-text">data</span>.
        </>
      }
    >
      <div className="grid lg:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-5 text-base md:text-lg leading-relaxed text-ivory/85"
        >
          {blocks?.length ? (
            <PortableText value={blocks} />
          ) : (
            FALLBACK_BIO.map((p, i) => <p key={i}>{p}</p>)
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel p-7 grid grid-cols-2 gap-5">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="space-y-1.5">
                <p className="font-serif text-3xl md:text-4xl gold-text font-semibold">
                  {h.value}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
