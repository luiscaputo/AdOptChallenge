import { AppResponse } from "../../@types";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import BoxRepository from "../../repositories/box.repository";
import { Box } from "../../models/Box";

export default class ListBoxesController {
  async handle(_: Request<any>, res: Response<AppResponse<Box[]>>) {
    try {
      const boxRepository = getCustomRepository(BoxRepository);
      const box = await boxRepository.find();

      if (box.length > 0) {
        return res.status(200).json({ success: true, data: box });
      } else if (box.length < 0) {
        return res
          .status(400)
          .json({ success: false, message: "Box not found" });
      }
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
