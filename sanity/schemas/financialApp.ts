import { defineField, defineType } from "sanity";

export const financialApp = defineType({
  name: "financialApp",
  title: "Financial Analytics App",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Financial Analytics App"
    }),
    defineField({
      name: "summary",
      title: "Executive Summary",
      type: "array",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "array",
      of: [{ type: "string" }],
      description: "High-level bullet points of what the app does"
    }),
    defineField({
      name: "appUrl",
      title: "App URL",
      type: "url"
    }),
    defineField({
      name: "presentationFile",
      title: "Presentation Slides",
      type: "file"
    }),
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }]
    })
  ],
  preview: {
    select: { title: "title" }
  }
});
