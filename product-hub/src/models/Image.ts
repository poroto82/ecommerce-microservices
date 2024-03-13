import { Table, Column, Model } from 'sequelize-typescript'

@Table
export default class Image extends Model {
  @Column
  location: string

  @Column
  description: string

}
