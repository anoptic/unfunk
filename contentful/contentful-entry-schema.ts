import { z } from 'zod';

export const contentfulEntrySchema = z.object({
  fields: z.object({}), // Extend this later
  // metadata: z.object({
  //   tags: z.array(z.any()),
  // }),
  sys: z.object({
    // space: z.object({
    //   sys: z.object({
    //     type: z.string(),
    //     linkType: z.string(),
    //     id: z.string(),
    //   }),
    // }),
    id: z.string(),
    type: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    // environment: z.object({
    //   sys: z.object({
    //     id: z.string(),
    //     type: z.string(),
    //     linkType: z.string(),
    //   }),
    // }),
    // revision: z.number(),
    contentType: z
      .object({
        sys: z.object({
          type: z.string(),
          linkType: z.string(),
          id: z.string(),
        }),
      })
      .optional(),
    // locale: z.string(),
  }),
});
