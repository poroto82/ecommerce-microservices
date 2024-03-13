import { Table, Column, Model } from 'sequelize-typescript'

@Table
export default class Supplier extends Model {
  @Column
  idProduct: Number

  @Column
  quantity: Number

}
