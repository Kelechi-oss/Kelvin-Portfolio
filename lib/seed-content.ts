/**
 * Built-in fallback content used when Sanity has not been populated yet.
 * The site renders perfectly out-of-the-box, and any field added in the
 * Sanity Studio at /studio overrides the corresponding fallback.
 */
import type { ExperienceItem } from "@/components/sections/Experience";
import type { Semester } from "@/components/sections/Education";
import type { Certification } from "@/components/sections/Certifications";
import type { SkillCategoryItem } from "@/components/sections/Skills";
import type { ProjectItem } from "@/components/sections/Projects";
import type { ArticleItem } from "@/components/sections/Articles";

export const SEED = {
  site: {
    name: "Kelvin Kelechi Nlebemchukwu",
    tagline: "Finance Professional | MBA Candidate (Boston University '27 | Associate Chartered Accountant)",
    email: "kelechi@bu.edu",
    phone: "617-870-9624",
    location: "Boston, MA",
    github: "https://github.com/Kelechi-oss",
    linkedin: "https://www.linkedin.com/in/nkelechikelvin",
    financialAppUrl: "https://financial-analytics-project-ac820-d1.streamlit.app",
    resumeUrl: "/kelvin-resume.pdf",
    headshotUrl: "/images/headshot.jpg",
    contactCta: "I'm actively pursuing finance leadership opportunities — corporate finance, FP&A, investment management, and strategic analytics roles where rigorous modeling meets clear business insight. Always open to a conversation."
  },

  semesters: [
    {
      title: "Fall 2025",
      status: "completed",
      order: 1,
      courses: [
        { name: "Financial Reporting and Analysis", status: "completed" },
        { name: "Organization/Market/Society", status: "completed" },
        { name: "Career Management", status: "completed" },
        { name: "Leadership Communication", status: "completed" },
        { name: "Team Coaching", status: "completed" },
        { name: "Finance 1", status: "completed" },
        { name: "Ethical Leadership Global Economic", status: "completed" },
        { name: "Marketing Management", status: "completed" },
        { name: "Leadership Organization and People", status: "completed" },
        { name: "Business Analytics: Data & Risk", status: "completed" }
      ]
    },
    {
      title: "Spring 2026",
      status: "completed",
      order: 2,
      courses: [
        { name: "Financial Analytics with Python", status: "completed" },
        { name: "Finance 2", status: "completed" },
        { name: "Analytics for Managers", status: "completed" },
        { name: "Business Modeling with Spreadsheet", status: "completed" },
        { name: "Creating Value through Operation and Supply Chain Technology", status: "completed" },
        { name: "Competition, Innovation and Strategy", status: "completed" }
      ]
    },
    {
      title: "Fall 2026",
      status: "upcoming",
      order: 3,
      courses: [
        { name: "Accounting for Risk and Portfolio Management", status: "upcoming" },
        { name: "Investments", status: "upcoming" },
        { name: "Analysis and Management of Financial Risk", status: "upcoming" },
        { name: "Advanced Valuation Methods", status: "upcoming" },
        { name: "Big Data Analytics for Business", status: "upcoming" },
        { name: "Pricing Strategy and Tactics", status: "upcoming" },
        { name: "Strategy Implementation", status: "upcoming" }
      ]
    },
    {
      title: "Spring 2027",
      status: "upcoming",
      order: 4,
      courses: [{ name: "Course registration yet to start", status: "upcoming" }]
    }
  ] satisfies Semester[],

  experiences: [
    {
      company: "KK Medicals and Services Limited",
      title: "Finance Manager",
      location: "Abia, Nigeria",
      startDate: "January 2024",
      endDate: "July 2025",
      current: false,
      bullets: [
        "Led strategic financial planning and FP&A to facilitate business expansion in pharmaceutical services, delivering a 10% increase in new project contracts through rigorous forecasting and executive-level presentations.",
        "Directed full-cycle financial reporting, variance analysis, and P&L management, generating monthly and quarterly insights enabled senior leadership to make timely operational and investment decisions.",
        "Designed and implemented internal financial controls and policies, ensuring regulatory compliance and strengthening governance across all business units in a regulated industry.",
        "Partnered with clients and strategic stakeholders on financial structuring of contracts, contributing to a 25% increase in total contract value while enhancing long-term revenue stability.",
        "Executed cost optimization initiatives across operations, identifying resource reallocation opportunities reduced operating expenses by 20% and improved overall profitability."
      ]
    },
    {
      company: "Evaron Pharmaceutical Limited",
      title: "Finance Manager",
      location: "Abia, Nigeria",
      startDate: "March 2021",
      endDate: "January 2024",
      current: false,
      bullets: [
        "Built and managed corporate budgeting and forecasting model supporting annual planning across multiple functional areas, providing senior management with cost constraint analyses informed strategic resource allocation.",
        "Led full-cycle FP&A activities, including financial planning, budgeting, forecasting, and monthly reporting, to facilitate executive decision-making in a pharmaceutical environment.",
        "Collaborated with internal audit teams and external consultants on operational and financial reviews, synthesizing findings into management reports drove process improvements and risk mitigation.",
        "Supported implementation of updated financial policies and compliance standards across core business processes, enhancing organizational controls and regulatory readiness."
      ]
    },
    {
      company: "Agary Pharmaceuticals",
      title: "Accounting Officer",
      location: "Anambra, Nigeria",
      startDate: "July 2018",
      endDate: "March 2021",
      current: false,
      bullets: [
        "Managed end-to-end accounting operations, including accounts payable, accounts receivable, bank reconciliations, and strict month-end close processes, laying foundation for accurate financial reporting.",
        "Oversaw monthly, quarterly, and annual financial close activities, ensuring timely and accurate delivery of statements and reports to support reliable P&L visibility.",
        "Partnered with external auditors to analyze tax provisions and prepare corporate income tax filings, achieving 100% compliance with regulatory requirements.",
        "Streamlined inventory cost analysis and financial reporting processes by developing standardized procedures, increasing reporting accuracy by 95% and improving cost visibility for management decision-making."
      ]
    }
  ] satisfies ExperienceItem[],

  certifications: [
    {
      name: "Associate Chartered Accountant (ACA)",
      issuer: "Institute of Chartered Accountants of Nigeria (ICAN)",
      issuedAt: "2023-05-23",
      description: "Internationally recognized professional qualification covering financial reporting, audit & assurance, taxation, financial management, and ethics.",
      pdfFile: { asset: { url: "/aca-certificate.pdf" } }
    }
  ] satisfies Certification[],

  skills: [
    {
      category: "Financial Modeling & Analysis",
      skills: ["Financial Modeling", "Capital Budgeting", "Forecasting", "Financial Statement Analysis", "Valuation", "Variance Analysis", "P&L Management", "Budgeting", "FP&A"]
    },
    {
      category: "Risk, Strategy & Compliance",
      skills: ["Risk Analysis", "Internal Controls", "Regulatory Compliance", "Audit Coordination", "Cost Optimization", "Strategic Planning", "Contract Structuring"]
    },
    {
      category: "Programming, Data & Tools",
      skills: ["Python", "SQL", "Excel (Advanced)", "Tableau", "Power BI", "Machine Learning", "Predictive Modeling", "Optimization Modeling", "Statistical Analysis", "Data Analytics", "PowerPoint", "Streamlit"]
    },
    {
      category: "Leadership & Soft Skills",
      skills: ["Cross-Functional Leadership", "Stakeholder Engagement", "Executive Communication", "Team Coaching", "Negotiation", "Dispute Resolution", "Change Management", "Mentorship", "Research"]
    }
  ] satisfies SkillCategoryItem[],

  projects: [
    {
      title: "M&A Risk & Synergy Analyzer",
      type: "academic",
      status: "in_progress",
      description: "An interactive analytical tool that quantifies merger synergy potential and risk exposure across financial, operational, and integration dimensions for a target company.",
      team: ["Kelvin Nlebemchukwu", "Sutikshna (Sunny) Tiwari", "Vicente Llinares Llata"],
      tags: ["M&A", "Valuation", "Risk", "Excel"],
      pdfFile: { asset: { url: "/articles/ma-risk-synergy-slides.pdf" } }
    },
    {
      title: "ABBOTT NUTRITION Supply Chain Strategy Analysis",
      type: "academic",
      description: "Academic course project analyzing Abbott Nutrition's supply chain strategy — covering network design, sourcing, demand planning, and operational risk under regulated, life-critical product conditions.",
      team: ["Abigail Hyson", "Adwoa Atuahene", "Che Yu Liu", "Dafe Odje", "Kelvin Nlebemchukwu", "Xiao Yu Duan", "Yun Heng Lu"],
      tags: ["Supply Chain", "Operations", "Healthcare"],
      pdfFile: { asset: { url: "/articles/abbott-supply-chain.pdf" } }
    },
    {
      title: "Harley-Davidson Investment Analysis",
      type: "academic",
      description: "Academic course project performing a full investment analysis of Harley-Davidson — fundamental review, valuation, and equity recommendation grounded in industry positioning and financial performance.",
      team: ["Abdalla Mahmud", "Janice Kristabella", "Jessica Leason", "Kelvin Nlebemchukwu", "William Keenan", "Zidong Wang"],
      tags: ["Equity Research", "Valuation", "Investment Analysis"],
      pdfFile: { asset: { url: "/articles/harley-davidson-investment.pdf" } }
    },
    {
      title: "Analysis of portfolio diversification benefits on selected companies monthly closing returns",
      type: "academic",
      description: "Solo academic course project quantifying portfolio diversification benefits using monthly closing returns of selected companies — covariance, correlation, and efficient-frontier analysis with full Excel modeling.",
      team: ["Kelvin Nlebemchukwu"],
      tags: ["Portfolio Theory", "Diversification", "Excel"],
      links: [
        {
          label: "Download Excel Model",
          url: "/articles/diversification-case.xlsx"
        }
      ],
      pdfFile: { asset: { url: "/articles/diversification-case.pdf" } }
    },
    {
      title: "Economic Implications of the International Differential Pricing System in the U.S. Pharmaceutical Industry",
      type: "personal",
      description: "Examines how the international differential pricing of pharmaceuticals reshapes U.S. drug affordability, R&D investment, and access — quantifying spillovers between markets and proposing policy levers.",
      team: ["Kelvin Nlebemchukwu"],
      tags: ["Pharmaceutical", "Pricing", "Policy"],
      pdfFile: { asset: { url: "/articles/pharma-pricing-implications.pdf" } }
    },
    {
      title: "Unusual Billing Patterns in Medicaid Behavioral Health Services",
      type: "personal",
      description: "Identifies anomalous Medicaid billing patterns in behavioral health services using statistical outlier detection — surfacing fraud-prone categories and informing program-integrity controls.",
      team: ["Kelvin Nlebemchukwu"],
      tags: ["Medicaid", "Fraud Analytics", "Healthcare"],
      pdfFile: { asset: { url: "/articles/medicaid-billing-patterns.pdf" } }
    },
    {
      title: "Data-Driven Insights into Competitive Electricity Supply Participation in Massachusetts",
      type: "academic",
      description: "An empirical study of household participation in Massachusetts' competitive electricity supply market — combining regression analysis, demographic segmentation, and policy review.",
      team: ["Fopefoluwa Daniel-Makonor", "Kelvin Nlebemchukwu", "Shepherd Nhanga", "Cheri Hill", "Vanessa Verma"],
      tags: ["Energy", "Public Policy", "Regression"],
      pdfFile: { asset: { url: "/articles/ma-electricity-supply.pdf" } }
    }
  ] satisfies ProjectItem[],

  articles: [
    {
      title: "Economic Implications of the International Differential Pricing System in the U.S. Pharmaceutical Industry",
      category: "personal",
      author: "Kelvin Nlebemchukwu",
      team: ["Kelvin Nlebemchukwu"],
      abstract: "Examines how the international differential pricing of pharmaceuticals reshapes U.S. drug affordability, R&D investment, and access — quantifying spillovers between markets and proposing policy levers.",
      tags: ["Pharmaceutical", "Pricing", "Policy"],
      pdfFile: { asset: { url: "/articles/pharma-pricing-implications.pdf" } }
    },
    {
      title: "Unusual Billing Patterns in Medicaid Behavioral Health Services",
      category: "personal",
      author: "Kelvin Nlebemchukwu",
      team: ["Kelvin Nlebemchukwu"],
      abstract: "Identifies anomalous Medicaid billing patterns in behavioral health services using statistical outlier detection — surfacing fraud-prone categories and informing program-integrity controls.",
      tags: ["Medicaid", "Fraud Analytics", "Healthcare"],
      pdfFile: { asset: { url: "/articles/medicaid-billing-patterns.pdf" } }
    },
    {
      title: "Data-Driven Insights into Competitive Electricity Supply Participation in Massachusetts",
      category: "academic",
      team: ["Fopefoluwa Daniel-Makonor", "Kelvin Nlebemchukwu", "Shepherd Nhanga", "Cheri Hill", "Vanessa Verma"],
      abstract: "An empirical study of household participation in Massachusetts' competitive electricity supply market — combining regression analysis, demographic segmentation, and policy review.",
      tags: ["Energy", "Public Policy", "Regression"],
      pdfFile: { asset: { url: "/articles/ma-electricity-supply.pdf" } }
    }
  ] satisfies ArticleItem[]
};