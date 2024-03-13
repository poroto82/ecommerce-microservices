import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import Product from './Product';
import Category from './Category';

@Table
export default class ProductCategory extends Model {
  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
}
