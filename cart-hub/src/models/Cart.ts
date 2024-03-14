import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript'

@Table
export default class Cart extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  idProduct: number

  @Column
  @Column(DataType.INTEGER)
  quantity: number

}
