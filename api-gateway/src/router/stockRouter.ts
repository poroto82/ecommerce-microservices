import express, { Request, Response } from 'express';
import ProductService from '../services/StockService';
import { mapProductToDto } from '../dtos/ProductMapper';

const router = express.Router();
const productService = new ProductService();

router.get('/', async (_: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    const productDTOs = products.map((product) => mapProductToDto(product));
    res.json(productDTOs);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await productService.getProductById(productId);
    if (product) {
      const productDTO = mapProductToDto(product);
      res.json(productDTO);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const createdProduct = await productService.createProduct(productData);
    const productDTO = mapProductToDto(createdProduct);
    res.status(201).json(productDTO);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
})

export const StockRouter = router

