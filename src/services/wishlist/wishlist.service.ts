import { ProductStatus, WishlistStatus, type Prisma } from "@prisma/client";

import { AppError } from "../../lib/errors";
import { getPagination } from "../../lib/pagination";
import { prisma } from "../../lib/prisma";
import type { CreateWishlistInput, WishlistQuery } from "./wishlist.validation";

const wishlistInclude = {
  product: {
    include: {
      category: {
        select: {
          id: true,
          name: true,
          slug: true
        }
      }
    }
  }
} satisfies Prisma.WishlistInclude;

const ensureActiveProduct = async (productId: string): Promise<void> => {
  const product = await prisma.product.findFirst({
    where: {
      id: productId,
      isDeleted: false,
      status: ProductStatus.ACTIVE
    },
    select: { id: true }
  });

  if (!product) {
    throw new AppError(404, "Active product not found");
  }
};

export const addWishlistItem = async (userId: string, payload: CreateWishlistInput) => {
  await ensureActiveProduct(payload.productId);

  const existing = await prisma.wishlist.findUnique({
    where: {
      userId_productId: {
        userId,
        productId: payload.productId
      }
    }
  });

  if (existing) {
    return prisma.wishlist.update({
      where: { id: existing.id },
      data: {
        status: WishlistStatus.ACTIVE,
        isDeleted: false
      },
      include: wishlistInclude
    });
  }

  return prisma.wishlist.create({
    data: {
      userId,
      productId: payload.productId
    },
    include: wishlistInclude
  });
};

export const getWishlistItems = async (userId: string, query: WishlistQuery) => {
  const pagination = getPagination(query);
  const where: Prisma.WishlistWhereInput = {
    userId,
    isDeleted: false,
    status: WishlistStatus.ACTIVE
  };

  const [items, total] = await prisma.$transaction([
    prisma.wishlist.findMany({
      where,
      include: wishlistInclude,
      orderBy: { createdAt: "desc" },
      skip: pagination.skip,
      take: pagination.take
    }),
    prisma.wishlist.count({ where })
  ]);

  return {
    items,
    meta: {
      page: pagination.page,
      limit: pagination.limit,
      total
    }
  };
};

export const removeWishlistItem = async (id: string, userId: string) => {
  const item = await prisma.wishlist.findFirst({
    where: {
      id,
      userId,
      isDeleted: false
    }
  });

  if (!item) {
    throw new AppError(404, "Wishlist item not found");
  }

  return prisma.wishlist.update({
    where: { id },
    data: {
      status: WishlistStatus.REMOVED,
      isDeleted: true
    },
    include: wishlistInclude
  });
};
