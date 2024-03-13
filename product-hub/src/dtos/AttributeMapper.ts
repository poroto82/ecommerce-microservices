import AttributeType from "../models/AttributeType";


export interface AttributeTypeDTO {
  id: number;
  name: string;
  isColor: boolean;
}

export function mapAttributeTypeToDto(attributeType: AttributeType): AttributeTypeDTO {
  return {
    id: attributeType.id,
    name: attributeType.name,
    isColor: attributeType.isColor
  };
}
