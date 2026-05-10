"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, User, BookOpen, Download, X } from "lucide-react";

export type ProjectItem = {
  _id?: string;
  title: string;
  type: "academic" | "personal" | "team" | "professional";
  status?: "completed" | "in_progress" | "planned";
  description?: string;
  team?: string[];
  highlights?: string[];
  links?: { label: string; url: string }[];
  pdfFile?: { asset?: { url?: string } };
  pdfLabel?: string;
  tags?: string[];
};

const FILTERS = [
  { value: "all", label: "All" },
  { value: "academic", label: "Academic" },
  { value: "personal", label: "Personal" },
  { value: "team", label: "Team" },
  { value: "in_progress", label: "In Progress" }
] as const;

const TYPE_LABEL: Record<ProjectItem["type"], string> = {
  academic: "Academic Course Project",
  personal: "Personal Project",
  team: "Team Project",
  professional: "Professional"
};

export function Projects({ items }: { items: ProjectItem[] }) {
  const [filter, setFilter] = useState<string>("all");
  const [reading, setReading] = useState<ProjectItem | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    if (filter === "in_progress")
      return items.filter((p) => p.status === "in_progress");
    if (filter === "team")
      return items.filter(
        (p) => p.type === "team" || (p.team && p.team.length > 1)
      );
    return items.filter((p) => p.type === filter);
  }, [filter, items]);

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Selected Work"
      description="Filter by track to see academic course work, personal research, team collaborations, and active engagements."
    >
      <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
        <TabsList>
          {FILTERS.map((f) => (
            <TabsTrigger key={f.value} value={f.value}>
              {f.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, idx) => {
            const pdfUrl = p.pdfFile?.asset?.url;
            const teamSize = p.team?.length ?? 0;
            return (
              <motion.div
                key={p._id ?? p.title}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="h-full flex flex-col group">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge>{TYPE_LABEL[p.type]}</Badge>
                      {p.status === "in_progress" && (
                        <Badge variant="warning">In Progress</Badge>
                      )}
                    </div>
                    <CardTitle className="leading-snug group-hover:text-gold transition-colors">
                      {p.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    {p.description && (
                      <p className="text-sm text-ivory/80 leading-relaxed">
                        {p.description}
                      </p>
                    )}

                    {p.team && p.team.length > 0 && (
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        {teamSize > 1 ? (
                          <Users size={14} className="mt-0.5 text-gold shrink-0" />
                        ) : (
                          <User size={14} className="mt-0.5 text-gold shrink-0" />
                        )}
                        <span className="leading-relaxed">
                          {teamSize > 1 ? "Team: " : "Author: "}
                          <span className="text-ivory/80">
                            {p.team.join(", ")}
                          </span>
                        </span>
                      </div>
                    )}

                    {p.tags && p.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {p.tags.map((t) => (
                          <Badge key={t} variant="muted" className="px-2 py-0.5">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="flex-wrap gap-2">
                    {pdfUrl && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setReading(p)}
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
                    {(p.links ?? []).map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="ghost">
                          <ExternalLink size={14} /> {l.label}
                        </Button>
                      </a>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Full-screen PDF Reader Modal */}
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