// sanity.config.ts
import { schemaTypes } from "@/schema";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
  projectId: "9zcu1jb0",
  dataset: "production",
  // useCdn: false, // for static builds
  name: "jyuhq",
  title: "JYUHQ",
  plugins: [structureTool(), markdownSchema()],
  schema: {
    types: schemaTypes,
  },
});
