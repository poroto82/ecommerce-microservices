import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import AttributeType from './AttributeType';
import Product from './Product';

@Table
export default class ProductAttribute extends Model {
  @ForeignKey(() => AttributeType)
  @Column
  attributeTypeId: number;

  @BelongsTo(() => AttributeType)
  attributeType: AttributeType;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column
  value: string;
}