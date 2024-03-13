import Supplier from "../models/Stock";
import { GenericRepository } from "./GenericRepository";

export class SupplierRepository extends GenericRepository<Supplier> {
    constructor() {
      super(Supplier);
    }
  }