import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article / Publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Academic Course Project", value: "academic" },
          { title: "Personal Project", value: "personal" },
          { title: "Industry Article", value: "industry" }
        ]
      }
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string"
    }),
    defineField({
      name: "team",
      title: "Team Members",
      type: "array",
      of: [{ type: "string" }],
      description: "Used when this is a team / academic project"
    }),
    defineField({
      name: "abstract",
      title: "Abstract / Summary",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date"
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" }
    }),
    defineField({
      name: "cover",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: { accept: "application/pdf" }
    })
  ],
  preview: {
    select: { title: "title", subtitle: "category" }
  }
});
