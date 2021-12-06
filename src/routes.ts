import { Router, Request, Response } from "express";
import formateRoutes from "./routes/format.routes";
import flavorsRoutes from "./routes/flavors.routes";
import boxRoutes from "./routes/box.routes";

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

router.use(formateRoutes);
router.use(flavorsRoutes);
router.use(boxRoutes);

export default router;
