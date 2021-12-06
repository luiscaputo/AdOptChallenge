import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { AppResponse } from "../../@types";
import { Format } from "../../models/Format";
import FormatRepository from "../../repositories/format.repository";

export default class ListFormatController {
  async handle(_: Request<any>, res: Response<AppResponse<Format[]>>) {
    try {
      const formatRepository = getCustomRepository(FormatRepository);
      const formatModel = getRepository(Format);
      const formats = await formatModel.find();

      if (formats.length > 0) {
        return res.status(200).json({ success: true, data: formats });
      } else if (formats.length < 0) {
        return res
          .status(400)
          .json({ success: false, message: "Format not found" });
      }
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
