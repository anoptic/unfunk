import { asset } from 'contentful/content-models';
import { richTextField } from 'contentful/rich-text-field';
import { z } from 'zod';

export const blogPostData = z.object({
  fields: z.object({
    title: z.string(),
    slug: z.string(),
    heading: z.string(),
    caption: z.string(),
    cover: asset,
    rtext: richTextField(),
    blogImages: z.array(asset),
  }),
  sys: z.object({
    id: z.string(),
    type: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    contentType: z
      .object({
        sys: z.object({
          type: z.string(),
          linkType: z.string(),
          id: z.string(),
        }),
      })
      .optional(),
  }),
});

export type BlogPost = z.infer<typeof blogPostData>;
