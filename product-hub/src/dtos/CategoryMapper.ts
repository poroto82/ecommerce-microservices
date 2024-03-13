import Category from "../models/Category";
import { ProductDTO, mapProductToDto } from "./ProductMapper";

export interface CategoryDTO {
  id: number;
  name: string;
  products: ProductDTO[];
}

export function mapCategoryToDto(category: Category): CategoryDTO {
  return {
    id: category.id,
    name: category.name,
    products: category.products.map(p => mapProductToDto(p)),
  };
}