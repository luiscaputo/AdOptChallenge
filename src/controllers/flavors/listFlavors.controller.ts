import { AppResponse } from "../../@types";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { Flavors } from "../../models/Flavors";
import FlavorsRepository from "../../repositories/flavor.repository";

export default class ListFlavorsController {
  async handle(_: Request<any>, res: Response<AppResponse<Flavors[]>>) {
    try {
      const flavorsRepository = getCustomRepository(FlavorsRepository);
      const flavors = await flavorsRepository.find();

      if (flavors.length > 0) {
        return res.status(200).json({ success: true, data: flavors });
      } else if (flavors.length < 0) {
        return res
          .status(400)
          .json({ success: false, message: "Format not found" });
      }
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
