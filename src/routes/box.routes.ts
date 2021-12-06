import { Router } from "express";
// controllers
import CreateBoxController from "../controllers/box/createBox.controller";
import DeleteBoxController from "../controllers/box/deleteBox.controller";
import ListBoxesController from "../controllers/box/listBoxs.controller";

const router = Router();

router.post("/box", new CreateBoxController().handle);
router.get("/boxs", new ListBoxesController().handle);
router.delete("/box/:id", new DeleteBoxController().handle);

export default router;
