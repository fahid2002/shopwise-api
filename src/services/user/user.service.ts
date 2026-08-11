import { type Prisma } from "@prisma/client";

import { AppError } from "../../lib/errors";
import { getPagination } from "../../lib/pagination";
import { prisma } from "../../lib/prisma";
import type { UpdateUserInput, UserQuery } from "./user.validation";

const safeUserSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  status: true,
  isDeleted: true,
  createdAt: true,
  updatedAt: true
} satisfies Prisma.UserSelect;

export const getUsers = async (query: UserQuery) => {
  const pagination = getPagination(query);
  const where: Prisma.UserWhereInput = {
    isDeleted: false,
    ...(query.role ? { role: query.role } : {}),
    ...(query.status ? { status: query.status } : {}),
    ...(query.search
      ? {
          OR: [
            { name: { contains: query.search, mode: "insensitive" } },
            { email: { contains: query.search, mode: "insensitive" } }
          ]
        }
      : {})
  };

  const [users, total] = await prisma.$transaction([
    prisma.user.findMany({
      where,
      select: safeUserSelect,
      orderBy: { createdAt: "desc" },
      skip: pagination.skip,
      take: pagination.take
    }),
    prisma.user.count({ where })
  ]);

  return {
    users,
    meta: {
      page: pagination.page,
      limit: pagination.limit,
      total
    }
  };
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: { id, isDeleted: false },
    select: safeUserSelect
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  return user;
};

export const updateUser = async (id: string, payload: UpdateUserInput) => {
  await getUserById(id);

  return prisma.user.update({
    where: { id },
    data: payload,
    select: safeUserSelect
  });
};

export const deleteUser = async (id: string) => {
  await getUserById(id);

  return prisma.user.update({
    where: { id },
    data: { isDeleted: true },
    select: safeUserSelect
  });
};
