import { getCustomRepository } from "typeorm";
import { Cookiesbox } from "../../models/Cookiesbox";
import BoxRepository from "../../repositories/box.repository";
import CookiesboxRepository from "../../repositories/cookiesBox.repository";
import CookiesRepository from "../../repositories/cookies.repository";

export interface ICookieBox {
  cookieId: number;
  boxId: number;
}

export default class CookieBoxService {
  async execute({ cookieId, boxId }: ICookieBox) {
    try {
      const boxRepository = getCustomRepository(BoxRepository);
      const cookieRepository = getCustomRepository(CookiesRepository);
      const cookiesboxRepository = getCustomRepository(CookiesboxRepository);
      const cookiesBoxModel = new Cookiesbox();

      const cookie = await cookieRepository.findOne(cookieId);
      if (!cookie) {
        throw new Error("Cookie Not found.");
      }

      const box = await boxRepository.findOne(boxId);
      if (!box) {
        throw new Error("Box Not found.");
      }

      const cookieBox = await cookiesboxRepository.findOne(cookieId);
      if (cookieBox) {
        throw new Error("This Cookie Already Exists In This Box.");
      }

      cookiesBoxModel.cookieId = cookieId;
      cookiesBoxModel.boxId = boxId;

      await cookiesboxRepository.save(cookiesBoxModel);
      return cookiesBoxModel;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
