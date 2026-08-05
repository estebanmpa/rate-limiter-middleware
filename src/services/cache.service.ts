import { redisClient } from "../cache/redis.js";

export async function get(key: string) {
    return redisClient.get(key);
}

export async function set(key: string, value: string, ttlSeconds: number) {
    await redisClient.set(key, value, { EX: ttlSeconds });
}
