import { ProductStatus, UserRole, type Prisma } from "@prisma/client";

import { AppError } from "../../lib/errors";
import { getPagination } from "../../lib/pagination";
import { prisma } from "../../lib/prisma";
import type {
  CreateReviewInput,
  ReviewQuery,
  UpdateReviewInput
} from "./review.validation";

type Actor = {
  id: string;
  role: UserRole;
};

const reviewInclude = {
  user: {
    select: {
      id: true,
      name: true
    }
  },
  product: {
    select: {
      id: true,
      name: true,
      slug: true
    }
  }
} satisfies Prisma.ReviewInclude;

const ensureReviewableProduct = async (productId: string): Promise<void> => {
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

export const createReview = async (userId: string, payload: CreateReviewInput) => {
  await ensureReviewableProduct(payload.productId);

  return prisma.review.create({
    data: {
      userId,
      productId: payload.productId,
      rating: payload.rating,
      comment: payload.comment
    },
    include: reviewInclude
  });
};

export const getReviews = async (query: ReviewQuery) => {
  const pagination = getPagination(query);
  const where: Prisma.ReviewWhereInput = {
    isDeleted: false,
    ...(query.productId ? { productId: query.productId } : {}),
    ...(query.userId ? { userId: query.userId } : {}),
    ...(query.status ? { status: query.status } : {})
  };

  const [reviews, total] = await prisma.$transaction([
    prisma.review.findMany({
      where,
      include: reviewInclude,
      orderBy: { createdAt: "desc" },
      skip: pagination.skip,
      take: pagination.take
    }),
    prisma.review.count({ where })
  ]);

  return {
    reviews,
    meta: {
      page: pagination.page,
      limit: pagination.limit,
      total
    }
  };
};

export const getReviewById = async (id: string) => {
  const review = await prisma.review.findFirst({
    where: { id, isDeleted: false },
    include: reviewInclude
  });

  if (!review) {
    throw new AppError(404, "Review not found");
  }

  return review;
};

export const updateReview = async (
  id: string,
  actor: Actor,
  payload: UpdateReviewInput
) => {
  const review = await getReviewById(id);
  const isOwner = review.userId === actor.id;
  const isAdmin = actor.role === UserRole.ADMIN;

  if (!isOwner && !isAdmin) {
    throw new AppError(403, "You can only update your own review");
  }

  if (!isAdmin && "status" in payload) {
    throw new AppError(403, "Only admins can update review status");
  }

  return prisma.review.update({
    where: { id },
    data: payload,
    include: reviewInclude
  });
};

export const deleteReview = async (id: string, actor: Actor) => {
  const review = await getReviewById(id);
  const isOwner = review.userId === actor.id;
  const isAdmin = actor.role === UserRole.ADMIN;

  if (!isOwner && !isAdmin) {
    throw new AppError(403, "You can only delete your own review");
  }

  return prisma.review.update({
    where: { id },
    data: { isDeleted: true },
    include: reviewInclude
  });
};
