import { Router } from "express";

import { asyncHandler } from "../lib/asyncHandler";
import { prisma } from "../lib/prisma";
import { sendResponse } from "../lib/response";
import authRoutes from "../services/auth/auth.route";
import categoryRoutes from "../services/category/category.route";
import orderRoutes from "../services/order/order.route";
import productRoutes from "../services/product/product.route";
import reviewRoutes from "../services/review/review.route";
import userRoutes from "../services/user/user.route";
import wishlistRoutes from "../services/wishlist/wishlist.route";

const router = Router();

const apiDocumentation = [
  {
    module: "Auth",
    endpoints: [
      "POST /api/auth/register",
      "POST /api/auth/login",
      "GET /api/auth/me"
    ]
  },
  {
    module: "Users",
    endpoints: [
      "GET /api/users",
      "GET /api/users/:id",
      "PATCH /api/users/:id",
      "DELETE /api/users/:id"
    ]
  },
  {
    module: "Categories",
    endpoints: [
      "POST /api/categories",
      "GET /api/categories",
      "GET /api/categories/:id",
      "PATCH /api/categories/:id",
      "DELETE /api/categories/:id"
    ]
  },
  {
    module: "Products",
    endpoints: [
      "POST /api/products",
      "GET /api/products",
      "GET /api/products/:id",
      "PATCH /api/products/:id",
      "DELETE /api/products/:id"
    ]
  },
  {
    module: "Reviews",
    endpoints: [
      "POST /api/reviews",
      "GET /api/reviews",
      "GET /api/reviews/:id",
      "PATCH /api/reviews/:id",
      "DELETE /api/reviews/:id"
    ]
  },
  {
    module: "Orders",
    endpoints: [
      "POST /api/orders",
      "GET /api/orders",
      "GET /api/orders/:id",
      "PATCH /api/orders/:id/status",
      "DELETE /api/orders/:id"
    ]
  },
  {
    module: "Wishlists",
    endpoints: [
      "POST /api/wishlists",
      "GET /api/wishlists",
      "GET /api/wishlists/:id",
      "PATCH /api/wishlists/:id",
      "DELETE /api/wishlists/:id"
    ]
  }
];

router.get(
  "/health",
  asyncHandler(async (_req, res) => {
    let database = "not_configured";

    if (process.env.DATABASE_URL) {
      try {
        await prisma.$queryRaw`SELECT 1`;
        database = "connected";
      } catch {
        database = "unavailable";
      }
    }

    sendResponse(res, 200, "Shopwise API is running", {
      service: "shopwise-api",
      database,
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    });
  })
);

router.get("/docs", (_req, res) => {
  sendResponse(res, 200, "API documentation retrieved successfully", apiDocumentation);
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/reviews", reviewRoutes);
router.use("/orders", orderRoutes);
router.use("/wishlists", wishlistRoutes);

export default router;
