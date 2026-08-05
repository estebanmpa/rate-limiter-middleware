import type { Request, Response } from "express";

export function getDefault(req: Request, res: Response) {
  res.json({ status: "ok" });
}
