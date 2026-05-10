import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title:
    "Kelvin Kelechi Nlebemchukwu | Finance Professional & MBA Candidate",
  description:
    "Finance professional and Boston University MBA candidate (Class of 2027) — Associate Chartered Accountant with expertise in financial modeling, FP&A, and data-driven strategy.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  openGraph: {
    title: "Kelvin Kelechi Nlebemchukwu",
    description:
      "Finance Professional | MBA Candidate (Boston University '27 | Associate Chartered Accountant)",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="relative overflow-x-hidden">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
