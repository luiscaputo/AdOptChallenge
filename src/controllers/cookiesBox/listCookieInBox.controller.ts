import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { getCustomRepository } from "typeorm";
import { Cookiesbox } from "../../models/Cookiesbox";
import CookiesboxRepository from "../../repositories/cookiesBox.repository";

export default class ListCookieInBoxController {
  async handle(req: Request<number>, res: Response<AppResponse<Cookiesbox[]>>) {
    try {
      const cookieBoxRepository = getCustomRepository(CookiesboxRepository);

      const cookiesInBox = await cookieBoxRepository.find({
        where: { boxId: req.params },
      });
      if (cookiesInBox.length > 0) {
        return res.status(200).json({ success: true, data: cookiesInBox });
      }
      return res
        .status(400)
        .json({ success: false, message: "This Box is Void." });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
