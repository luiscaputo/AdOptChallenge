import { getCustomRepository } from "typeorm";
import CookiesRepository from "../../repositories/cookies.repository";

export default class ListEspecificCookieService {
  async execute(id: number) {
    try {
      const cookiesRepository = getCustomRepository(CookiesRepository);

      const cookie = await cookiesRepository.find({ where: { id } });
      console.log(cookie);
      if (cookie.length <= 0) {
        throw new Error("Invalid CookieId.");
      }

      return cookie;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
