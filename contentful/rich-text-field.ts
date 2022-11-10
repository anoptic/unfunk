import { z } from 'zod';
import { RichTextContent } from 'contentful';

export const richTextField = () =>
  z.any().transform((x) => x as RichTextContent);
