import ProductVariant from "../models/ProductVariant";
import { GenericRepository } from "./GenericRepository";

export class ProductVariantRepository extends GenericRepository<ProductVariant> {
    constructor() {
      super(ProductVariant);
    }
    
  
  }