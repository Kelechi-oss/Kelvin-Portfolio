import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings")
        ),
      S.divider(),
      S.documentTypeListItem("semester").title("MBA Semesters"),
      S.documentTypeListItem("experience").title("Work Experience"),
      S.documentTypeListItem("certification").title("Certifications"),
      S.documentTypeListItem("skillCategory").title("Skills"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("article").title("Articles & Publications"),
      S.divider(),
      S.listItem()
        .title("Financial Analytics App")
        .id("financialApp")
        .child(
          S.document()
            .schemaType("financialApp")
            .documentId("financialApp")
            .title("Financial Analytics App")
        )
    ]);
