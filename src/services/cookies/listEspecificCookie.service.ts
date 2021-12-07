import { getCustomRepository } from "typeorm";
import CookiesRepository from "../../repositories/cookies.repository";

export default class ListEspecificCookieService {
  async execute(cookieId: number) {
    try {
      const cookiesRepository = getCustomRepository(CookiesRepository);

      const cookie = await cookiesRepository.findOne({
        where: { id: cookieId },
        relations: ["formatId", "flavorId"],
      });
      if (!cookie) {
        throw new Error("Invalid CookieId.");
      }

      return cookie;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
