import { Table, Column, Model, DataType, CreatedAt } from 'sequelize-typescript'

@Table
export default class PriceHistory extends Model {
  @Column
  idProduct: number

  @Column
  @Column(DataType.FLOAT)
  priceWithTax: number

  @Column
  @Column(DataType.FLOAT)
  priceWithouTax: number

  @CreatedAt
  creationDate: Date;

}
