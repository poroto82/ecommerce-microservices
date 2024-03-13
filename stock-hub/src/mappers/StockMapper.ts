import Stock from "../models/Stock";

export interface StockDTO {
    id: number;
    quantity: number;

}

export function mapStockToDto(stock: Stock): StockDTO {
    return {
        id: stock.id ,
        quantity: stock.quantity
    };
}
