import { Router } from "express";

import { asyncHandler } from "../../lib/asyncHandler";
import { sendResponse } from "../../lib/response";
import { validateRequest } from "../../lib/validators";
import { authenticate } from "../../middleware/auth";
import { getCurrentUser, loginUser, registerUser } from "./auth.service";
import { loginSchema, registerSchema } from "./auth.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(registerSchema),
  asyncHandler(async (req, res) => {
    const result = await registerUser(req.body);
    sendResponse(res, 201, "User registered successfully", result);
  })
);

router.post(
  "/login",
  validateRequest(loginSchema),
  asyncHandler(async (req, res) => {
    const result = await loginUser(req.body);
    sendResponse(res, 200, "Login successful", result);
  })
);

router.get(
  "/me",
  authenticate,
  asyncHandler(async (req, res) => {
    const user = await getCurrentUser(req.user?.id ?? "");
    sendResponse(res, 200, "Current user retrieved successfully", user);
  })
);

export default router;
