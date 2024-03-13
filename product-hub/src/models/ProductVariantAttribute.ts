import { AllowNull, BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import AttributeType from "./AttributeType";
import ProductVariant from "./ProductVariant";

@Table
export default class ProductVariantAttribute extends Model {
  @ForeignKey(() => AttributeType)
  @AllowNull(false)
  @Column
  attributeTypeId: number;

  @BelongsTo(() => AttributeType)
  attributeType: AttributeType;

  @ForeignKey(() => ProductVariant)
  @AllowNull(false)
  @Column
  productVariantId: number;

  @BelongsTo(() => ProductVariant)
  productVariant: ProductVariant;

  @Column
  value: string;
}