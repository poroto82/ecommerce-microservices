import { Cart } from "../models/Cart";
import { CartRepository } from "../repositories/CartRepository";
//import RabbitMQService from "./RabbitMQService";

export default class CartService {

    async saveCart(cart: Cart): Promise<Cart>{
        if (cart.id !== null)
            return await CartRepository.updateCart(cart)
        else
            return await CartRepository.createCart(cart)
    }

    async getCart(cartId: string): Promise<Cart | null>{
        return await CartRepository.getCartById(cartId)
    }

    
}