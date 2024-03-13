import { Table, Column, Model, ForeignKey, AllowNull, BelongsTo, BelongsToMany, DataType, HasMany } from 'sequelize-typescript';
import Supplier from './Supplier';
import Manufacturer from './Manufacturer';
import Category from './Category';
import ProductCategory from './ProductCategory';
import ProductVariant from './ProductVariant';


@Table
export default class Product extends Model {
  @Column({
    type: DataType.STRING
  })
  title: string;

  @Column
  description: string;

  @Column
  ean: string;

  @ForeignKey(() => Supplier)
  @AllowNull(false)
  @Column
  supplierId: number;

  @BelongsTo(() => Supplier)
  supplier: Supplier;

  @ForeignKey(() => Manufacturer)
  @AllowNull(false)
  @Column
  manufacturerId: number;

  @BelongsTo(() => Manufacturer)
  manufacturer: Manufacturer;

  @BelongsToMany(() => Category, () => ProductCategory)
  categories: Category[];

  @HasMany(() => ProductVariant)
  variants: ProductVariant[];
}