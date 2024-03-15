import { CartDTO } from "../dtos/CartDTO";
import { Cart, Product } from "../models/Cart";


export function mapCartToDTO(cart: Cart): CartDTO {
    const { id, products } = cart; // Desestructura las propiedades del carrito

    const mappedProducts = products.map((product: Product) => ({
        idProduct: product.idProduct,
        quantity: product.quantity
    }));

    return new CartDTO({ idCart: id, products: mappedProducts });
}


export function mapDTOToDomain(dto: CartDTO): Cart {
    // Mapeo manual de los productos
    const products: Product[] = dto.products.map(productDTO => ({
        idProduct: productDTO.idProduct,
        quantity: productDTO.quantity,
        priceUnit: 0 // Puedes establecer el precio unitario como desees, o recuperarlo de alguna fuente
    }));

    // Crear una instancia del modelo de dominio Cart
    const cart: Cart = {
        id: dto.idCart,
        idCustomer: dto.idCustomer, // Puedes establecer el id del cliente como desees, o recuperarlo de alguna fuente
        products: products
    };

    return cart;
}