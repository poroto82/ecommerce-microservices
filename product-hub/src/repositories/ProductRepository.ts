
import Product from "../models/Product";
import { GenericRepository } from "./GenericRepository";

export class ProductRepository extends GenericRepository<Product> {
    constructor() {
      super(Product);
    }
  }