import { UserRole } from "@prisma/client";
import { Router } from "express";

import { asyncHandler } from "../../lib/asyncHandler";
import { AppError } from "../../lib/errors";
import { getIdParam } from "../../lib/params";
import { sendResponse } from "../../lib/response";
import { idParamSchema, validateRequest } from "../../lib/validators";
import { authenticate, authorize } from "../../middleware/auth";
import { deleteUser, getUserById, getUsers, updateUser } from "./user.service";
import { updateUserSchema, userQuerySchema } from "./user.validation";

const router = Router();

router.get(
  "/",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(userQuerySchema),
  asyncHandler(async (req, res) => {
    const result = await getUsers(req.query);
    sendResponse(res, 200, "Users retrieved successfully", result.users, result.meta);
  })
);

router.get(
  "/:id",
  authenticate,
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const id = getIdParam(req);
    const isSelf = req.user?.id === id;
    const isAdmin = req.user?.role === UserRole.ADMIN;

    if (!isSelf && !isAdmin) {
      throw new AppError(403, "You can only view your own profile");
    }

    const user = await getUserById(id);
    sendResponse(res, 200, "User retrieved successfully", user);
  })
);

router.patch(
  "/:id",
  authenticate,
  validateRequest(updateUserSchema),
  asyncHandler(async (req, res) => {
    const id = getIdParam(req);
    const isSelf = req.user?.id === id;
    const isAdmin = req.user?.role === UserRole.ADMIN;

    if (!isSelf && !isAdmin) {
      throw new AppError(403, "You can only update your own profile");
    }

    if (!isAdmin && ("role" in req.body || "status" in req.body)) {
      throw new AppError(403, "Only admins can update role or status");
    }

    const user = await updateUser(id, req.body);
    sendResponse(res, 200, "User updated successfully", user);
  })
);

router.delete(
  "/:id",
  authenticate,
  authorize(UserRole.ADMIN),
  validateRequest(idParamSchema),
  asyncHandler(async (req, res) => {
    const user = await deleteUser(getIdParam(req));
    sendResponse(res, 200, "User deleted successfully", user);
  })
);

export default router;
