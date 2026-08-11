# Shopwise API Documentation

Base URL:

- Local: `http://localhost:5000`
- Live: `https://shopwise-api-phi.vercel.app`

All responses follow this structure:

```json
{
  "success": true,
  "message": "Product retrieved successfully",
  "data": {}
}
```

For protected routes, send:

```http
Authorization: Bearer <token>
```

## Health And Docs

| Method | Endpoint | Description | Status Codes |
| --- | --- | --- | --- |
| GET | `/api/health` | Check API and database status | 200 |
| GET | `/api/docs` | List API modules and endpoints | 200 |

## Auth

### POST `/api/auth/register`

Creates a customer account.

Request body:

```json
{
  "name": "Customer One",
  "email": "customer@example.com",
  "password": "secret123"
}
```

Response: `201 Created`

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "uuid",
      "name": "Customer One",
      "email": "customer@example.com",
      "role": "CUSTOMER",
      "status": "ACTIVE"
    },
    "token": "jwt-token"
  }
}
```

### POST `/api/auth/login`

Logs in and returns a JWT.

Request body:

```json
{
  "email": "customer@example.com",
  "password": "secret123"
}
```

Response: `200 OK`

## Users

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| GET | `/api/users` | Admin | Get all users with `search`, `role`, `status`, `page`, `limit` query support |
| GET | `/api/users/:id` | User/Admin | Get a user by id |
| PATCH | `/api/users/:id` | User/Admin | Update name; admin can also update role/status |
| DELETE | `/api/users/:id` | Admin | Soft delete a user |

Update body:

```json
{
  "name": "Updated Name",
  "status": "ACTIVE",
  "role": "ADMIN"
}
```

## Categories

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| POST | `/api/categories` | Admin | Create a category |
| GET | `/api/categories` | Public | Get categories with `search`, `status`, `page`, `limit` query support |
| GET | `/api/categories/:id` | Public | Get a category by id |
| PATCH | `/api/categories/:id` | Admin | Update a category |
| DELETE | `/api/categories/:id` | Admin | Soft delete a category |

Create body:

```json
{
  "name": "Electronics",
  "description": "Smart devices and accessories",
  "status": "ACTIVE"
}
```

## Products

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| POST | `/api/products` | Admin | Create a product |
| GET | `/api/products` | Public | Get products with `search`, `categoryId`, `status`, `page`, `limit` query support |
| GET | `/api/products/:id` | Public | Get a product by id with reviews |
| PATCH | `/api/products/:id` | Admin | Update a product |
| DELETE | `/api/products/:id` | Admin | Soft delete a product |

Create body:

```json
{
  "name": "Wireless Keyboard",
  "description": "Compact keyboard with quiet keys",
  "price": 49.99,
  "stock": 25,
  "status": "ACTIVE",
  "categoryId": "category-uuid"
}
```

## Reviews

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| POST | `/api/reviews` | User | Create a product review |
| GET | `/api/reviews` | Public | Get reviews with `productId`, `userId`, `status`, `page`, `limit` filters |
| GET | `/api/reviews/:id` | Public | Get a review by id |
| PATCH | `/api/reviews/:id` | Owner/Admin | Update a review; admin can hide/publish |
| DELETE | `/api/reviews/:id` | Owner/Admin | Soft delete a review |

Create body:

```json
{
  "productId": "product-uuid",
  "rating": 5,
  "comment": "Great product"
}
```

## Orders

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| POST | `/api/orders` | User | Create an order from product items |
| GET | `/api/orders` | User/Admin | Customers see own orders; admin can filter all orders |
| GET | `/api/orders/:id` | User/Admin | Get order details |
| PATCH | `/api/orders/:id/status` | Admin | Update order status |
| DELETE | `/api/orders/:id` | Admin | Soft delete an order and its order items |

Create body:

```json
{
  "shippingAddress": "221B Baker Street",
  "phone": "+8801700000000",
  "notes": "Deliver after 5 PM",
  "items": [
    {
      "productId": "product-uuid",
      "quantity": 2
    }
  ]
}
```

## Wishlists

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| POST | `/api/wishlists` | User | Add a product to wishlist |
| GET | `/api/wishlists` | User | Get own wishlist |
| GET | `/api/wishlists/:id` | User | Get one wishlist item |
| PATCH | `/api/wishlists/:id` | User | Update wishlist item status |
| DELETE | `/api/wishlists/:id` | User | Remove an item from own wishlist |

Create body:

```json
{
  "productId": "product-uuid"
}
```

Update body:

```json
{
  "status": "ACTIVE"
}
```

## Status Codes

| Code | Meaning |
| --- | --- |
| 200 | Successful read/update/delete |
| 201 | Resource created |
| 400 | Validation error or invalid request |
| 401 | Missing or invalid token |
| 403 | Authenticated but not allowed |
| 404 | Resource not found |
| 409 | Duplicate unique value |
| 500 | Server or configuration error |
