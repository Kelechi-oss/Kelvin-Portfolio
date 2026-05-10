"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-8 md:py-12", className)}
    >
      <div className="container relative">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 max-w-3xl"
          >
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="section-heading mt-3">
                {title}
              </h2>
            )}
            <div className="luxury-divider mt-5" />
            {description && (
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}