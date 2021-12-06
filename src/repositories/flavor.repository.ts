import { EntityRepository, Repository } from "typeorm";
import { Flavors } from "../models/Flavors";

@EntityRepository(Flavors)
export default class FlavorsRepository extends Repository<Flavors> {}
