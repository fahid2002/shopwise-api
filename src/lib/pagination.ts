import type { ParsedQs } from "qs";

type PaginationInput = ParsedQs | Record<string, unknown>;

export type Pagination = {
  page: number;
  limit: number;
  skip: number;
  take: number;
};

const toPositiveInteger = (value: unknown, fallback: number, max: number): number => {
  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < 1) {
    return fallback;
  }

  return Math.min(parsed, max);
};

export const getPagination = (query: PaginationInput): Pagination => {
  const page = toPositiveInteger(query.page, 1, 1000);
  const limit = toPositiveInteger(query.limit, 10, 100);

  return {
    page,
    limit,
    skip: (page - 1) * limit,
    take: limit
  };
};
