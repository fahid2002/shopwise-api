import { Router } from "express";

import { asyncHandler } from "../../lib/asyncHandler";
import { getIdParam } from "../../lib/params";
import { sendResponse } from "../../lib/response";
import { validateRequest } from "../../lib/validators";
import { authenticate } from "../../middleware/auth";
import {
  addWishlistItem,
  getWishlistItems,
  removeWishlistItem
} from "./wishlist.service";
import {
  createWishlistSchema,
  wishlistIdParamSchema,
  wishlistQuerySchema
} from "./wishlist.validation";

const router = Router();

router.get(
  "/",
  authenticate,
  validateRequest(wishlistQuerySchema),
  asyncHandler(async (req, res) => {
    const result = await getWishlistItems(req.user?.id ?? "", req.query);
    sendResponse(res, 200, "Wishlist retrieved successfully", result.items, result.meta);
  })
);

router.post(
  "/",
  authenticate,
  validateRequest(createWishlistSchema),
  asyncHandler(async (req, res) => {
    const item = await addWishlistItem(req.user?.id ?? "", req.body);
    sendResponse(res, 201, "Product added to wishlist successfully", item);
  })
);

router.delete(
  "/:id",
  authenticate,
  validateRequest(wishlistIdParamSchema),
  asyncHandler(async (req, res) => {
    const item = await removeWishlistItem(getIdParam(req), req.user?.id ?? "");
    sendResponse(res, 200, "Wishlist item removed successfully", item);
  })
);

export default router;
