import request from "supertest";
import { app } from "../app.js";
import { RATE_LIMITER_MAX_REQUESTS } from "../services/cache.service.js";

describe("rate limiter middleware", () => {
  it("returns 429 once the request limit is exceeded", async () => {
    for (let i = 0; i < RATE_LIMITER_MAX_REQUESTS; i++) {
      const res = await request(app).get("/");
      expect(res.status).toBe(200);
    }

    const res = await request(app).get("/");

    expect(res.status).toBe(429);
    expect(res.body).toEqual({ error: "Rate limit exceeded" });
  });
});
