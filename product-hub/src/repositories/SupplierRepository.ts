import Supplier from "../models/Supplier";
import { GenericRepository } from "./GenericRepository";

export class SupplierRepository extends GenericRepository<Supplier> {
    constructor() {
      super(Supplier);
    }
  }