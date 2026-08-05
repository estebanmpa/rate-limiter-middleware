import express from "express";
import { redisClient } from "./cache/redis.js";
import { defaultRouter } from "./routes/default.route.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(defaultRouter);

await redisClient.connect();

const server = app.listen(port, () => {
  console.log(`rate-limiter listening on port ${port}`);
});
