import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-gold/15 bg-navy-950/80 mt-24">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-lg text-ivory">
            Kelvin Kelechi <span className="gold-text">Nlebemchukwu</span>
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
            Finance · Strategy · Analytics
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Kelechi-oss"
            target="_blank"
            className="text-ivory/70 hover:text-gold transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nkelechikelvin"
            target="_blank"
            className="text-ivory/70 hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:kelechi@bu.edu"
            className="text-ivory/70 hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © {year} Kelvin K. Nlebemchukwu · Built with Next.js & Sanity
        </p>
      </div>
    </footer>
  );
}
