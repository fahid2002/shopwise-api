import { UserRole } from "@prisma/client";
import { Router } from "express";

import { asyncHandler } from "../../lib/asyncHandler";
import { getIdParam } from "../../lib/params";
import { sendResponse } from "../../lib/response";
import { idParamSchema, validateRequest } from "../../lib/validators";
import { authenticate, authorize } from "../../middleware/auth";
import {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  updateOrderStatus
} from "./order.service";
import {
  createOrderSchema,
  orderQuerySchema,
  updateOrderStatusSchema
} from "./order.validation";

const router = Router();

router.get(
  "/",
  authenticate,
  validateRequest(orderQuerySchema),
  asyncHandler(async (req, res) => {
    const result = await getOrders(req.user!, req.query);
    sendResponse(res, 200, "Orders retrieved successfully", result.orders, result.meta);
  })
);

router.get(
  "/:id",
  authenticate,
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const order = await getOrderById(getIdParam(req), req.user!);
    sendResponse(res, 200, "Order retrieved successfully", order);
  })
);

router.post(
  "/",
  authenticate,
  validateRequest(createOrderSchema),
  asyncHandler(async (req, res) => {
    const order = await createOrder(req.user?.id ?? "", req.body);
    sendResponse(res, 201, "Order created successfully", order);
  })
);

router.patch(
  "/:id/status",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(updateOrderStatusSchema),
  asyncHandler(async (req, res) => {
    const order = await updateOrderStatus(getIdParam(req), req.body);
    sendResponse(res, 200, "Order status updated successfully", order);
  })
);

router.delete(
  "/:id",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const order = await deleteOrder(getIdParam(req));
    sendResponse(res, 200, "Order deleted successfully", order);
  })
);

export default router;
