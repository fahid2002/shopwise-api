import { Router } from "express";

import { asyncHandler } from "../../lib/asyncHandler";
import { getIdParam } from "../../lib/params";
import { sendResponse } from "../../lib/response";
import { idParamSchema, validateRequest } from "../../lib/validators";
import { authenticate } from "../../middleware/auth";
import {
  createReview,
  deleteReview,
  getReviewById,
  getReviews,
  updateReview
} from "./review.service";
import {
  createReviewSchema,
  reviewQuerySchema,
  updateReviewSchema
} from "./review.validation";

const router = Router();

router.get(
  "/",
  validateRequest(reviewQuerySchema),
  asyncHandler(async (req, res) => {
    const result = await getReviews(req.query);
    sendResponse(res, 200, "Reviews retrieved successfully", result.reviews, result.meta);
  })
);

router.get(
  "/:id",
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const review = await getReviewById(getIdParam(req));
    sendResponse(res, 200, "Review retrieved successfully", review);
  })
);

router.post(
  "/",
  authenticate,
  validateRequest(createReviewSchema),
  asyncHandler(async (req, res) => {
    const review = await createReview(req.user?.id ?? "", req.body);
    sendResponse(res, 201, "Review created successfully", review);
  })
);

router.patch(
  "/:id",
  authenticate,
  validateRequest(updateReviewSchema),
  asyncHandler(async (req, res) => {
    const review = await updateReview(getIdParam(req), req.user!, req.body);
    sendResponse(res, 200, "Review updated successfully", review);
  })
);

router.delete(
  "/:id",
  authenticate,
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const review = await deleteReview(getIdParam(req), req.user!);
    sendResponse(res, 200, "Review deleted successfully", review);
  })
);

export default router;
