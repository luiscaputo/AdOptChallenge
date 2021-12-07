import { AppResponse } from "../../@types";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { Cookiesbox } from "../../models/Cookiesbox";
import CookiesboxRepository from "../../repositories/cookiesBox.repository";

export default class ListCookiesBoxController {
  async handle(_: Request<any>, res: Response<AppResponse<Cookiesbox[]>>) {
    try {
      const cookiesboxRepository = getCustomRepository(CookiesboxRepository);
      const cookiesBox = await cookiesboxRepository.find();

      if (cookiesBox.length > 0) {
        return res.status(200).json({ success: true, data: cookiesBox });
      } else if (cookiesBox.length < 0) {
        return res
          .status(400)
          .json({ success: false, message: "Not Exists Cookie in Box." });
      }
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
