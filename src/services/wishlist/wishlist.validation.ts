import { WishlistStatus } from "@prisma/client";
import { z } from "zod";

import { idParamSchema } from "../../lib/validators";

export const wishlistQuerySchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(100).optional()
  })
});

export const createWishlistSchema = z.object({
  body: z.object({
    productId: z.string().uuid()
  })
});

export const wishlistIdParamSchema = idParamSchema;

export const updateWishlistSchema = idParamSchema.extend({
  body: z.object({
    status: z.nativeEnum(WishlistStatus)
  })
});

export type WishlistQuery = z.infer<typeof wishlistQuerySchema>["query"];
export type CreateWishlistInput = z.infer<typeof createWishlistSchema>["body"];
export type UpdateWishlistInput = z.infer<typeof updateWishlistSchema>["body"];
