import { Table, Column, Model, PrimaryKey, DataType, CreatedAt } from 'sequelize-typescript'

@Table
export default class Price extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
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
