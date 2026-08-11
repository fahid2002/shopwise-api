import { UserRole, UserStatus } from "@prisma/client";
import { z } from "zod";

import { idParamSchema } from "../../lib/validators";

export const userQuerySchema = z.object({
  query: z.object({
    search: z.string().optional(),
    role: z.nativeEnum(UserRole).optional(),
    status: z.nativeEnum(UserStatus).optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(100).optional()
  })
});

export const updateUserSchema = idParamSchema.extend({
  body: z
    .object({
      name: z.string().trim().min(2).optional(),
      role: z.nativeEnum(UserRole).optional(),
      status: z.nativeEnum(UserStatus).optional()
    })
    .refine((value) => Object.keys(value).length > 0, "At least one field is required")
});

export type UserQuery = z.infer<typeof userQuerySchema>["query"];
export type UpdateUserInput = z.infer<typeof updateUserSchema>["body"];
