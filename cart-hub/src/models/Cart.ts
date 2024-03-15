
import mongoose, { Schema,  Model } from 'mongoose';

export interface Product {
  idProduct: number;
  quantity: number;
  priceUnit: number;
}
export interface Cart{
    id: number;
    idCustomer: number;
    products: Product[];
}

// Define el esquema para los productos
const productSchema = new Schema<Product>({
    idProduct: { type: Number, required: true },
    quantity: { type: Number, required: true },
    priceUnit: { type: Number, required: true }
});

// Define el esquema para el carrito
const cartSchema = new Schema<Cart>({
    idCustomer: { type: Number, required: true },
    products: [productSchema]
});

// Compila el esquema en un modelo
export const CartModel: Model<Cart> = mongoose.model<Cart>('Cart', cartSchema);