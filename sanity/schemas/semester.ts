import { defineField, defineType } from "sanity";

export const semester = defineType({
  name: "semester",
  title: "MBA Semester",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Semester",
      type: "string",
      description: "e.g. Fall 2025, Spring 2026",
      validation: (r) => r.required()
    }),
    defineField({
      name: "status",
      title: "Semester Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in_progress" },
          { title: "Yet to Start", value: "upcoming" }
        ],
        layout: "radio"
      },
      validation: (r) => r.required()
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first in the timeline"
    }),
    defineField({
      name: "notes",
      title: "Notes",
      type: "text",
      rows: 2
    }),
    defineField({
      name: "courses",
      title: "Courses",
      type: "array",
      of: [
        {
          type: "object",
          name: "course",
          fields: [
            defineField({
              name: "name",
              title: "Course Name",
              type: "string",
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
                  { title: "Yet to Start", value: "upcoming" }
                ]
              }
            })
          ],
          preview: { select: { title: "name", subtitle: "status" } }
        }
      ]
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
    select: { title: "title", subtitle: "status" }
  }
});
