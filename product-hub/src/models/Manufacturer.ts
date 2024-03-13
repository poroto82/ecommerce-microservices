import { Table, Column, Model } from 'sequelize-typescript'

@Table
export default class Manufacturer extends Model {
  @Column
  name: string

}
