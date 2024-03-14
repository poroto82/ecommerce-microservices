import Stock from "../models/Stock";
import { StockRepository } from "../repositories/StockRepository";
import RabbitMQService from "./RabbitMQService";


export default class StockService {

    private stockRepository: StockRepository;

    constructor() {
        this.stockRepository = new StockRepository();
    }
    
    public getByProductId(productId: number): Promise<Stock | null> {
        return this.stockRepository.getByProductId(productId);
    }

    public async newStock(productId: number, quantity: number): Promise<Stock> {
        const stock = new Stock({idProduct: productId, quantity: quantity})
        const stockDb = await this.stockRepository.create(stock)
        return stockDb;
    }

    public async updateQuantity(productId: number, quantity: number, publishQueue: boolean = true): Promise<Stock> {
        const stock = await this.stockRepository.getByProductId(productId);
        if (stock === null){
            throw new Error('Theres no stock on DB for product '+productId)
        }
        stock.quantity = quantity
        stock.save()
        
        if (publishQueue){
            const rabbitmqService = new RabbitMQService('amqp://rabbitmq');
            rabbitmqService.sendMessage('STOCKUPDATE', JSON.stringify((stock)))
        }
        
        return stock;
    }
}