import { Router } from "express";
import { cookiesBox } from "../middleware/cookiesBox";

// controllers
import CookiesBoxController from "../controllers/cookiesBox/cookiesBox.controller";
import ListCookiesBoxController from "../controllers/cookiesBox/listCookieBox.controller";
import ListCookieInBoxController from "../controllers/cookiesBox/listCookieInBox.controller";

const router = Router();

router.post("/cookiesBox", cookiesBox, new CookiesBoxController().handle);
router.get("/cookiesBox", new ListCookiesBoxController().handle);
router.get("/cookiesBox/:id", new ListCookieInBoxController().handle);

export default router;
