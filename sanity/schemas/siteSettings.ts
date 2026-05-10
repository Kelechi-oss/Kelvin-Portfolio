import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      description: "Shown beneath the name in the hero",
      type: "string"
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      description: "1–2 sentence summary used in meta tags",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "longBio",
      title: "About Me Bio",
      type: "array",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "headshot",
      title: "Headshot",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string"
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string"
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string"
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url"
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url"
    }),
    defineField({
      name: "financialAppUrl",
      title: "Financial Analytics App URL",
      type: "url"
    }),
    defineField({
      name: "resumeFile",
      title: "Resume PDF",
      type: "file",
      options: { accept: "application/pdf" }
    }),
    defineField({
      name: "presentationFile",
      title: "Financial App Presentation Slides (PDF/PPTX)",
      type: "file"
    }),
    defineField({
      name: "contactCta",
      title: "Contact CTA Text",
      type: "text",
      rows: 3
    })
  ],
  preview: {
    select: { title: "name", subtitle: "tagline" }
  }
});
