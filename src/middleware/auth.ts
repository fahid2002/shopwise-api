import { UserRole, UserStatus } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";

import { verifyAccessToken } from "../lib/auth";
import { AppError } from "../lib/errors";
import { prisma } from "../lib/prisma";

export const authenticate = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      throw new AppError(401, "Authorization token is required");
    }

    const token = authHeader.slice("Bearer ".length);
    const decoded = verifyAccessToken(token);

    const user = await prisma.user.findFirst({
      where: {
        id: decoded.userId,
        isDeleted: false,
        status: UserStatus.ACTIVE
      },
      select: {
        id: true,
        email: true,
        role: true
      }
    });

    if (!user) {
      throw new AppError(401, "User is not active or no longer exists");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export const authorize = (...roles: UserRole[]) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new AppError(401, "Authentication is required"));
      return;
    }

    if (!roles.includes(req.user.role)) {
      next(new AppError(403, "You are not allowed to perform this action"));
      return;
    }

    next();
  };
};
