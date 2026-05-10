"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Badge } from "@/components/ui/badge";

export type SkillCategoryItem = {
  _id?: string;
  category: string;
  skills: string[];
};

export function Skills({ categories }: { categories: SkillCategoryItem[] }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Technical & Strategic Toolkit"
      description="A comprehensive blend of finance domain expertise, quantitative tooling, and the soft skills required to lead cross-functional initiatives."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat._id ?? cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass-panel p-6"
          >
            <p className="eyebrow mb-4">{cat.category}</p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
