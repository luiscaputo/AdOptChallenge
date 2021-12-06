import { getCustomRepository } from "typeorm";
import FlavorsRepository from "../../repositories/flavor.repository";
import { Flavors } from "../../models/Flavors";

export interface IFlavors {
  name: string;
  code: string;
}

export default class CreateFlavorService {
  async execute({ name, code }: IFlavors) {
    try {
      const flavorsRepository = getCustomRepository(FlavorsRepository);
      const flavorModel = new Flavors();
      const flavor = await flavorsRepository.findOne(code);

      if (flavor) {
        throw new Error("Already Exists one format with this code.");
      }

      flavorModel.name = name;
      flavorModel.code = code;
      flavorsRepository.save(flavorModel);

      return flavorModel;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
