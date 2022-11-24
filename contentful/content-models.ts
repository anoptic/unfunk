import { z } from 'zod';
import { createContentfulModel } from './create-contentful-model';

export const asset = z.object({
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

const product = z.object({
  fields: z.object({
    name: z.string(),
    slug: z.string(),
    collection: z.string(),
    description: z.string(),
    sku: z.string(),
    price: z.number().int().positive(),
    image: asset,
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

export const blogpostModel = createContentfulModel('blogPost', '', (ctx) =>
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

export const collectionModel = createContentfulModel('collection', '', (ctx) =>
  z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    product: z.array(product),
    cover: asset,
  })
);

export const allShoesModel = createContentfulModel(
  'allShoes',
  '5dD1hqu4qFzGqhRQbPolcT',
  (ctx) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      cover: asset,
      shoes: z.array(product),
    })
);

export const shoeModel = createContentfulModel('shoes', '', (ctx) =>
  z.object({
    name: z.string(),
    slug: z.string(),
    collection: z.string(),
    description: z.string(),
    sku: z.string(),
    price: z.number().int().positive(),
    image: asset,
  })
);

export type AssetType = z.infer<typeof asset>;
export type ProductType = z.infer<typeof product>;
