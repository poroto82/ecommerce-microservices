import Product from "../models/Product";
import { ProductVariantDTO, mapProductVariantToDto } from "./ProductVariantMapper";

export interface ProductDTO {
  id: number;
  title: string;
  description: string;
  ean: string;
  supplier: string;
  manufacturer: string;
  categories: string[];
  variants: ProductVariantDTO[];
}

export function mapProductToDto(product:Product):ProductDTO{
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    ean: product.ean,
    supplier: product.supplier.name,
    manufacturer: product.manufacturer.name,
    categories: product.categories.map(c=>c.name),
    variants: product.variants.map(v=>mapProductVariantToDto(v))
  }
}