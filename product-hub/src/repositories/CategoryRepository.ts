import Category from "../models/Category";
import { GenericRepository } from "./GenericRepository";

export class CategoryRepository extends GenericRepository<Category> {
    constructor() {
      super(Category);
    }
  }