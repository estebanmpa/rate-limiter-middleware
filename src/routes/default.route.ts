import { Router } from "express";
import { getDefault } from "../controllers/default.controller.js";

export const defaultRouter = Router();

defaultRouter.get("/", getDefault);
