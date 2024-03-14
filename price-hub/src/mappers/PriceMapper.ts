import { PriceDTO } from "../dtos/PriceDTO";
import Price from "../models/Price";


export function mapPriceToDTO(price: Price): PriceDTO {
    return {
        idProduct: price.idProduct ,
        priceWithTax: price.priceWithTax,
        priceWithoutTax: price.priceWithouTax
    };
}
