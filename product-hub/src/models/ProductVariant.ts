import { Table, Column, Model, ForeignKey, AllowNull, BelongsTo, HasMany } from 'sequelize-typescript'

import Product from './Product'
import ProductVariantAttribute from './ProductVariantAttribute';

@Table
export default class ProductVariant extends Model {
  @Column
  value: string;

  @ForeignKey(() => Product)
  @AllowNull(false)
  @Column
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @HasMany(() => ProductVariantAttribute)
  attributes: ProductVariantAttribute[];
}
