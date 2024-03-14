import Stock from "../models/Stock";

export interface StockDTO {
    idProduct: number;
    quantity: number;

}

export function mapStockToDto(stock: Stock): StockDTO {
    return {
        idProduct: stock.idProduct ,
        quantity: stock.quantity
    };
}
