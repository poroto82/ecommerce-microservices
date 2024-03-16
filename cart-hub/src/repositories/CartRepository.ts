import { CartModel, Cart } from '../models/Cart'

// Repositorio para operaciones relacionadas con los carritos
export const CartRepository = {
    // Crea un nuevo carrito en la base de datos
    async createCart(cart: Cart): Promise<Cart> {
        const newCart = new CartModel(cart);
        return await newCart.save();
    },

    // Obtiene todos los carritos de la base de datos
    async getAllCarts(): Promise<Cart[]> {
        return await CartModel.find().exec();
    },

    // Obtiene un carrito por su ID de la base de datos
    async getCartById(cartId: string): Promise<Cart | null> {
        return await CartModel.findById(cartId).exec();
    },

    // Actualiza un carrito en la base de datos
    async updateCart(updatedCart: Cart): Promise<Cart> {
        return await CartModel.findByIdAndUpdate(updatedCart.id, updatedCart, { new: true }).exec();
    },

    // Elimina un carrito de la base de datos
    async deleteCart(cartId: string): Promise<Cart | null> {
        return await CartModel.findByIdAndDelete(cartId).exec();
    }
};