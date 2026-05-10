"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, FileText } from "lucide-react";

export type Certification = {
  _id?: string;
  name: string;
  issuer?: string;
  issuedAt?: string;
  credentialId?: string;
  pdfFile?: { asset?: { url?: string } };
  externalUrl?: string;
  description?: string;
};

function formatDate(d?: string) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch {
    return d;
  }
}

export function Certifications({ items }: { items: Certification[] }) {
  return (
    <SectionShell
      id="certifications"
      eyebrow="Professional Qualifications"
      title="Certifications & Credentials"
      description="Internationally recognized professional qualifications — view embedded PDFs or verify externally."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((cert, idx) => {
          const pdfUrl = cert.pdfFile?.asset?.url;
          return (
            <motion.div
              key={cert._id ?? cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/15 text-gold">
                      <Award size={20} />
                    </span>
                    <div className="flex-1">
                      <CardTitle>{cert.name}</CardTitle>
                      {cert.issuer && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {cert.issuer}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  {cert.issuedAt && (
                    <p className="text-xs uppercase tracking-[0.18em] text-gold/80">
                      Issued · {formatDate(cert.issuedAt)}
                    </p>
                  )}
                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground mt-2">
                      ID: {cert.credentialId}
                    </p>
                  )}
                  {cert.description && (
                    <p className="mt-3 text-sm text-ivory/80 leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  {pdfUrl && (
                    <div className="mt-5 overflow-hidden rounded-lg border border-gold/20 bg-navy-950">
                      <iframe
                        src={`${pdfUrl}#toolbar=0&navpanes=0`}
                        title={cert.name}
                        className="h-44 w-full"
                      />
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex-wrap">
                  {pdfUrl && (
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        <FileText size={14} /> View Certificate
                      </Button>
                    </a>
                  )}
                  {cert.externalUrl && (
                    <a
                      href={cert.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="ghost">
                        <ExternalLink size={14} /> Verify
                      </Button>
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
