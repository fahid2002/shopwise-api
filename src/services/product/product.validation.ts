import { ProductStatus } from "@prisma/client";
import { z } from "zod";

import { idParamSchema } from "../../lib/validators";

const priceSchema = z.coerce.number().positive("Price must be greater than zero");

export const productQuerySchema = z.object({
  query: z.object({
    search: z.string().optional(),
    categoryId: z.string().uuid().optional(),
    status: z.nativeEnum(ProductStatus).optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(100).optional()
  })
});

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().trim().min(2),
    slug: z.string().trim().min(2).optional(),
    description: z.string().trim().min(10),
    price: priceSchema,
    stock: z.coerce.number().int().min(0).default(0),
    imageUrl: z.string().trim().url().optional(),
    status: z.nativeEnum(ProductStatus).optional(),
    categoryId: z.string().uuid()
  })
});

export const updateProductSchema = idParamSchema.extend({
  body: createProductSchema.shape.body.partial().refine(
    (value) => Object.keys(value).length > 0,
    "At least one field is required"
  )
});

export type ProductQuery = z.infer<typeof productQuerySchema>["query"];
export type CreateProductInput = z.infer<typeof createProductSchema>["body"];
export type UpdateProductInput = z.infer<typeof updateProductSchema>["body"];
