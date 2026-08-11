import jwt, { type SignOptions } from "jsonwebtoken";
import type { UserRole } from "@prisma/client";

import { AppError } from "./errors";

type TokenPayload = {
  userId: string;
  email: string;
  role: UserRole;
};

type DecodedToken = TokenPayload & jwt.JwtPayload;

const getJwtSecret = (): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new AppError(500, "JWT_SECRET is not configured");
  }

  return secret;
};

const isDecodedToken = (payload: string | jwt.JwtPayload): payload is DecodedToken => {
  return (
    typeof payload !== "string" &&
    typeof payload.userId === "string" &&
    typeof payload.email === "string" &&
    typeof payload.role === "string"
  );
};

export const signAccessToken = (payload: TokenPayload): string => {
  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN ?? "7d") as SignOptions["expiresIn"]
  };

  return jwt.sign(payload, getJwtSecret(), options);
};

export const verifyAccessToken = (token: string): TokenPayload => {
  const decoded = jwt.verify(token, getJwtSecret());

  if (!isDecodedToken(decoded)) {
    throw new AppError(401, "Invalid token payload");
  }

  return {
    userId: decoded.userId,
    email: decoded.email,
    role: decoded.role
  };
};
