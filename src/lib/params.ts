import type { Request } from "express";

import { AppError } from "./errors";

export const getIdParam = (req: Request): string => {
  const id = req.params.id;

  if (typeof id !== "string") {
    throw new AppError(400, "A valid id parameter is required");
  }

  return id;
};
