import { z } from 'zod';
import { createContentfulModel } from './create-contentful-model';

const fileObj = z.object({
  fields: z.object({
    file: z.object({
      contentType: z.string(),
      details: z.object({
        image: z.object({
          height: z.number().int().positive(),
          width: z.number().int().positive(),
        }),
        size: z.number().int().positive(),
      }),
      fileName: z.string(),
      url: z.string(),
    }),
  }),
});

export const homepageModel = createContentfulModel(
  'homePage',
  'CaPxFldqNC38EM4QU7Ju5',
  (ctx) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      // coverDesktop: z.object({
      //   fileObj,
      // }),
      // coverMobile: z.object({
      //   fileObj,
      // }),
    })
);
