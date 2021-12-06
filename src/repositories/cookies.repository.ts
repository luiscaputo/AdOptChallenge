import { EntityRepository, Repository } from "typeorm";
import { Cookies } from "../models/Cookies";

@EntityRepository(Cookies)
export default class CookiesRepository extends Repository<Cookies> {}
