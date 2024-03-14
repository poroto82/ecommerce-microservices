import { StockDTO } from "../dtos/StockDTO";
import Stock from "../models/Stock";


export function mapStockToDTO(stock: Stock): StockDTO {
    return {
        idProduct: stock.idProduct ,
        quantity: stock.quantity
    };
}
