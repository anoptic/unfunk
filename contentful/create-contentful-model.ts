import { z } from 'zod';
import { contentfulClient } from './client';
import { contentfulEntrySchema } from './contentful-entry-schema';
import { richTextField } from './rich-text-field';

export type CreateContentfulModelContext = {
  contentfulFields: {
    richText: typeof richTextField;
  };
};

export type FieldsSchemaCreator<TDataIn extends {}, TDataOut> = (
  context: CreateContentfulModelContext
) => z.Schema<TDataOut, z.ZodTypeDef, TDataIn>;

export function createContentfulModel<TDataIn extends {}, TDataOut>(
  contentType: string,
  id: string,
  fieldsSchemaCreator: FieldsSchemaCreator<TDataIn, TDataOut>
) {
  // Set up an empty context. We'll return to this in the next article.
  const context: CreateContentfulModelContext = {
    contentfulFields: {
      richText: richTextField,
    },
  };

  // Run the fieldsSchemaCreator with the context to get the type of
  // the content's fields.
  const fieldsSchema = fieldsSchemaCreator(context);

  // Using the object entry schema we defined earlier, extend its fields
  // property to define this object type's full entry schema
  const entrySchema = contentfulEntrySchema.extend({ fields: fieldsSchema });

  const getAll = async () => {
    // Fetch all items of current content type
    const res = await contentfulClient.getEntries({
      content_type: contentType,
    });

    // Parse and validate all items using zod
    const parsed = z.array(entrySchema).safeParse(res.items);

    // Handle failures
    if (!parsed.success) {
      console.error(parsed.error);
      return [];
    }

    // Return validated data with correct types
    return parsed.data;
  };

  // const getPaths = async () => {
  //   const res = await contentfulClient.getEntries({
  //     content_type: contentType,
  //   });

  //   const paths = res.items.map((item: any) => {
  //     return {
  //       params: { slug: item.fields.slug },
  //     };
  //   });

  //   return {
  //     paths,
  //     fallback: false,
  //   };
  // };

  // const getProps = async ({ params }: any) => {
  //   const { items } = await contentfulClient.getEntries({
  //     content_type: contentType,
  //     'fields.slug': params.slug,
  //   });

  //   return {
  //     props: {
  //       blogPost: items[0],
  //     },
  //   };
  // };

  const getId = async () => {
    const response = await contentfulClient.getEntry(id);

    const parsed = entrySchema.parse(response);

    return parsed;
  };

  return {
    fieldsSchema,
    entrySchema,
    getAll,
    // getPaths,
    // getProps,
    getId,
  };
}
