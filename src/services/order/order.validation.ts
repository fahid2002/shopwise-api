import { OrderStatus } from "@prisma/client";
import { z } from "zod";

import { idParamSchema } from "../../lib/validators";

export const orderQuerySchema = z.object({
  query: z.object({
    userId: z.string().uuid().optional(),
    status: z.nativeEnum(OrderStatus).optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(100).optional()
  })
});

export const createOrderSchema = z.object({
  body: z.object({
    shippingAddress: z.string().trim().min(8),
    phone: z.string().trim().min(6),
    notes: z.string().trim().optional(),
    items: z
      .array(
        z.object({
          productId: z.string().uuid(),
          quantity: z.coerce.number().int().positive()
        })
      )
      .min(1, "At least one product is required")
  })
});

export const updateOrderStatusSchema = idParamSchema.extend({
  body: z.object({
    status: z.nativeEnum(OrderStatus)
  })
});

export type OrderQuery = z.infer<typeof orderQuerySchema>["query"];
export type CreateOrderInput = z.infer<typeof createOrderSchema>["body"];
export type UpdateOrderStatusInput = z.infer<typeof updateOrderStatusSchema>["body"];
