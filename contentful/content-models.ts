import { z } from 'zod';
import { createContentfulModel } from './create-contentful-model';

const asset = z.object({
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
    title: z.string(),
  }),
});

const section = z.object({
  fields: z.object({
    title: z.string(),
    slug: z.string(),
    type: z.string(),
    caption: z.string(),
    cover: asset,
    images: z.array(asset).optional(),
  }),
  sys: z.object({
    id: z.string(),
  }),
});

export const homepageModel = createContentfulModel(
  'homePage',
  'CaPxFldqNC38EM4QU7Ju5',
  (ctx) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      coverDesktop: asset,
      coverMobile: asset,
      sections: z.array(section),
    })
);

export const blogpostModel = createContentfulModel(
  'blogPost',
  '1cYqcObX5zY3LDNokbA9oD',
  (ctx) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      heading: z.string(),
      caption: z.string(),
      cover: asset,
      rtext: ctx.contentfulFields.richText(),
      blogImages: z.array(asset),
    })
);
