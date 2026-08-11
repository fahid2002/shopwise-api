import { CategoryStatus, type Prisma } from "@prisma/client";

import { AppError } from "../../lib/errors";
import { getPagination } from "../../lib/pagination";
import { prisma } from "../../lib/prisma";
import { toSlug } from "../../lib/slug";
import type {
  CategoryQuery,
  CreateCategoryInput,
  UpdateCategoryInput
} from "./category.validation";

const categoryInclude = {
  _count: {
    select: {
      products: true
    }
  }
} satisfies Prisma.CategoryInclude;

export const createCategory = async (payload: CreateCategoryInput) => {
  return prisma.category.create({
    data: {
      name: payload.name,
      slug: payload.slug ? toSlug(payload.slug) : toSlug(payload.name),
      description: payload.description,
      status: payload.status ?? CategoryStatus.ACTIVE
    },
    include: categoryInclude
  });
};

export const getCategories = async (query: CategoryQuery) => {
  const pagination = getPagination(query);
  const where: Prisma.CategoryWhereInput = {
    isDeleted: false,
    ...(query.status ? { status: query.status } : {}),
    ...(query.search
      ? {
          OR: [
            { name: { contains: query.search, mode: "insensitive" } },
            { slug: { contains: query.search, mode: "insensitive" } }
          ]
        }
      : {})
  };

  const [categories, total] = await prisma.$transaction([
    prisma.category.findMany({
      where,
      include: categoryInclude,
      orderBy: { createdAt: "desc" },
      skip: pagination.skip,
      take: pagination.take
    }),
    prisma.category.count({ where })
  ]);

  return {
    categories,
    meta: {
      page: pagination.page,
      limit: pagination.limit,
      total
    }
  };
};

export const getCategoryById = async (id: string) => {
  const category = await prisma.category.findFirst({
    where: { id, isDeleted: false },
    include: categoryInclude
  });

  if (!category) {
    throw new AppError(404, "Category not found");
  }

  return category;
};

export const updateCategory = async (id: string, payload: UpdateCategoryInput) => {
  await getCategoryById(id);

  return prisma.category.update({
    where: { id },
    data: {
      ...payload,
      ...(payload.slug ? { slug: toSlug(payload.slug) } : {})
    },
    include: categoryInclude
  });
};

export const deleteCategory = async (id: string) => {
  await getCategoryById(id);

  return prisma.category.update({
    where: { id },
    data: { isDeleted: true },
    include: categoryInclude
  });
};
