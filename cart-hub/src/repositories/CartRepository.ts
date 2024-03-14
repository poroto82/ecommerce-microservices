import Cart from "../models/Cart";

import { GenericRepository } from "./GenericRepository";

export class CartRepository extends GenericRepository<Cart> {
    constructor() {
      super(Cart);
    }


  }