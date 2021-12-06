import { Router, Request, Response } from "express";

const router = Router();

router.get("/", async (__: Request, res: Response) => {
  return res.send({
    Author: "Luís Afonso Caputo",
    Summary: "AdOpt - Challenge",
    Area: "BackEnd",
    version: "1.0.0",
    copyright: "2021",
  });
});

export default router;
