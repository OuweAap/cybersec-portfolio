import { defineCollection, z } from 'astro:content';

const reports = defineCollection({
  name: 'reports',
  schema: {
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    redacted: z.boolean(),
  },
});

export const collections = {
  reports,
};