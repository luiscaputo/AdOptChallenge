import { Router } from "express";
// controllers
import CreateFlavorsController from "../controllers/flavors/createFlavors.controllers";
import DeleteFlavorController from "../controllers/flavors/deleteFlavors.controller";
import ListFlavorsController from "../controllers/flavors/listFlavors.controller";

const router = Router();

router.post("/flavor", new CreateFlavorsController().handle);
router.get("/flavors", new ListFlavorsController().handle);
router.delete("/flavor/:id", new DeleteFlavorController().handle);

export default router;
