import FlavorsRepository from "../../repositories/flavor.repository";
import { getCustomRepository } from "typeorm";
import { Flavors } from "../../models/Flavors";

export interface IFlavors {
  name: string;
  code: string;
}

export default class FlavorsServices {
  async create({ name, code }: IFlavors) {
    try {
      const flavorsRepository = getCustomRepository(FlavorsRepository);
      const flavorModel = new Flavors();
      const flavor = await flavorsRepository.findOne(code);

      if (flavor) {
        throw new Error("Already Exists one format with this code.");
      }

      const createFlavor = flavorsRepository.create({
        name,
        code,
      });
      await flavorsRepository.save(createFlavor);

      //   flavorModel.name = name;
      //   flavorModel.code = code;
      //   flavorsRepository.save(flavorModel);
      return createFlavor;
    } catch (err: any) {
      return err.message;
    }
  }
  async list() {
    try {
      const flavorsRepository = getCustomRepository(FlavorsRepository);
      const flavors = await flavorsRepository.find();

      if (flavors.length > 0) {
        return flavors;
      }

      throw new Error("No flavors Registred");
    } catch (err: any) {
      return err.message;
    }
  }
  async delete(id: number) {
    try {
      const flavorsRepository = getCustomRepository(FlavorsRepository);
      const flavors = await flavorsRepository.findOne(id);

      if (!flavors) {
        throw new Error("No format Registred");
      }

      const RMflavor = await flavorsRepository
        .createQueryBuilder()
        .delete()
        .where("id = id", { id: id })
        .execute();

      return RMflavor;
    } catch (err: any) {
      return err.message;
    }
  }
}
