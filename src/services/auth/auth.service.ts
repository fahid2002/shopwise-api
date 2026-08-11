import bcrypt from "bcrypt";
import { UserStatus, type Prisma } from "@prisma/client";

import { signAccessToken } from "../../lib/auth";
import { AppError } from "../../lib/errors";
import { prisma } from "../../lib/prisma";
import type { LoginInput, RegisterInput } from "./auth.validation";

const safeUserSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  status: true,
  createdAt: true,
  updatedAt: true
} satisfies Prisma.UserSelect;

type SafeUser = Prisma.UserGetPayload<{ select: typeof safeUserSelect }>;

type AuthResult = {
  user: SafeUser;
  token: string;
};

export const registerUser = async (payload: RegisterInput): Promise<AuthResult> => {
  const existingUser = await prisma.user.findUnique({
    where: { email: payload.email }
  });

  if (existingUser) {
    throw new AppError(409, "A user with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 12);

  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword
    },
    select: safeUserSelect
  });

  const token = signAccessToken({
    userId: user.id,
    email: user.email,
    role: user.role
  });

  return { user, token };
};

export const loginUser = async (payload: LoginInput): Promise<AuthResult> => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email }
  });

  if (!user || user.isDeleted) {
    throw new AppError(401, "Invalid email or password");
  }

  if (user.status !== UserStatus.ACTIVE) {
    throw new AppError(403, "This account is blocked");
  }

  const isPasswordValid = await bcrypt.compare(payload.password, user.password);

  if (!isPasswordValid) {
    throw new AppError(401, "Invalid email or password");
  }

  const safeUser: SafeUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };

  const token = signAccessToken({
    userId: user.id,
    email: user.email,
    role: user.role
  });

  return { user: safeUser, token };
};

export const getCurrentUser = async (userId: string): Promise<SafeUser> => {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
      isDeleted: false
    },
    select: safeUserSelect
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  return user;
};
