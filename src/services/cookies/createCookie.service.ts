import { Double, getCustomRepository } from "typeorm";
import { Cookies } from "../../models/Cookies";
import FormatRepository from "../../repositories/format.repository";
import FlavorsRepository from "../../repositories/flavor.repository";
import CookiesRepository from "../../repositories/cookies.repository";

export interface ICreateCookie {
  name: string;
  formatId: number;
  flavorId: number;
  price: number;
  description?: string;
}

export default class CreateCookieService {
  async execute({
    name,
    formatId,
    flavorId,
    price,
    description,
  }: ICreateCookie) {
    try {
      const formatRepository = getCustomRepository(FormatRepository);
      const flavorsRepository = getCustomRepository(FlavorsRepository);
      const cookieRepository = getCustomRepository(CookiesRepository);
      const cookieModel = new Cookies();

      const formatExists = await formatRepository.findOne({
        where: { id: formatId },
      });
      if (!formatExists) {
        throw new Error("This Cookie Format Not Exists.");
      }

      const flavorExists = await flavorsRepository.findOne({
        where: { id: flavorId },
      });
      if (!flavorExists) {
        throw new Error("This Cookie Flavor Not Exists.");
      }

      const cookieExists = await cookieRepository.query(
        `SELECT * FROM cookies WHERE name = '${name}' and formatId = '${formatId} and flavorId = '${flavorId}''`
      );
      if(cookieExists){
        throw new Error("Already Exists one cookie with this name, format and flavor.")
      }

      const centavo = price / 100;

      cookieModel.name = name;
      cookieModel.formatId = formatId;
      cookieModel.flavorId = formatId;
      cookieModel.price = centavo;
      cookieModel.description = description;

      await cookieRepository.save(cookieModel);

      return cookieModel;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
