import type { Response } from "express";

type ResponseMeta = {
  page?: number;
  limit?: number;
  total?: number;
};

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  meta?: ResponseMeta;
};

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T,
  meta?: ResponseMeta
): Response<ApiResponse<T>> => {
  return res.status(statusCode).json({
    success: statusCode < 400,
    message,
    ...(data === undefined ? {} : { data }),
    ...(meta === undefined ? {} : { meta })
  });
};
