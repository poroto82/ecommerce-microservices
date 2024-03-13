import { Table, Column, Model } from 'sequelize-typescript'

@Table
export default class AttributeType extends Model {
  @Column
  name: string

  @Column
  isColor: boolean
}
