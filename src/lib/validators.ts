import type { RequestHandler } from "express";
import { z, type ZodTypeAny } from "zod";

import { AppError } from "./errors";

type ParsedRequest = {
  body?: unknown;
  params?: unknown;
  query?: unknown;
};

export const idParamSchema = z.object({
  params: z.object({
    id: z.string().uuid("A valid UUID id is required")
  })
});

export const validateRequest = (schema: ZodTypeAny): RequestHandler => {
  return (req, _res, next): void => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query
    });

    if (!result.success) {
      next(new AppError(400, "Validation failed", result.error.flatten()));
      return;
    }

    const parsed = result.data as ParsedRequest;

    if (parsed.body !== undefined) {
      req.body = parsed.body;
    }

    if (parsed.params !== undefined) {
      req.params = parsed.params as typeof req.params;
    }

    next();
  };
};
