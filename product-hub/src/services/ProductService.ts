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

  public async getProductById(productId: number): Promise<Product | null> {
    const include: Includeable[] = [
      { association: 'variants' },
      { association: 'supplier' },
      { association: 'manufacturer' },
      { association: 'categories' } 
    ];
    const product = await this.productRepository.getById(productId, include);
    return product;
  }

  public async createProduct(productData: any): Promise<Product> {
    const createdProduct = await this.productRepository.create(productData);
    return createdProduct;
  }

  public async updateProduct(productId: number, productData: any): Promise<Product | null> {
    const product = await this.productRepository.getById(productId);
    if (product) {
      const updatedProduct = await this.productRepository.update(product.id, productData);
      return updatedProduct;
    }
    return null;
  }

  public async deleteProduct(productId: number): Promise<boolean> {
    const product = await this.productRepository.getById(productId);
    if (product) {
      const deleted = await this.productRepository.delete(product.id);
      return deleted;
    }
    return false;
  }

  // public async getProductWithVariants(productId: number): Promise<Product | null> {
  //   const include: Includeable[] = [{ association: 'variants' }, { association: 'supplier' }, { association: 'manufacturer' }, { association: 'categories' }];

  //   const product = await this.productRepository.getById(productId, include);

  //   return product;
  // }

  // async createProductWithVariants(product: Product, variants: ProductVariant[]): Promise<Product> {
  //   const createdProduct = await this.productRepository.create(product);

  //   const productId = createdProduct.id;

  //   const variantsToCreate = variants.map(variant => ({
  //     ...variant,
  //     productId: productId
  //   }));

  //   const createdVariants = await this.productVariantRepository.bulkCreate(variantsToCreate);

  //   createdProduct.variants = createdVariants;

  //   return createdProduct;
  // }
}