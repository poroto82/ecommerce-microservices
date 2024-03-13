import Stock from "../models/Stock";
import { StockRepository } from "../repositories/StockRepository";


export default class StockService {

    private stockRepository: StockRepository;

    constructor() {
        this.stockRepository = new StockRepository();
    }
    
    public async getByProductId(productId: number): Promise<Stock | null> {
        const stock = await this.stockRepository.getByProductId(productId);
        return stock;
      }
}