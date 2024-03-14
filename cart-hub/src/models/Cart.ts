import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    idProduct: { type: Number, required: true },
    quantity:{type: Number, required: true},
    priceUnit:{type:Number, required:true}
  });

// Define el esquema para tus documentos
const cartSchema = new Schema({
  idCustomer: { type: Number, required: true },
  products:[productSchema]
  
});

// Compila el esquema en un modelo
const Cart = mongoose.model('Cart', cartSchema);

export default Cart;