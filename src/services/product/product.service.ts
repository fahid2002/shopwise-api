import { CategoryStatus, ProductStatus, type Prisma } from "@prisma/client";

import { AppError } from "../../lib/errors";
import { getPagination } from "../../lib/pagination";
import { prisma } from "../../lib/prisma";
import { toSlug } from "../../lib/slug";
import type {
  CreateProductInput,
  ProductQuery,
  UpdateProductInput
} from "./product.validation";

const productInclude = {
  category: {
    select: {
      id: true,
      name: true,
      slug: true
    }
  },
  _count: {
    select: {
      reviews: true,
      wishlists: true
    }
  }
} satisfies Prisma.ProductInclude;

const ensureActiveCategory = async (categoryId: string): Promise<void> => {
  const category = await prisma.category.findFirst({
    where: {
      id: categoryId,
      isDeleted: false,
      status: CategoryStatus.ACTIVE
    },
    select: { id: true }
  });

  if (!category) {
    throw new AppError(404, "Active category not found");
  }
};

export const createProduct = async (payload: CreateProductInput) => {
  await ensureActiveCategory(payload.categoryId);

  return prisma.product.create({
    data: {
      name: payload.name,
      slug: payload.slug ? toSlug(payload.slug) : toSlug(payload.name),
      description: payload.description,
      price: payload.price,
      stock: payload.stock,
      imageUrl: payload.imageUrl,
      status: payload.status ?? ProductStatus.DRAFT,
      categoryId: payload.categoryId
    },
    include: productInclude
  });
};

export const getProducts = async (query: ProductQuery) => {
  const pagination = getPagination(query);
  const where: Prisma.ProductWhereInput = {
    isDeleted: false,
    ...(query.categoryId ? { categoryId: query.categoryId } : {}),
    ...(query.status ? { status: query.status } : {}),
    ...(query.search
      ? {
          OR: [
            { name: { contains: query.search, mode: "insensitive" } },
            { slug: { contains: query.search, mode: "insensitive" } },
            { description: { contains: query.search, mode: "insensitive" } }
          ]
        }
      : {})
  };

  const [products, total] = await prisma.$transaction([
    prisma.product.findMany({
      where,
      include: productInclude,
      orderBy: { createdAt: "desc" },
      skip: pagination.skip,
      take: pagination.take
    }),
    prisma.product.count({ where })
  ]);

  return {
    products,
    meta: {
      page: pagination.page,
      limit: pagination.limit,
      total
    }
  };
};

export const getProductById = async (id: string) => {
  const product = await prisma.product.findFirst({
    where: { id, isDeleted: false },
    include: {
      ...productInclude,
      reviews: {
        where: { isDeleted: false },
        include: {
          user: {
            select: {
              id: true,
              name: true
            }
          }
        },
        orderBy: { createdAt: "desc" }
      }
    }
  });

  if (!product) {
    throw new AppError(404, "Product not found");
  }

  return product;
};

export const updateProduct = async (id: string, payload: UpdateProductInput) => {
  await getProductById(id);

  if (payload.categoryId) {
    await ensureActiveCategory(payload.categoryId);
  }

  return prisma.product.update({
    where: { id },
    data: {
      ...payload,
      ...(payload.slug ? { slug: toSlug(payload.slug) } : {})
    },
    include: productInclude
  });
};

export const deleteProduct = async (id: string) => {
  await getProductById(id);

  return prisma.product.update({
    where: { id },
    data: { isDeleted: true },
    include: productInclude
  });
};
