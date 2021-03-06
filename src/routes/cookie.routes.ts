import { Router } from "express";
import { createCookie } from "../middleware/cookies";

// controllers
import CreateCookieController from "../controllers/cookies/createCookie.controller";
import DeleteCookieController from "../controllers/cookies/deleteCookie.controller";
import ListCookiesController from "../controllers/cookies/listCookies.controller";
import ListEspecificCookieController from "../controllers/cookies/listEspecificCookie.controller";

const router = Router();

router.post("/cookie", createCookie, new CreateCookieController().handle);
router.get("/cookies", new ListCookiesController().handle);
router.get("/cookie/:id", new ListEspecificCookieController().handle);
router.delete("/cookie/:id", new DeleteCookieController().handle);

export default router;
