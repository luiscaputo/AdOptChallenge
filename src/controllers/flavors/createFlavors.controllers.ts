import { Request, Response } from "express";
import { Flavors } from "../../models/Flavors";
import { AppResponse } from "../../@types";
import { IFlavors } from "../../services/flavors/createFlavor.service";
import CreateFlavorService from "../../services/flavors/createFlavor.service";

export default class CreateFlavorController {
  async handle(req: Request<IFlavors>, res: Response<AppResponse<Flavors[]>>) {
    try {
      const createFlavorService = new CreateFlavorService();
      const { name, code } = req.body;
      const flavor = await createFlavorService.execute({ name, code });

      if (flavor) {
        return res.status(200).json({ success: true, data: flavor });
      }
      return res
        .status(400)
        .json({ success: false, message: "Invalid flavor. Try Again." });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
