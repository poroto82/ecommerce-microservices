import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript'
import Product from './Product';
import ProductCategory from './ProductCategory';

@Table
export default class Category extends Model {
  @Column
  name: string

  @BelongsToMany(() => Product, () => ProductCategory)
  products: Product[];

}
