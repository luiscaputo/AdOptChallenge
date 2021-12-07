import { AppResponse } from "../../@types";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { Flavors } from "../../models/Flavors";
import FlavorsRepository from "../../repositories/flavor.repository";
import { Cookies } from "../../models/Cookies";
import CookiesRepository from "../../repositories/cookies.repository";

export default class ListCookiesController {
  async handle(_: Request<any>, res: Response<AppResponse<Cookies[]>>) {
    try {
      const cookiesRepository = getCustomRepository(CookiesRepository);
      const cookies = await cookiesRepository.find();

      if (cookies.length > 0) {
        return res.status(200).json({ success: true, data: cookies });
      } else if (cookies.length < 0) {
        return res
          .status(400)
          .json({ success: false, message: "Cookies not found." });
      }
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
