import { CartDTO } from "../dtos/CartDTO";
import Cart from "../models/Cart";



export function mapCartToDTO(cart: Cart): CartDTO {
    return {
        idProduct: cart.idProduct ,
        quantity: cart.quantity
    };
}
