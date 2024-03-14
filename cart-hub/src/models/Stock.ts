import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript'

@Table
export default class Stock extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  idProduct: number

  @Column
  @Column(DataType.INTEGER)
  quantity: number

}
