import { defineDb, defineTable, column } from "astro:db";

const Like = defineTable({
  columns: {
    date: column.date(),
    fingerprint: column.text(),
    page: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Like },
});
