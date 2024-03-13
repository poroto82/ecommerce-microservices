import ProductAttribute from "../models/ProductAttribute";

export interface ProductAttributeDTO {
  id: number;
  attributeType: string;
  value: string;
}

export function mapProductAttributeToDto(productAttribute: ProductAttribute): ProductAttributeDTO {
  return {
    id: productAttribute.id,
    attributeType: productAttribute.attributeType.name,
    value: productAttribute.value,
  };
}
