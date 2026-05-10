import { defineField, defineType } from "sanity";

export const skillCategory = defineType({
  name: "skillCategory",
  title: "Skill Category",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Financial Modeling, Programming & Data, Soft Skills",
      validation: (r) => r.required()
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" }
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
    select: { title: "category", subtitle: "skills" },
    prepare({ title, subtitle }) {
      const list = Array.isArray(subtitle) ? subtitle.join(", ") : "";
      return { title, subtitle: list };
    }
  }
});
