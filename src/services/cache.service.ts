import { redisClient } from "../cache/redis.js";

export const RATE_LIMITER_TTL_SECONDS = 60;
export const RATE_LIMITER_MAX_REQUESTS = 10;

export async function get(key: string) {
    return redisClient.get(key);
}

export async function set(key: string, value: string, ttlSeconds: number) {
    await redisClient.set(key, value, { EX: ttlSeconds });
}
