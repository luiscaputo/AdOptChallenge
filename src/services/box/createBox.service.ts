import { getCustomRepository } from "typeorm";
import BoxRepository from "../../repositories/box.repository";
import { Box } from "../../models/Box";

export interface IBox {
  name: string;
  description: string;
}

export default class CreateBoxService {
  async execute({ name, description }: IBox) {
    try {
      const boxRepository = getCustomRepository(BoxRepository);
      const boxModel = new Box();
      const box = await boxRepository.findOne({ where: { name } });

      if (box) {
        throw new Error("Already Exists one Box with this name.");
      }

      boxModel.name = name;
      boxModel.description = description;
      boxRepository.save(boxModel);

      return boxModel;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
