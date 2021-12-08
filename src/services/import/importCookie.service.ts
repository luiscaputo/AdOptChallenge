import fs from "fs";
import { getCustomRepository } from "typeorm";
import CookiesRepository from "../../repositories/cookies.repository";

export interface IImportFile {
  cookieId: number;
}

export default class ImportCookieService {
  async execute({ cookieId }: IImportFile) {
    try {
      const cookieRepository = getCustomRepository(CookiesRepository);

      const cookie = await cookieRepository.findOne({
        where: { id: cookieId },
        relations: ["format", "flavor"],
      });
      if (!cookie) {
        throw new Error("Cookie Not found.");
      }

      const { price, description, createdAt } = cookie;
      const format = cookie.format.code;
      const flavor = cookie.flavor.code;

      const dataInFile = fs.readFileSync("src/aco/ACO.txt");

      const infos = `${flavor}${format}${createdAt}${price}${description}
${dataInFile}`;

      return fs.writeFileSync("src/aco/ACO.txt", infos);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
