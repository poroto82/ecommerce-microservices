import ProductVariant from "../models/ProductVariant";

export interface ProductVariantDTO {
  id: number;
  attribute: string;
  value: string;
}

export function mapProductVariantToDto(productVariant:ProductVariant):ProductVariantDTO{
  return {
    id: productVariant.id,
    attribute: productVariant.id,
    value: productVariant.value
  }
}