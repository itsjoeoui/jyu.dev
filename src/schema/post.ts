import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
    // defineField({
    //   type: 'markdown',
    //   name: 'markdown',
    //   title: 'Markdown',
    // }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isDraft",
      type: "boolean",
      title: "Is Draft",
      initialValue: true,
    }),
  ],
});
