import Stock from "../models/Stock";
import { GenericRepository } from "./GenericRepository";

export class StockRepository extends GenericRepository<Stock> {
    constructor() {
      super(Stock);
    }

    public async getByProductId(productId: number): Promise<Stock | null>{
      return Stock.findOne({
        where: {
          idProduct: productId
        }
      })
    }
  }