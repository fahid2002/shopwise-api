import { CategoryStatus } from "@prisma/client";
import { z } from "zod";

import { idParamSchema } from "../../lib/validators";

export const categoryQuerySchema = z.object({
  query: z.object({
    search: z.string().optional(),
    status: z.nativeEnum(CategoryStatus).optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(100).optional()
  })
});

export const createCategorySchema = z.object({
  body: z.object({
    name: z.string().trim().min(2),
    slug: z.string().trim().min(2).optional(),
    description: z.string().trim().optional(),
    status: z.nativeEnum(CategoryStatus).optional()
  })
});

export const updateCategorySchema = idParamSchema.extend({
  body: createCategorySchema.shape.body.partial().refine(
    (value) => Object.keys(value).length > 0,
    "At least one field is required"
  )
});

export type CategoryQuery = z.infer<typeof categoryQuerySchema>["query"];
export type CreateCategoryInput = z.infer<typeof createCategorySchema>["body"];
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>["body"];
