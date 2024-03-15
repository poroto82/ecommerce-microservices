import { IsArray, IsNumber } from "class-validator";
import { ProductDTO } from "./ProductDTO";


export class CartDTO {
  @IsNumber()
  idCart: number;
  @IsNumber()
  idCustomer: number;
  @IsArray()
  products: ProductDTO[]

  constructor(data: Partial<CartDTO>) {
    Object.assign(this, data);
  }
}
