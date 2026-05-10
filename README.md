# Kelvin Kelechi Nlebemchukwu — Portfolio

A high-end professional finance portfolio for an MBA candidate / ACA, built with **Next.js 14 (App Router)**, **Tailwind CSS**, **shadcn/ui**, **Framer Motion**, and a fully editable **Sanity.io** CMS.

Dark navy-and-gold theme. Recruiter-grade typography. Every section is editable through Sanity Studio mounted at `/studio`.

---

## ✨ Features

- **Hero** with headshot, name, tagline, and one-click buttons (Resume · Launch App · GitHub · Contact)
- **About Me** with portable-text bio + quantified-achievement panel
- **Education / MBA Progress** interactive dashboard with semester timeline, status badges, and progress bars
- **Work Experience** vertical timeline (resume bullets pulled in verbatim)
- **Certifications** gallery with embedded PDF previews
- **Skills** comprehensive technical + soft-skill matrix
- **Projects** with filter tabs (All / Academic / Personal / Team / In Progress) and PDF attachments
- **Articles & Publications** with both "Read Online" (in-browser PDF viewer) and "Download PDF"
- **Financial Analytics App** showcase with prominent Launch and Slides buttons
- **Contact / CTA** with email, LinkedIn, GitHub, location

The site renders fully **even before Sanity is configured** — built-in seed fallback contains the exact provided content.

---

## 🚀 Quick Start

### 1. Install
```bash
npm install
```

### 2. Drop in your headshot
Place a portrait JPG at:
```
public/images/headshot.jpg
```
(See `public/images/README.md` for sizing guidance.)
You can also upload it through Sanity Studio later — Sanity-hosted images override the static one.

### 3. Run locally
```bash
npm run dev
```
Visit:
- `http://localhost:3000` — portfolio
- `http://localhost:3000/studio` — Sanity CMS (will prompt to configure on first visit)

That's it. The portfolio works immediately with all your provided content.

---

## 🗄  Connecting Sanity (so you can self-edit content)

### 1. Create a Sanity project
Go to <https://www.sanity.io/manage> → **Create project** → choose:
- **Project name:** Kelvin Portfolio
- **Dataset:** `production`
- **Schema:** "Empty (no schema)" — we already have one

Copy the **Project ID** shown on the dashboard.

### 2. Generate a write token
In sanity.io/manage → your project → **API → Tokens → Add API token**
- **Name:** seed-script
- **Permissions:** Editor (or higher)
- Copy the token (you won't be able to view it again)

### 3. Add `.env.local`
Copy `.env.local.example` → `.env.local` and fill in:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-09-01
SANITY_API_WRITE_TOKEN=skXxXxXxX...
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 4. Allow CORS for `/studio`
In sanity.io/manage → **API → CORS Origins → Add CORS Origin**:
- `http://localhost:3000` (with credentials)
- Your production URL once deployed (with credentials)

### 5. Seed the dataset
```bash
npm run seed
```
This populates Sanity with:
- Site settings (name, tagline, bio, contact info, resume PDF)
- All 3 MBA semesters and courses
- All 3 work experiences
- The ACA certification (with the actual certificate PDF uploaded)
- All 4 skill categories
- All 4 projects (with PDFs attached where applicable)
- All 3 articles (with PDFs)
- The Financial Analytics App with capabilities

After seeding, restart `npm run dev` and visit `/studio` to edit.

---

## ✏️  Editing Content in Sanity Studio

Open `http://localhost:3000/studio` and sign in with your Sanity account.

The Studio sidebar is organized as:
- **Site Settings** — singleton document with name, tagline, bio, contact info, resume PDF, headshot, financial-app URL
- **MBA Semesters** — add/edit semesters and their courses (status: Completed / In Progress / Yet to Start)
- **Work Experience** — add/edit each role with bullets
- **Certifications** — name, issuer, date, certificate PDF
- **Skills** — group skills by category, drag to reorder
- **Projects** — type (Academic/Personal/Team/Professional), status, team members, links, attached PDF
- **Articles & Publications** — abstract, author/team, attached PDF
- **Financial Analytics App** — singleton document with capabilities, app URL, slides

**To add a new semester / course / project / article**: just click the `+` button next to the relevant document type — no code change needed.

The home page revalidates every 60 seconds, so changes appear within a minute. (See "Instant updates" below for an optional webhook-based zero-delay setup.)

---

## ☁️  Deploying to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/kelvin-portfolio.git
git push -u origin main
```

### 2. Import to Vercel
1. Go to <https://vercel.com/new>
2. Select the repo → **Import**
3. **Framework Preset:** Next.js (auto-detected)
4. Under **Environment Variables**, add the four `NEXT_PUBLIC_SANITY_*` vars and `SANITY_API_WRITE_TOKEN` from your `.env.local`
5. Click **Deploy**

### 3. Add the production URL to Sanity CORS
sanity.io/manage → API → CORS Origins → Add `https://your-app.vercel.app` with credentials.

### 4. Custom domain (optional)
In Vercel → your project → **Settings → Domains** → add your custom domain (e.g. `kelvin-nlebemchukwu.com`) and follow the DNS instructions.

---

## 🔁 Instant updates (optional webhook)

By default, the home page revalidates every 60 seconds. For instant updates after a Sanity edit, add a webhook:

1. sanity.io/manage → **API → Webhooks → Create**
2. **URL:** `https://your-app.vercel.app/api/revalidate?secret=<random-secret>`
3. **Trigger on:** Create, Update, Delete
4. **Filter:** `_type in ["siteSettings","semester","experience","certification","skillCategory","project","article","financialApp"]`

(You'd add a small `app/api/revalidate/route.ts` handler that calls `revalidateTag()` — easy follow-up.)

---

## 🗂  Project Structure

```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx                       # composes all sections
│   ├── globals.css                    # navy + gold theme
│   └── studio/[[...tool]]/page.tsx    # Sanity Studio mount
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SectionShell.tsx               # animated section wrapper
│   ├── ui/                            # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── progress.tsx
│   │   ├── separator.tsx
│   │   └── tabs.tsx
│   └── sections/                      # 1 file per page section
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Certifications.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Articles.tsx
│       ├── FinancialApp.tsx
│       └── Contact.tsx
├── lib/
│   ├── utils.ts
│   ├── sanity-fetch.ts                # cached server-side fetch
│   └── seed-content.ts                # built-in fallback (matches your CV)
├── sanity/
│   ├── env.ts
│   ├── structure.ts                   # Studio sidebar layout
│   ├── lib/
│   │   ├── client.ts
│   │   ├── image.ts
│   │   └── queries.ts                 # all GROQ queries
│   └── schemas/                       # Sanity schema definitions
│       ├── index.ts
│       ├── siteSettings.ts
│       ├── semester.ts
│       ├── experience.ts
│       ├── certification.ts
│       ├── skillCategory.ts
│       ├── project.ts
│       ├── article.ts
│       └── financialApp.ts
├── public/
│   ├── kelvin-resume.pdf              ← your resume
│   ├── aca-certificate.pdf            ← your ACA certificate
│   ├── articles/
│   │   ├── pharma-pricing-implications.pdf
│   │   ├── medicaid-billing-patterns.pdf
│   │   └── ma-electricity-supply.pdf
│   └── images/
│       └── headshot.jpg               ← drop your portrait here
├── scripts/
│   └── seed.ts                        # `npm run seed`
├── sanity.config.ts
├── sanity.cli.ts
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

---

## 📜 Scripts

| Command          | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `npm run dev`    | Start the Next.js dev server                           |
| `npm run build`  | Production build                                       |
| `npm run start`  | Run the production build locally                       |
| `npm run lint`   | ESLint                                                 |
| `npm run seed`   | Push the built-in content into your Sanity dataset     |

---

## 🧪 Stack

- **Framework:** Next.js 14 (App Router) + React 18
- **Styling:** Tailwind CSS, custom navy/gold theme, Playfair Display + Inter fonts
- **UI primitives:** shadcn/ui patterns (Button, Card, Badge, Progress, Tabs, Separator)
- **Animation:** Framer Motion (scroll-in fades, layout transitions on filters)
- **CMS:** Sanity v3 mounted at `/studio` via `next-sanity`
- **PDF rendering:** native `<iframe>` viewer (no extra deps)

---

## 📞 Contact

- **Email:** kelechi@bu.edu
- **Phone:** 617-870-9624
- **LinkedIn:** [linkedin.com/in/nkelechikelvin](https://www.linkedin.com/in/nkelechikelvin)
- **GitHub:** [github.com/Kelechi-oss](https://github.com/Kelechi-oss)
- **Live App:** [Financial Analytics](https://financial-analytics-project-ac820-d1.streamlit.app)
