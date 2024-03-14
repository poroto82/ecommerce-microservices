import { Table, Column, Model, DataType, CreatedAt } from 'sequelize-typescript'

@Table
export default class PriceHistory extends Model {
  @Column
  idProduct: Number

  @Column
  @Column(DataType.FLOAT)
  priceWithTax: number

  @Column
  @Column(DataType.FLOAT)
  priceWithouTax: number

  @CreatedAt
  creationDate: Date;

}
