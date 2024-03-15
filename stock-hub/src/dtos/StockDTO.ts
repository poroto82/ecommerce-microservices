import { IsNumber } from "class-validator";

export class  StockDTO {
  idProduct: number;
  
  @IsNumber()
  quantity: number;
}
