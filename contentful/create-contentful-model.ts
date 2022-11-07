import { z } from 'zod';
import { contentfulClient } from './client';
import { contentfulEntrySchema } from './contentful-entry-schema';

export type CreateContentfulModelContext = {};

export type FieldsSchemaCreator<TDataIn extends {}, TDataOut> = (
  context: CreateContentfulModelContext
) => z.Schema<TDataOut, z.ZodTypeDef, TDataIn>;

export function createContentfulModel<TDataIn extends {}, TDataOut>(
  contentType: string,
  id: string,
  fieldsSchemaCreator: FieldsSchemaCreator<TDataIn, TDataOut>
) {
  // Set up an empty context. We'll return to this in the next article.
  const context: CreateContentfulModelContext = {};

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

  const getId = async () => {
    const response = await contentfulClient.getEntry(id);

    const parsed = entrySchema.parse(response);

    return parsed;
  };

  return {
    fieldsSchema,
    entrySchema,
    getAll,
    getId,
  };
}
