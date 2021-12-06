import { getCustomRepository } from "typeorm";
import FlavorsRepository from "../../repositories/flavor.repository";

export default class DeleteFlavorService {
  async execute(id: number) {
    try {
      const flavorsRepository = getCustomRepository(FlavorsRepository);
      const flavors = await flavorsRepository.findOne(id);

      if (!flavors) {
        throw new Error("No format Registred");
      }

      await flavorsRepository.delete(id);

      return "Flavor Deleted.";
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
