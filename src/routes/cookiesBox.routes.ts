import { Router } from "express";
// controllers
import CookiesBoxController from "../controllers/cookiesBox/cookiesBox.controller";
import ListCookiesBoxController from "../controllers/cookiesBox/listCookieBox.controller";
import ListCookieInBoxController from "../controllers/cookiesBox/listCookieInBox.controller";

const router = Router();

router.post("/cookiesBox", new CookiesBoxController().handle);
router.get("/cookiesBox", new ListCookiesBoxController().handle);
router.get("/cookiesBox/:id", new ListCookieInBoxController().handle);

export default router;
