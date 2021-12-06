import FormatRepository from "../../repositories/format.repository";
import { getCustomRepository } from "typeorm";

export default class DeleteFormatService {
  async execute(id: number) {
    try {
      const formatRepository = getCustomRepository(FormatRepository);
      const format = await formatRepository.findOne(id);

      if (!format) {
        throw new Error("No format Registred");
      }

      const RMformat = await formatRepository
        .createQueryBuilder()
        .delete()
        .where("id = id", { id: id })
        .execute();

      return RMformat;
    } catch (err: any) {
      return err.message;
    }
  }
}
