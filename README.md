# Shopwise API

Shopwise API is a backend-focused e-commerce REST API built for the SCIC/EJP-13 assignment. It provides authentication, user management, categories, products, reviews, orders, and wishlists with a connected responsive dashboard for testing the API from the browser.

## Live Submission

| Requirement | Link |
| --- | --- |
| Live Backend API URL | https://shopwise-api-phi.vercel.app |
| GitHub Repository | https://github.com/fahid2002/shopwise-api |
| API Documentation | https://shopwise-api-phi.vercel.app/api/docs |
| Detailed API Documentation | https://github.com/fahid2002/shopwise-api/blob/main/docs/API.md |

## Features

- REST API built with Express.js and TypeScript.
- PostgreSQL database hosted with Neon.
- Prisma ORM with migrations, relations, enums, indexes, and table mapping.
- JWT authentication with bcrypt password hashing.
- Role-based access for admin and customer actions.
- Soft delete support through `isDeleted` on every model.
- `createdAt` and `updatedAt` timestamps on every model.
- Modular route, service, validation, middleware, and library layers.
- Consistent API response format.
- Browser dashboard integrated with the backend API.
- Deployment-ready configuration for Vercel and Render.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Runtime | Node.js |
| Server | Express.js |
| Language | TypeScript |
| Database | PostgreSQL / Neon |
| ORM | Prisma |
| Authentication | JWT, bcrypt |
| Validation | Zod |
| Security/Config | Helmet, CORS, dotenv |
| Deployment | Vercel, Render-ready blueprint |

## Project Structure

```text
prisma/
  migrations/
  schema.prisma
  seed.ts
public/
  index.html
  app.js
  styles.css
src/
  app.ts
  server.ts
  lib/
  middleware/
  routes/
  services/
docs/
  API.md
```

## Main Modules

| Module | Endpoint Prefix | Coverage |
| --- | --- | --- |
| Auth | `/api/auth` | Register, login, current user |
| Users | `/api/users` | Get all, get by id, update, soft delete |
| Categories | `/api/categories` | Create, get all, get by id, update, soft delete |
| Products | `/api/products` | Create, get all, get by id, update, soft delete |
| Reviews | `/api/reviews` | Create, get all, get by id, update, soft delete |
| Orders | `/api/orders` | Create, get all, get by id, update status, soft delete |
| Wishlists | `/api/wishlists` | Create, get all, get by id, update, soft delete |

## Demo Accounts

These accounts are available after running the seed script and are also used by the deployed demo dashboard.

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@shopwise.test` | `admin123` |
| Customer | `customer@shopwise.test` | `customer123` |

## Local Setup

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Configure `.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/shopwise_api?schema=public"
JWT_SECRET="replace-this-with-a-long-random-secret"
JWT_EXPIRES_IN="7d"
PORT=5000
CORS_ORIGIN="http://localhost:5000,http://localhost:5173"
```

Apply migrations and seed demo data:

```bash
npm run prisma:deploy
npm run prisma:seed
```

Run the development server:

```bash
npm run dev
```

Local API and dashboard:

```text
http://localhost:5000
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Run the TypeScript server in watch mode |
| `npm run build` | Generate Prisma Client and compile TypeScript |
| `npm run start` | Run the compiled production server |
| `npm run lint` | Type-check the project |
| `npm run prisma:migrate` | Create and apply a local Prisma migration |
| `npm run prisma:deploy` | Apply migrations to the configured database |
| `npm run prisma:studio` | Open Prisma Studio |
| `npm run prisma:seed` | Seed demo admin, customer, products, categories, orders, reviews, and wishlist data |

## API Documentation

Quick endpoint list:

```text
GET https://shopwise-api-phi.vercel.app/api/docs
```

Detailed endpoint documentation with request bodies, response examples, authentication requirements, and status codes is available in [docs/API.md](docs/API.md).

Protected routes require a JWT token:

```http
Authorization: Bearer <token>
```

## Deployment

The project is deployed on Vercel as a Node/Express backend. The production deployment requires these environment variables:

- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `CORS_ORIGIN`

Render deployment is also supported through `render.yaml`.

## Assignment Checklist

- [x] Express.js backend
- [x] TypeScript
- [x] PostgreSQL-compatible database
- [x] Prisma ORM
- [x] Prisma migration
- [x] Prisma Client usage
- [x] JWT authentication
- [x] bcrypt password hashing
- [x] dotenv configuration
- [x] CORS configuration
- [x] Modular routes and services
- [x] Minimum 4 services
- [x] At least 2 enums
- [x] Proper model relationships
- [x] Soft delete
- [x] Created and updated timestamps
- [x] `@@map()` table mapping
- [x] CRUD APIs for major modules
- [x] Consistent API responses
- [x] API documentation
- [x] Frontend integration
- [x] Live backend deployment
