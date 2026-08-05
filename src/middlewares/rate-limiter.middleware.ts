import type { NextFunction, Request, Response } from "express";
import { get, set, RATE_LIMITER_TTL_SECONDS, RATE_LIMITER_MAX_REQUESTS } from "../services/cache.service.js";

export async function rateLimiter(req: Request, res: Response, next: NextFunction) {
  const userId: string = req.headers["x-user-id"]?.toString() || "unknown";
  const key: string = `rate_limiter:${userId}`;
  const currentHits: number = parseInt((await get(key)) || "0");

  if (currentHits >= RATE_LIMITER_MAX_REQUESTS) {
    res.status(429).json({ error: "Rate limit exceeded" });
    return;
  }

  await set(key, (currentHits + 1).toString(), RATE_LIMITER_TTL_SECONDS);

  next();
}
