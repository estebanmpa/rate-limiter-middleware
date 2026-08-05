import express from "express";
import { defaultRouter } from "./routes/default.route.js";

export const app = express();

app.use(defaultRouter);
