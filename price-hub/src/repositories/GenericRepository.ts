import { Model, ModelCtor } from 'sequelize-typescript';
import { IRepository } from './IRepository';
import { BulkCreateOptions, Includeable } from 'sequelize';

export class GenericRepository<T extends Model> implements IRepository<T> {
  private model: ModelCtor<T>;

  constructor(model: ModelCtor<T>) {
    this.model = model;
  }

  public async getAll(include?: Includeable | Includeable[]): Promise<T[]> {
    return this.model.findAll({ include });
  }

  public async getById(id: number,include?: Includeable | Includeable[]): Promise<T | null> {
    return this.model.findByPk(id,{include});
  }

  public async create(entity: T): Promise<T> {
    return this.model.create(entity as any);
  }

  public async update(id:number, entity: T): Promise<T | null> {
    const existingEntity = await this.model.findByPk(id);
    if (!existingEntity) return null;

    return existingEntity.update(entity);
  }

  public async delete(id: number): Promise<boolean> {
    const deletedCount = await (this.model as any).destroy({ where: { id } });
    return deletedCount > 0;
  }

  async bulkCreate(entities: Partial<T>[], options?: BulkCreateOptions): Promise<T[]> {
    return this.model.bulkCreate(entities as any[], options);
  }
}