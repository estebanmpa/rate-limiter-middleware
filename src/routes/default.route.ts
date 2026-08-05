import { Router } from "express";
import { getDefault } from "../controllers/default.controller.js";
import { rateLimiter } from "../middlewares/rate-limiter.middleware.js";

export const defaultRouter = Router();

defaultRouter.get("/", rateLimiter, getDefault);
