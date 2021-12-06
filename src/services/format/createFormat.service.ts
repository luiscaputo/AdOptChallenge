import FormatRepository from "../../repositories/format.repository";
import { getCustomRepository } from "typeorm";
import { Format } from "../../models/Format";

export interface IFormat {
  name: string;
  code: string;
}

export default class CreateFormatService {
  async execute({ name, code }: IFormat) {
    try {
      const formatRepository = getCustomRepository(FormatRepository);
      const formatModel = new Format();
      const format = await formatRepository.find({ where: { code } });

      if (format.length > 0) {
        throw new Error("Already Exists one format with this code.");
      }

      formatModel.name = name;
      formatModel.code = code;
      formatRepository.save(formatModel);

      return formatModel;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
