import Manufacturer from "../models/Manufacturer";
import { GenericRepository } from "./GenericRepository";

export class ManufacturerRepository extends GenericRepository<Manufacturer> {
    constructor() {
      super(Manufacturer);
    }
  }