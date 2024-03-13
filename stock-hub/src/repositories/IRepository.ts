import { Model } from 'sequelize-typescript';

export interface IRepository<T extends Model> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | null>;
  create(entity: T): Promise<T>;
  update(id:number, entity: T): Promise<T | null>;
  delete(id: number): Promise<boolean>;
}