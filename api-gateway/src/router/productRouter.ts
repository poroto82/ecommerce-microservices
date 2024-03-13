import express, { Request, Response } from 'express';
import getAllProducts from '../services/OrchestratorService';


const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
    try {
      const products = await getAllProducts()
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
});

export const ProductRouter = router
