"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin } from "lucide-react";
import { formatDateRange } from "@/lib/utils";

export type ExperienceItem = {
  _id?: string;
  company: string;
  title: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  bullets?: string[];
};

export function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Work Experience"
      title="Seven years driving financial outcomes in regulated industries"
      description="From end-to-end accounting to strategic FP&A leadership across Nigeria's pharmaceutical sector — measurable impact on contracts, costs, and compliance."
    >
      <div className="relative">
        <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gold/20" />
        <div className="space-y-10">
          {items.map((item, idx) => (
            <motion.article
              key={item._id ?? `${item.company}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative pl-12 md:pl-14"
            >
              <span className="absolute left-0 top-1.5 grid h-7 w-7 place-items-center rounded-full border border-gold/40 bg-navy-900 text-gold">
                <Briefcase size={13} />
              </span>

              <div className="glass-panel p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-ivory">
                      {item.title}
                    </h3>
                    <p className="text-gold mt-0.5 font-medium">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <Badge>
                      {formatDateRange(item.startDate, item.endDate, item.current)}
                    </Badge>
                    {item.location && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin size={12} /> {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {(item.bullets ?? []).map((b, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-sm md:text-[15px] leading-relaxed text-ivory/85"
                    >
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
