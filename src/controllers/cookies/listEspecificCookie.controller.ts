import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { getCustomRepository } from "typeorm";
import { Cookies } from "../../models/Cookies";
import CookiesRepository from "../../repositories/cookies.repository";

export default class ListEspecificCookieController {
  async handle(req: Request<number>, res: Response<AppResponse<Cookies[]>>) {
    try {
      const cookiesRepository = getCustomRepository(CookiesRepository);

      const cookie = await cookiesRepository.find({
        where: { id: req.params },
      });
      if (cookie.length > 0) {
        return res.status(200).json({ success: true, data: cookie });
      }
      return res
        .status(400)
        .json({ success: false, message: "Invalid CookieId. Try Again." });
    } catch (err: any) {
      return err.message;
    }
  }
}
