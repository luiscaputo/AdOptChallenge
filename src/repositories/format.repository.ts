import { EntityRepository, Repository } from "typeorm";
import { Format } from "../models/Format";

@EntityRepository(Format)
export default class FormatRepository extends Repository<Format> {}
