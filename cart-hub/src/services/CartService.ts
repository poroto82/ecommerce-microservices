import { Cart } from "../models/Cart";
import { CartRepository } from "../repositories/CartRepository";
//import RabbitMQService from "./RabbitMQService";

export default class CartService {

    async saveCart(cart: Cart): Promise<Cart>{

       return await CartRepository.createCart(cart)
    }
}