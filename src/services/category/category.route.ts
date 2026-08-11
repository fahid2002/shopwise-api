import { UserRole } from "@prisma/client";
import { Router } from "express";

import { asyncHandler } from "../../lib/asyncHandler";
import { getIdParam } from "../../lib/params";
import { sendResponse } from "../../lib/response";
import { idParamSchema, validateRequest } from "../../lib/validators";
import { authenticate, authorize } from "../../middleware/auth";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory
} from "./category.service";
import {
  categoryQuerySchema,
  createCategorySchema,
  updateCategorySchema
} from "./category.validation";

const router = Router();

router.get(
  "/",
  validateRequest(categoryQuerySchema),
  asyncHandler(async (req, res) => {
    const result = await getCategories(req.query);
    sendResponse(res, 200, "Categories retrieved successfully", result.categories, result.meta);
  })
);

router.get(
  "/:id",
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const category = await getCategoryById(getIdParam(req));
    sendResponse(res, 200, "Category retrieved successfully", category);
  })
);

router.post(
  "/",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(createCategorySchema),
  asyncHandler(async (req, res) => {
    const category = await createCategory(req.body);
    sendResponse(res, 201, "Category created successfully", category);
  })
);

router.patch(
  "/:id",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(updateCategorySchema),
  asyncHandler(async (req, res) => {
    const category = await updateCategory(getIdParam(req), req.body);
    sendResponse(res, 200, "Category updated successfully", category);
  })
);

router.delete(
  "/:id",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const category = await deleteCategory(getIdParam(req));
    sendResponse(res, 200, "Category deleted successfully", category);
  })
);

export default router;
