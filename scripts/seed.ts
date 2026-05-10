/**
 * Seed Sanity with the exact provided portfolio content.
 *
 * Run with:
 *   npm run seed
 *
 * Requires .env.local to define:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_API_WRITE_TOKEN  (an "Editor" or higher token from sanity.io/manage)
 */

import "dotenv/config";
import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { SEED } from "../lib/seed-content";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "✖  Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-09-01",
  token,
  useCdn: false
});

async function uploadPdf(filename: string) {
  const filePath = path.join(process.cwd(), "public", filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`  · Skipping upload — file not found: ${filename}`);
    return null;
  }
  const buf = fs.readFileSync(filePath);
  const asset = await client.assets.upload("file", buf, {
    filename: path.basename(filename)
  });
  return { _type: "file", asset: { _type: "reference", _ref: asset._id } };
}

async function run() {
  console.log("▶  Seeding Sanity dataset:", dataset);

  const tx = client.transaction();

  // 1. Site Settings
  tx.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    name: SEED.site.name,
    tagline: SEED.site.tagline,
    email: SEED.site.email,
    phone: SEED.site.phone,
    location: SEED.site.location,
    github: SEED.site.github,
    linkedin: SEED.site.linkedin,
    financialAppUrl: SEED.site.financialAppUrl,
    contactCta: SEED.site.contactCta,
    longBio: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "I am a finance professional with a passion for harnessing data to drive business growth and operational excellence. With a proven record at KK Medicals and Evaron Pharmaceutical, I've led cross-functional teams, developed innovative strategies, and quality processes to deliver impactful business outcomes."
          }
        ]
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "As a results-oriented leader, I excel in crafting financial strategies, optimizing processes, and engaging stakeholders to drive business success. My key achievements include increasing contract value by 25% through strategic negotiations, cutting operational costs by 20% by realigning budget priorities and streamlining the supply chain network, improving financial reporting accuracy with streamlined inventory management, and enhancing customer retention by 20% through effective dispute resolution."
          }
        ]
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "What sets me apart is my ability to blend advanced financial modeling with strategic insight, seamlessly integrating data-focused solutions with business objectives. I leverage this expertise to improve processes, align cross-functional teams, and achieve sustainable organizational success."
          }
        ]
      }
    ]
  });

  // 2. Semesters
  SEED.semesters.forEach((s, i) => {
    tx.createOrReplace({
      _id: `semester-${i + 1}`,
      _type: "semester",
      title: s.title,
      status: s.status,
      order: s.order,
      courses: s.courses?.map((c) => ({
        _type: "course",
        name: c.name,
        status: c.status
      }))
    });
  });

  // 3. Experiences
  SEED.experiences.forEach((e, i) => {
    tx.createOrReplace({
      _id: `experience-${i + 1}`,
      _type: "experience",
      ...e,
      order: i + 1
    });
  });

  // 4. Skills
  SEED.skills.forEach((s, i) => {
    tx.createOrReplace({
      _id: `skill-${i + 1}`,
      _type: "skillCategory",
      ...s,
      order: i + 1
    });
  });

  // 5. Financial App
  tx.createOrReplace({
    _id: "financialApp",
    _type: "financialApp",
    title: "Financial Analytics App",
    appUrl: SEED.site.financialAppUrl,
    capabilities: [
      "Real-time stock data ingestion and time-series analytics",
      "Portfolio risk modeling with VaR and Sharpe-ratio calculations",
      "Interactive valuation models (DCF, comparables) with sensitivity analysis",
      "Predictive forecasting using regression and machine learning models",
      "Custom dashboards with downloadable PDF reports"
    ]
  });

  await tx.commit();
  console.log("✓  Settings, semesters, experiences, skills, app done");

  // 6. Upload PDFs and create certifications, projects, articles
  console.log("▶  Uploading PDF assets…");

  const acaPdf = await uploadPdf("aca-certificate.pdf");
  const pharmaPdf = await uploadPdf("articles/pharma-pricing-implications.pdf");
  const medicaidPdf = await uploadPdf("articles/medicaid-billing-patterns.pdf");
  const electricityPdf = await uploadPdf("articles/ma-electricity-supply.pdf");
  const resumePdf = await uploadPdf("kelvin-resume.pdf");

  const tx2 = client.transaction();

  // 6a. Update site settings with resume file
  if (resumePdf) {
    tx2.patch("siteSettings", { set: { resumeFile: resumePdf } });
  }

  // 6b. Certification
  tx2.createOrReplace({
    _id: "cert-aca",
    _type: "certification",
    name: "Associate Chartered Accountant (ACA)",
    issuer: "Institute of Chartered Accountants of Nigeria (ICAN)",
    issuedAt: "2023-05-23",
    description:
      "Internationally recognized professional qualification covering financial reporting, audit & assurance, taxation, financial management, and ethics.",
    pdfFile: acaPdf
  });

  // 6c. Projects
  const projectPdfMap: Record<string, any> = {
    "Economic Implications of the International Differential Pricing System in the U.S. Pharmaceutical Industry":
      pharmaPdf,
    "Unusual Billing Patterns in Medicaid Behavioral Health Services":
      medicaidPdf,
    "Data-Driven Insights into Competitive Electricity Supply Participation in Massachusetts":
      electricityPdf
  };

  SEED.projects.forEach((p, i) => {
    const { pdfFile, ...rest } = p;
    tx2.createOrReplace({
      _id: `project-${i + 1}`,
      _type: "project",
      ...rest,
      pdfFile: projectPdfMap[p.title] ?? null,
      order: i + 1
    });
  });

  // 6d. Articles
  const articlePdfMap: Record<string, any> = {
    "Economic Implications of the International Differential Pricing System in the U.S. Pharmaceutical Industry":
      pharmaPdf,
    "Unusual Billing Patterns in Medicaid Behavioral Health Services":
      medicaidPdf,
    "Data-Driven Insights into Competitive Electricity Supply Participation in Massachusetts":
      electricityPdf
  };

  SEED.articles.forEach((a, i) => {
    const { pdfFile, ...rest } = a;
    tx2.createOrReplace({
      _id: `article-${i + 1}`,
      _type: "article",
      ...rest,
      publishedAt: new Date().toISOString().split("T")[0],
      pdfFile: articlePdfMap[a.title] ?? null
    });
  });

  await tx2.commit();
  console.log("✓  Certifications, projects, articles created");
  console.log("\n🎉  Seed complete. Visit /studio to edit.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
