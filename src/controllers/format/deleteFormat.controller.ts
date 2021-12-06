import { Request, Response } from "express";
import { AppResponse } from "../../@types";

import DeleteFormatService from "../../services/format/deleteFormat.service";

export default class DeleteFormatController {
  async handle(
    req: Request<number>,
    res: Response<AppResponse<string>>
  ): Promise<any> {
    try {
      const createFormatService = new DeleteFormatService();
      const format = await createFormatService.execute(req.params);
      if (format) {
        return res.status(200).json({ success: true, message: format });
      }
      return res
        .status(400)
        .json({ success: false, message: "Invalid format. Try Again." });
    } catch (err: any) {
      return err.message;
    }
  }
}
