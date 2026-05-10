import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { structure } from "./sanity/structure";
import { apiVersion, dataset, projectId, studioBasePath } from "./sanity/env";

export default defineConfig({
  basePath: studioBasePath,
  name: "kelvin_portfolio",
  title: "Kelvin Nlebemchukwu — Portfolio CMS",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion })
  ]
});
