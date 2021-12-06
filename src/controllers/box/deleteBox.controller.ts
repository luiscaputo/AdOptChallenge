import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import DeleteBoxService from "../../services/box/deleteBox.service";

export default class DeleteBoxController {
  async handle(
    req: Request<number>,
    res: Response<AppResponse<string>>
  ): Promise<any> {
    try {
      const deleteBoxService = new DeleteBoxService();
      const box = await deleteBoxService.execute(req.params);
      if (box) {
        return res.status(200).json({ success: true, message: box });
      }
      return res
        .status(400)
        .json({ success: false, message: "Invalid box. Try Again." });
    } catch (err: any) {
      return err.message;
    }
  }
}
