import { IsNumber } from "class-validator";


export class ProductDTO {
  @IsNumber()
  idProduct: number
  @IsNumber()
  quantity: number

  
  constructor(data: Partial<ProductDTO>) {
    Object.assign(this, data);
  }
}
