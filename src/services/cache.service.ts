type CacheEntry = { value: string; expiresAt: number };

const store = new Map<string, CacheEntry>();

export const RATE_LIMITER_TTL_SECONDS = 5;
export const RATE_LIMITER_MAX_REQUESTS = 5;

export async function get(key: string) {
    const entry = store.get(key);
    if (!entry) return null;

    if (Date.now() >= entry.expiresAt) {
        store.delete(key);
        return null;
    }

    return entry.value;
}

export async function set(key: string, value: string, ttlSeconds: number) {
    store.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 });
}
