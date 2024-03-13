import Stock from "../models/Stock";

export interface StockDto {
  id: number;
  quantity: Number;
}

export function mapStockToDTO(stock:Stock):StockDto{
  return {
    id: stock.id,
    quantity: stock.quantity
  }
}