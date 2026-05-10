import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string"
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "string",
      description: "e.g. January 2024"
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "string",
      description: "e.g. July 2025 (leave blank if current)"
    }),
    defineField({
      name: "current",
      title: "Currently Working Here",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "bullets",
      title: "Achievement Bullets",
      type: "array",
      of: [{ type: "text", rows: 2 }]
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number"
    })
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }]
    }
  ],
  preview: {
    select: { title: "title", subtitle: "company" }
  }
});
