import { EntityRepository, Repository } from "typeorm";
import { Box } from "../models/Box";

@EntityRepository(Box)
export default class BoxRepository extends Repository<Box> {}
