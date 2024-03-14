
import Price from "../models/Price";
import { GenericRepository } from "./GenericRepository";

export class PriceRepository extends GenericRepository<Price> {
    constructor() {
      super(Price);
    }

    // public getByProductId(productId: number): Promise<Price | null>{
    //   return Price.findOne({
    //     where: {
    //       idProduct: productId
    //     }
    //   })
    // }
  }