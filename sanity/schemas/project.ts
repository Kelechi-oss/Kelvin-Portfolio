import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Academic Course Project", value: "academic" },
          { title: "Personal Project", value: "personal" },
          { title: "Team Project", value: "team" },
          { title: "Professional", value: "professional" }
        ]
      },
      validation: (r) => r.required()
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in_progress" },
          { title: "Planned", value: "planned" }
        ]
      },
      initialValue: "completed"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "team",
      title: "Team Members / Author",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "highlights",
      title: "Highlights / Outcomes",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" }
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "pdfFile",
      title: "Attached PDF",
      type: "file",
      options: { accept: "application/pdf" }
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "url", title: "URL", type: "url" }
          ]
        }
      ]
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
    select: { title: "title", subtitle: "type" }
  }
});
