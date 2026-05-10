"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen, X, Users, User } from "lucide-react";

export type ArticleItem = {
  _id?: string;
  title: string;
  category?: "academic" | "personal" | "industry";
  author?: string;
  team?: string[];
  abstract?: string;
  publishedAt?: string;
  pdfFile?: { asset?: { url?: string; originalFilename?: string } };
  tags?: string[];
};

const CATEGORY_LABEL: Record<string, string> = {
  academic: "Academic Course Project",
  personal: "Personal Project",
  industry: "Industry Article"
};

export function Articles({ items }: { items: ArticleItem[] }) {
  const [reading, setReading] = useState<ArticleItem | null>(null);

  return (
    <SectionShell
      id="articles"
      eyebrow="Articles & Publications"
      title="Research, Analysis & Industry Commentary"
      description="In-depth research papers spanning healthcare, energy, and pharmaceutical economics — read online or download the PDF."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((a, idx) => {
          const pdfUrl = a.pdfFile?.asset?.url;
          const isTeam = (a.team?.length ?? 0) > 1;
          return (
            <motion.div
              key={a._id ?? a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  {a.category && (
                    <Badge className="self-start mb-3">
                      {CATEGORY_LABEL[a.category] ?? a.category}
                    </Badge>
                  )}
                  <CardTitle className="leading-snug">{a.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  {a.abstract && (
                    <p className="text-sm text-ivory/80 leading-relaxed line-clamp-5">
                      {a.abstract}
                    </p>
                  )}

                  {(a.author || (a.team && a.team.length > 0)) && (
                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                      {isTeam ? (
                        <Users size={14} className="mt-0.5 text-gold shrink-0" />
                      ) : (
                        <User size={14} className="mt-0.5 text-gold shrink-0" />
                      )}
                      <span className="leading-relaxed">
                        {isTeam ? "Team: " : "Author: "}
                        <span className="text-ivory/80">
                          {a.team && a.team.length > 0
                            ? a.team.join(", ")
                            : a.author}
                        </span>
                      </span>
                    </div>
                  )}

                  {a.tags && a.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {a.tags.map((t) => (
                        <Badge key={t} variant="muted">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex-wrap">
                  {pdfUrl && (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setReading(a)}
                      >
                        <BookOpen size={14} /> Read Online
                      </Button>
                      <a href={pdfUrl} download>
                        <Button size="sm" variant="ghost">
                          <Download size={14} /> Download PDF
                        </Button>
                      </a>
                    </>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {reading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/90 backdrop-blur-md p-4 md:p-10 flex flex-col"
            onClick={() => setReading(null)}
          >
            <div
              className="flex items-center justify-between mb-4 max-w-5xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-serif text-lg text-ivory truncate pr-4">
                {reading.title}
              </p>
              <button
                onClick={() => setReading(null)}
                className="rounded-full border border-gold/40 p-2 text-ivory hover:text-gold hover:bg-gold/10"
                aria-label="Close reader"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src={reading.pdfFile?.asset?.url}
              className="flex-1 w-full max-w-5xl mx-auto rounded-lg border border-gold/20 bg-white"
              onClick={(e) => e.stopPropagation()}
              title={reading.title}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}