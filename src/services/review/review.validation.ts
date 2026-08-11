import { ReviewStatus } from "@prisma/client";
import { z } from "zod";

import { idParamSchema } from "../../lib/validators";

export const reviewQuerySchema = z.object({
  query: z.object({
    productId: z.string().uuid().optional(),
    userId: z.string().uuid().optional(),
    status: z.nativeEnum(ReviewStatus).optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(100).optional()
  })
});

export const createReviewSchema = z.object({
  body: z.object({
    productId: z.string().uuid(),
    rating: z.coerce.number().int().min(1).max(5),
    comment: z.string().trim().min(3).optional()
  })
});

export const updateReviewSchema = idParamSchema.extend({
  body: z
    .object({
      rating: z.coerce.number().int().min(1).max(5).optional(),
      comment: z.string().trim().min(3).optional(),
      status: z.nativeEnum(ReviewStatus).optional()
    })
    .refine((value) => Object.keys(value).length > 0, "At least one field is required")
});

export type ReviewQuery = z.infer<typeof reviewQuerySchema>["query"];
export type CreateReviewInput = z.infer<typeof createReviewSchema>["body"];
export type UpdateReviewInput = z.infer<typeof updateReviewSchema>["body"];
