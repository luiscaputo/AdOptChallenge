import { getCustomRepository } from "typeorm";
import CookiesRepository from "../../repositories/cookies.repository";

export default class DeleteCookieService {
  async execute(id: number) {
    try {
      const cookieRepository = getCustomRepository(CookiesRepository);
      const cookie = await cookieRepository.findOne(id);

      if (!cookie) {
        throw new Error("Invalid CookieId.");
      }

      await cookieRepository.delete(id);

      return "Cookie Delected.";
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
