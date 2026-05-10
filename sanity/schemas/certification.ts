import { defineField, defineType } from "sanity";

export const certification = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Certification Name",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "issuer",
      title: "Issuing Body",
      type: "string"
    }),
    defineField({
      name: "issuedAt",
      title: "Issue Date",
      type: "date"
    }),
    defineField({
      name: "credentialId",
      title: "Credential ID",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "pdfFile",
      title: "Certificate PDF",
      type: "file",
      options: { accept: "application/pdf" }
    }),
    defineField({
      name: "externalUrl",
      title: "External Verification URL",
      type: "url"
    })
  ],
  preview: {
    select: { title: "name", subtitle: "issuer" }
  }
});
