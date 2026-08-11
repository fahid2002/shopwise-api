import { UserRole } from "@prisma/client";
import { Router } from "express";

import { asyncHandler } from "../../lib/asyncHandler";
import { getIdParam } from "../../lib/params";
import { sendResponse } from "../../lib/response";
import { idParamSchema, validateRequest } from "../../lib/validators";
import { authenticate, authorize } from "../../middleware/auth";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct
} from "./product.service";
import {
  createProductSchema,
  productQuerySchema,
  updateProductSchema
} from "./product.validation";

const router = Router();

router.get(
  "/",
  validateRequest(productQuerySchema),
  asyncHandler(async (req, res) => {
    const result = await getProducts(req.query);
    sendResponse(res, 200, "Products retrieved successfully", result.products, result.meta);
  })
);

router.get(
  "/:id",
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const product = await getProductById(getIdParam(req));
    sendResponse(res, 200, "Product retrieved successfully", product);
  })
);

router.post(
  "/",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(createProductSchema),
  asyncHandler(async (req, res) => {
    const product = await createProduct(req.body);
    sendResponse(res, 201, "Product created successfully", product);
  })
);

router.patch(
  "/:id",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(updateProductSchema),
  asyncHandler(async (req, res) => {
    const product = await updateProduct(getIdParam(req), req.body);
    sendResponse(res, 200, "Product updated successfully", product);
  })
);

router.delete(
  "/:id",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const product = await deleteProduct(getIdParam(req));
    sendResponse(res, 200, "Product deleted successfully", product);
  })
);

export default router;
