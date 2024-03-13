import express, { Request, Response } from 'express';
import getAllProducts from '../services/OrchestratorService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      // Calcular el índice de inicio y el índice de fin para la paginación
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      
      const products = await getAllProducts(startIndex, endIndex)
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
});

export const ProductRouter = router
