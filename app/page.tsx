import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Articles } from "@/components/sections/Articles";
import { FinancialApp } from "@/components/sections/FinancialApp";
import { Contact } from "@/components/sections/Contact";

import { SEED } from "@/lib/seed-content";

export default function Home() {
  return (
    <>
      <Hero
        name={SEED.site.name}
        tagline={SEED.site.tagline}
        headshotUrl={SEED.site.headshotUrl}
        resumeUrl={SEED.site.resumeUrl}
        appUrl={SEED.site.financialAppUrl}
        githubUrl={SEED.site.github}
        linkedinUrl={SEED.site.linkedin}
      />

      <div className="space-y-8 md:space-y-12">
        <About blocks={undefined} />
        <Education semesters={SEED.semesters} />
        <Experience items={SEED.experiences} />
        <Certifications items={SEED.certifications} />
        <Skills categories={SEED.skills} />
        <Projects items={SEED.projects} />
        <Articles items={SEED.articles} />
        <FinancialApp data={undefined} />
        <Contact
          email={SEED.site.email}
          phone={SEED.site.phone}
          location={SEED.site.location}
          github={SEED.site.github}
          linkedin={SEED.site.linkedin}
          ctaText={SEED.site.contactCta}
        />
      </div>
    </>
  );
}
