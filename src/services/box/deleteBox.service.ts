import { getCustomRepository } from "typeorm";
import BoxRepository from "../../repositories/box.repository";

export default class DeleteBoxService {
  async execute(id: number) {
    try {
      const boxRepository = getCustomRepository(BoxRepository);
      const box = await boxRepository.findOne(id);

      if (!box) {
        throw new Error("No format Registred");
      }

      await boxRepository.delete(id);

      return "Box Deleted.";
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
