import { ProductStatus, UserRole, type Prisma } from "@prisma/client";

import { AppError } from "../../lib/errors";
import { getPagination } from "../../lib/pagination";
import { prisma } from "../../lib/prisma";
import type {
  CreateOrderInput,
  OrderQuery,
  UpdateOrderStatusInput
} from "./order.validation";

type Actor = {
  id: string;
  role: UserRole;
};

const orderInclude = {
  user: {
    select: {
      id: true,
      name: true,
      email: true
    }
  },
  items: {
    where: { isDeleted: false },
    include: {
      product: {
        select: {
          id: true,
          name: true,
          slug: true,
          price: true
        }
      }
    }
  }
} satisfies Prisma.OrderInclude;

const combineItems = (items: CreateOrderInput["items"]): CreateOrderInput["items"] => {
  const quantityByProductId = new Map<string, number>();

  for (const item of items) {
    quantityByProductId.set(
      item.productId,
      (quantityByProductId.get(item.productId) ?? 0) + item.quantity
    );
  }

  return Array.from(quantityByProductId.entries()).map(([productId, quantity]) => ({
    productId,
    quantity
  }));
};

export const createOrder = async (userId: string, payload: CreateOrderInput) => {
  const items = combineItems(payload.items);
  const productIds = items.map((item) => item.productId);

  return prisma.$transaction(async (tx) => {
    const products = await tx.product.findMany({
      where: {
        id: { in: productIds },
        isDeleted: false,
        status: ProductStatus.ACTIVE
      }
    });

    if (products.length !== productIds.length) {
      throw new AppError(404, "One or more active products were not found");
    }

    const productsById = new Map(products.map((product) => [product.id, product]));

    for (const item of items) {
      const product = productsById.get(item.productId);

      if (!product) {
        throw new AppError(404, "Product not found");
      }

      if (product.stock < item.quantity) {
        throw new AppError(400, `${product.name} has only ${product.stock} items in stock`);
      }
    }

    const totalAmount = items.reduce((total, item) => {
      const product = productsById.get(item.productId);
      return total + Number(product?.price ?? 0) * item.quantity;
    }, 0);

    const order = await tx.order.create({
      data: {
        userId,
        shippingAddress: payload.shippingAddress,
        phone: payload.phone,
        notes: payload.notes,
        totalAmount,
        items: {
          create: items.map((item) => {
            const product = productsById.get(item.productId);

            if (!product) {
              throw new AppError(404, "Product not found");
            }

            return {
              productId: product.id,
              quantity: item.quantity,
              price: product.price
            };
          })
        }
      },
      include: orderInclude
    });

    await Promise.all(
      items.map((item) =>
        tx.product.update({
          where: { id: item.productId },
          data: {
            stock: {
              decrement: item.quantity
            }
          }
        })
      )
    );

    return order;
  });
};

export const getOrders = async (actor: Actor, query: OrderQuery) => {
  const pagination = getPagination(query);
  const where: Prisma.OrderWhereInput = {
    isDeleted: false,
    ...(actor.role === UserRole.ADMIN && query.userId ? { userId: query.userId } : {}),
    ...(actor.role !== UserRole.ADMIN ? { userId: actor.id } : {}),
    ...(query.status ? { status: query.status } : {})
  };

  const [orders, total] = await prisma.$transaction([
    prisma.order.findMany({
      where,
      include: orderInclude,
      orderBy: { createdAt: "desc" },
      skip: pagination.skip,
      take: pagination.take
    }),
    prisma.order.count({ where })
  ]);

  return {
    orders,
    meta: {
      page: pagination.page,
      limit: pagination.limit,
      total
    }
  };
};

export const getOrderById = async (id: string, actor: Actor) => {
  const order = await prisma.order.findFirst({
    where: { id, isDeleted: false },
    include: orderInclude
  });

  if (!order) {
    throw new AppError(404, "Order not found");
  }

  if (actor.role !== UserRole.ADMIN && order.userId !== actor.id) {
    throw new AppError(403, "You can only view your own order");
  }

  return order;
};

export const updateOrderStatus = async (
  id: string,
  payload: UpdateOrderStatusInput
) => {
  const order = await prisma.order.findFirst({
    where: { id, isDeleted: false },
    select: { id: true }
  });

  if (!order) {
    throw new AppError(404, "Order not found");
  }

  return prisma.order.update({
    where: { id },
    data: { status: payload.status },
    include: orderInclude
  });
};

export const deleteOrder = async (id: string) => {
  const order = await prisma.order.findFirst({
    where: { id, isDeleted: false },
    select: { id: true }
  });

  if (!order) {
    throw new AppError(404, "Order not found");
  }

  return prisma.$transaction(async (tx) => {
    await tx.orderItem.updateMany({
      where: { orderId: id },
      data: { isDeleted: true }
    });

    return tx.order.update({
      where: { id },
      data: { isDeleted: true },
      include: orderInclude
    });
  });
};
