import { ProductRepository } from '../repositories/ProductRepository';
import Product from '../models/Product';
import { Includeable } from 'sequelize/types';
// import { ProductVariantRepository } from '../repositories/ProductVariantRepository';
// import ProductVariant from '../models/ProductVariant';

export default class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  public async getAllProducts(): Promise<Product[]> {
    const include: Includeable[] = [
      { association: 'variants' },
      { association: 'supplier' },
      { association: 'manufacturer' },
      { association: 'categories' }

    ];
    const products = await this.productRepository.getAll(include);
    return products;
  }

}