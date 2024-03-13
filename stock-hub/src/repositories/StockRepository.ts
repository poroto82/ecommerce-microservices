import Stock from "../models/Stock";
import { GenericRepository } from "./GenericRepository";

export class StockRepository extends GenericRepository<Stock> {
    constructor() {
      super(Stock);
    }
  }