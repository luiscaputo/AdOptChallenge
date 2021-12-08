import { Router } from "express";

// controllers
import ImportCookieController from "../controllers/import/importCookie.controller";

const router = Router();

router.post("/import", new ImportCookieController().handle);

export default router;
