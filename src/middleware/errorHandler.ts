import { Prisma } from "@prisma/client";
import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

import { AppError } from "../lib/errors";

type ErrorResponse = {
  success: false;
  message: string;
  errors?: unknown;
};

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next): void => {
  if (error instanceof AppError) {
    const payload: ErrorResponse = {
      success: false,
      message: error.message,
      ...(error.details === undefined ? {} : { errors: error.details })
    };

    res.status(error.statusCode).json(payload);
    return;
  }

  if (error instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.flatten()
    });
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      res.status(409).json({
        success: false,
        message: "A record with this unique value already exists",
        errors: error.meta
      });
      return;
    }

    if (error.code === "P2025") {
      res.status(404).json({
        success: false,
        message: "Requested record was not found"
      });
      return;
    }
  }

  const message = error instanceof Error ? error.message : "Unexpected server error";

  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === "production" ? "Internal server error" : message
  });
};
