# shopwise-api

Shopwise API is an SCIC/EJP-13 backend assignment project built with Express.js, TypeScript, Prisma ORM, PostgreSQL, JWT authentication, bcrypt, dotenv, and CORS.

## What This Project Includes

- Express.js REST API with strict TypeScript.
- Prisma PostgreSQL schema with normalized relations.
- 7 service modules: auth, users, categories, products, reviews, orders, wishlists.
- 7 Prisma enums: user role/status, category status, product status, review status, order status, wishlist status.
- Soft delete support through `isDeleted` on every model.
- `createdAt` and `updatedAt` timestamps on every model.
- Database table mapping with `@@map()` and snake_case field mapping.
- JWT login/register flow with bcrypt password hashing.
- Consistent API response format.
- API documentation in `docs/API.md` and `/api/docs`.
- Integrated browser client in `public/index.html`.
- Vercel-ready Express export and Render blueprint.

## Local Setup

```bash
npm install
cp .env.example .env
npm run prisma:deploy
npm run prisma:seed
npm run dev
```

On Windows PowerShell, copy the environment example with:

```powershell
Copy-Item .env.example .env
```

The API runs at:

```text
http://localhost:5000
```

The integrated frontend client is served at:

```text
http://localhost:5000
```

## Required Environment Variables

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/shopwise_api?schema=public"
JWT_SECRET="replace-this-with-a-long-random-secret"
JWT_EXPIRES_IN="7d"
PORT=5000
CORS_ORIGIN="http://localhost:5000,http://localhost:5173"
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Run the TypeScript server locally with watch mode |
| `npm run build` | Generate Prisma client and compile TypeScript |
| `npm run start` | Run the compiled production server |
| `npm run lint` | Run TypeScript checking |
| `npm run prisma:migrate` | Create and apply a local Prisma migration |
| `npm run prisma:deploy` | Apply migrations in production |
| `npm run prisma:studio` | Open Prisma Studio |
| `npm run prisma:seed` | Seed admin/customer demo data |

## Demo Seed Accounts

After `npm run prisma:seed`:

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@shopwise.test` | `admin123` |
| Customer | `customer@shopwise.test` | `customer123` |

## Main API Routes

| Module | Endpoint Prefix |
| --- | --- |
| Auth | `/api/auth` |
| Users | `/api/users` |
| Categories | `/api/categories` |
| Products | `/api/products` |
| Reviews | `/api/reviews` |
| Orders | `/api/orders` |
| Wishlists | `/api/wishlists` |

Full documentation is available in [docs/API.md](docs/API.md).

## Deployment

### Vercel

This project exports the Express app from `src/server.ts`, which Vercel can deploy as a Node backend. Configure these production environment variables before deploying:

- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `CORS_ORIGIN`

Then run:

```bash
vercel --prod
```

After deployment, apply the PostgreSQL migration to the same database:

```bash
npm run prisma:deploy
```

### Render

The `render.yaml` file defines a web service and PostgreSQL database. Connect the GitHub repository to Render and create from the blueprint.

## Assignment Checklist

- [x] Express.js
- [x] TypeScript
- [x] PostgreSQL-compatible Prisma schema
- [x] Prisma ORM and migration
- [x] JWT authentication
- [x] bcrypt password hashing
- [x] dotenv
- [x] CORS
- [x] Modular routes and services
- [x] Minimum 4 services
- [x] At least 2 enums
- [x] Proper relationships
- [x] Soft delete
- [x] Created and updated timestamps
- [x] `@@map()` table mapping
- [x] CRUD APIs for major modules
- [x] Consistent API responses
- [x] Prisma client, migrate, relations, enums, indexes
- [x] API documentation
- [x] Frontend integration
