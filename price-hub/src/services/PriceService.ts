import Price from "../models/Price";
import { PriceRepository } from "../repositories/PriceRepository";
import RabbitMQService from "./RabbitMQService";

export default class PriceService {

    private priceRepository: PriceRepository;

    constructor() {
        this.priceRepository = new PriceRepository();
    }

    public getByProductId(productId: number): Promise<Price | null> {
        return this.priceRepository.getById(productId);
    }

    public async newPrice(productId: number, priceWithouTax: number, tax: number): Promise<Price> {
        const price = new Price({ idProduct: productId, priceWithTax: this.priceWithTax(priceWithouTax, tax), priceWithouTax: priceWithouTax })
        const priceDb = await this.priceRepository.create(price)
        return priceDb;
    }

    public async updatePrice(productId: number, priceWithouTax: number, tax: number, publishQueue = true): Promise<Price> {
        const price = await this.priceRepository.getById(productId);
        if (price === null) {
            throw new Error('Theres no Price on DB for product ' + productId)
        }
        price.priceWithouTax = priceWithouTax
        price.priceWithTax = this.priceWithTax(priceWithouTax, tax)
        price.save()

        //Publish and save history?
        if (publishQueue) {
            const rabbitmqService = new RabbitMQService('amqp://rabbitmq');
            rabbitmqService.sendMessage('PRICEUPDATE', JSON.stringify((price)))
        }

        return price;
    }

    private priceWithTax(priceWithouTax: number, tax: number): number {
        const taxAmount = (priceWithouTax * tax) / 100;
        return priceWithouTax + taxAmount
    }
}