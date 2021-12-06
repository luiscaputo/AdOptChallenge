import { Request, Response } from "express";
import { Format } from "../../models/Format";
import { AppResponse } from "../../@types";
import { IFormat } from "../../services/format/createFormat.service";
import CreateFormatService from "../../services/format/createFormat.service";

export default class CreateFormatController {
  async handle(req: Request<IFormat>, res: Response<AppResponse<Format[]>>) {
    try {
      const createFormatService = new CreateFormatService();
      const { name, code } = req.body;
      const format = await createFormatService.execute({ name, code });
      if (format) {
        return res.status(200).json({ success: true, data: format });
      }
      return res
        .status(400)
        .json({ success: false, message: "Invalid format. Try Again." });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
