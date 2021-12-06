import { Router } from "express";
import CreateFormatController from "../controllers/format/createFormat.controllers";
import DeleteFormatController from "../controllers/format/deleteFormat.controller";
import ListFormatController from "../controllers/format/listFormats.controller";

const router = Router();

router.post("/format", new CreateFormatController().handle);
router.get("/format", new ListFormatController().handle);
router.delete("/format/:id", new DeleteFormatController().handle);

export default router;
