import request from "supertest";
import { app } from "../app.js";

describe("GET /", () => {
  it("returns 200 with the current date time", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(typeof res.body.currentDateTime).toBe("string");
  });
});
