import express from "express";
import { defaultRouter } from "./routes/default.route.js";

const app = express();
const port = 3000;

app.use(defaultRouter);

const server = app.listen(port, () => {
  console.log(`rate-limiter listening on port ${port}`);
});
