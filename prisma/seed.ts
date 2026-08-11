import bcrypt from "bcrypt";
import { CategoryStatus, ProductStatus, UserRole } from "@prisma/client";

import { prisma } from "../src/lib/prisma";

const main = async (): Promise<void> => {
  const adminPassword = await bcrypt.hash("admin123", 12);
  const customerPassword = await bcrypt.hash("customer123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@shopwise.test" },
    update: {},
    create: {
      name: "Shopwise Admin",
      email: "admin@shopwise.test",
      password: adminPassword,
      role: UserRole.ADMIN
    }
  });

  const customer = await prisma.user.upsert({
    where: { email: "customer@shopwise.test" },
    update: {},
    create: {
      name: "Shopwise Customer",
      email: "customer@shopwise.test",
      password: customerPassword
    }
  });

  const electronics = await prisma.category.upsert({
    where: { slug: "electronics" },
    update: {},
    create: {
      name: "Electronics",
      slug: "electronics",
      description: "Smart devices and everyday tech products.",
      status: CategoryStatus.ACTIVE
    }
  });

  const accessories = await prisma.category.upsert({
    where: { slug: "accessories" },
    update: {},
    create: {
      name: "Accessories",
      slug: "accessories",
      description: "Useful add-ons for home, study, and work.",
      status: CategoryStatus.ACTIVE
    }
  });

  const keyboard = await prisma.product.upsert({
    where: { slug: "wireless-keyboard" },
    update: {},
    create: {
      name: "Wireless Keyboard",
      slug: "wireless-keyboard",
      description: "Compact wireless keyboard with quiet keys and long battery life.",
      price: 49.99,
      stock: 25,
      status: ProductStatus.ACTIVE,
      categoryId: electronics.id
    }
  });

  const backpack = await prisma.product.upsert({
    where: { slug: "daily-laptop-backpack" },
    update: {},
    create: {
      name: "Daily Laptop Backpack",
      slug: "daily-laptop-backpack",
      description: "Durable backpack with padded laptop storage and organizer pockets.",
      price: 69.5,
      stock: 18,
      status: ProductStatus.ACTIVE,
      categoryId: accessories.id
    }
  });

  await prisma.review.upsert({
    where: {
      userId_productId: {
        userId: customer.id,
        productId: keyboard.id
      }
    },
    update: {},
    create: {
      userId: customer.id,
      productId: keyboard.id,
      rating: 5,
      comment: "Comfortable for daily typing."
    }
  });

  await prisma.wishlist.upsert({
    where: {
      userId_productId: {
        userId: customer.id,
        productId: backpack.id
      }
    },
    update: {},
    create: {
      userId: customer.id,
      productId: backpack.id
    }
  });

  console.log({
    admin: admin.email,
    adminPassword: "admin123",
    customer: customer.email,
    customerPassword: "customer123"
  });
};

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
