import { z } from 'zod';

export const reportSchema = z.object({
  title: z.string(),
  date: z.string().or(z.date()),
  summary: z.string(),
  tags: z.array(z.string()),
  redacted: z.boolean(),
});
export type Report = z.infer<typeof reportSchema>;