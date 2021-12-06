import { EntityRepository, Repository } from "typeorm";
import { Cookiesbox } from "../models/Cookiesbox";

@EntityRepository(Cookiesbox)
export default class CookiesboxRepository extends Repository<Cookiesbox> {}
