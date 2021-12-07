import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import DeleteFlavorsService from "../../services/flavors/deleteFlavor.service";

export default class DeleteFlavorController {
  async handle(
    req: Request<number>,
    res: Response<AppResponse<string>>
  ): Promise<any> {
    try {
      const deleteFlavorService = new DeleteFlavorsService();
      const flavor = await deleteFlavorService.execute(req.params);

      if (flavor) {
        return res.status(200).json({ success: true, message: flavor });
      }

      return res
        .status(400)
        .json({ success: false, message: "Invalid flavor. Try Again." });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
