"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Button } from "@/components/ui/button";
import {
  Download,
  ExternalLink,
  FileText,
  LineChart,
  Sparkles
} from "lucide-react";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

export type FinancialAppData = {
  title?: string;
  summary?: PortableTextBlock[];
  capabilities?: string[];
  appUrl?: string;
  presentationFile?: { asset?: { url?: string; originalFilename?: string } };
  screenshots?: { asset?: { url?: string } }[];
};

const FALLBACK_CAPABILITIES = [
  "7 industry-specific XGBoost distress models (Healthcare, Technology, Manufacturing, Energy, Construction & Real Estate, Airlines, Agriculture & Food) with industry-calibrated Safe / Grey / Distress thresholds, trained on 70+ years of Compustat (WRDS) industry specific data for predicting companies bankruptcy risk.",
  "Beneish M-Score 8-ratio model that flags potential earnings manipulation in target companies",
  "Logistic Regression bankruptcy probability scoring across financial ratios",
  "Merger Synergy Analysis scoring five dimensions — Revenue Diversification, Cost/Margin Synergy, Balance Sheet Fit, Liquidity Complement, Size Complement — with HIGH / MODERATE / LOW verdicts",
  "Textual Sentiment NLP on 10-K filings combining DistilBERT embeddings with the Loughran-McDonald financial dictionary, plus Flesch-Kincaid, Gunning Fog and ARI readability indices",
  "Valuation engine featuring DCF and Graham Fair Value, with CAPM-based cost of equity and beta regression"
];

export function FinancialApp({ data }: { data?: FinancialAppData }) {
  const appUrl =
    data?.appUrl ?? "https://financial-analytics-project-ac820-d1.streamlit.app";
  const capabilities = data?.capabilities?.length
    ? data.capabilities
    : FALLBACK_CAPABILITIES;
  const presentationUrl = data?.presentationFile?.asset?.url;

  return (
    <SectionShell
      id="financial-app"
      eyebrow="Featured Build"
      title={
        <>
          The <span className="gold-text">M&A Risk and Merger Synergy</span>{" "}
          Analyzer
        </>
      }
      description="A quantitative framework for screening acquisition targets — Single Target Assessment, Merger Analysis, and Textual Sentiment Analysis on 10-K filings, all in a single web platform."
    >
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel p-7 md:p-9"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold">
              <LineChart size={22} />
            </span>
            <div>
              <h3 className="font-serif text-2xl">
                {data?.title ?? "M&A Risk and Merger Synergy Analyzer"}
              </h3>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Built with Python & Streamlit · BA870 / AC820, Boston University
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-ivory/85 leading-relaxed">
            {data?.summary?.length ? (
              <PortableText value={data.summary} />
            ) : (
              <p>
                The M&A Risk and Merger Synergy Analyzer is a web-based
                quantitative framework purpose-built to screen acquisition
                targets across three integrated workflows: Single Target
                Assessment, Merger Analysis, and Textual Sentiment Analysis.
                Trained on 70+ years of Compustat data via WRDS, the platform
                replaces fragmented, manual due diligence with one-click
                distress scoring, earnings-manipulation detection, and synergy
                evaluation — delivering institutional-grade insight to M&A
                professionals, private-equity investors, corporate-development
                teams, and financial analysts.
              </p>
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <ExternalLink size={16} /> Launch App
              </Button>
            </a>
            <a
              href="/articles/ma-risk-synergy-slides.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                <FileText size={16} /> View App Capability Slide
              </Button>
            </a>
            {presentationUrl && (
              <a href={presentationUrl} download>
                <Button size="lg" variant="outline">
                  <Download size={16} /> Download Slides
                </Button>
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 glass-panel p-7"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-gold" />
            <p className="eyebrow">Capabilities</p>
          </div>
          <ul className="space-y-3">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="relative pl-5 text-sm md:text-[15px] text-ivory/85 leading-relaxed"
              >
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gold" />
                {cap}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionShell>
  );
}
