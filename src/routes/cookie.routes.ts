import { Router } from "express";
// controllers
import CreateCookieController from "../controllers/cookies/createCookie.controller";
import DeleteCookieController from "../controllers/cookies/deleteCookie.controller";
import ListCookiesController from "../controllers/cookies/listCookies.controller";
import ListEspecificCookieController from "../controllers/cookies/listEspecificCookie.controller";

const router = Router();

router.post("/cookie", new CreateCookieController().handle);
router.get("/cookies", new ListCookiesController().handle);
router.get("/cookie/:cookieId", new ListEspecificCookieController().handle);
router.delete("/cookie/:id", new DeleteCookieController().handle);

export default router;
