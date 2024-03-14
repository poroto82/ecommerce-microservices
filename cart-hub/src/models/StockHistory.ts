import { Table, Column, Model } from 'sequelize-typescript'

@Table
export default class StockHistory extends Model {
  @Column
  idProduct: number

  @Column
  quantity: number

  @Column
  date: Date

}
