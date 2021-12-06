import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import CreateBoxService, { IBox } from "../../services/box/createBox.service";
import { Box } from "../../models/Box";

export default class CreateBoxController {
  async handle(req: Request<IBox>, res: Response<AppResponse<Box[]>>) {
    try {
      const createBoxService = new CreateBoxService();
      const { name, description } = req.body;
      const box = await createBoxService.execute({ name, description });

      if (box) {
        return res.status(200).json({ success: true, data: box });
      }
      return res
        .status(400)
        .json({ success: false, message: "Invalid Box. Try Again." });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
