import FormatRepository from "../../repositories/format.repository";
import { getCustomRepository } from "typeorm";
import { Format } from "../../models/Format";

export interface IFormat {
  name: string;
  code: string;
}

export default class FormatServices {
  async create({ name, code }: IFormat) {
    try {
      const formatRepository = getCustomRepository(FormatRepository);
      const formatModel = new Format();
      const format = await formatRepository.findOne(code);

      if (format) {
        throw new Error("Already Exists one format with this code.");
      }

      formatModel.name = name;
      formatModel.code = code;
      formatRepository.save(formatModel);

      return formatModel;
    } catch (err: any) {
      return err.message;
    }
  }
  async list() {
    try {
      const formatRepository = getCustomRepository(FormatRepository);
      const formats = await formatRepository.find();

      if (formats.length > 0) {
        return formats;
      }

      throw new Error("No format Registred");
    } catch (err: any) {
      return err.message;
    }
  }
  async delete(id: number) {
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
