import AttributeType from "../models/AttributeType";
import { GenericRepository } from "./GenericRepository";

export class AttributeTypeRepository extends GenericRepository<AttributeType> {
    constructor() {
      super(AttributeType);
    }
  }