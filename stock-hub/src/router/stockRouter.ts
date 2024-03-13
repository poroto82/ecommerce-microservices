import express, { Request, Response } from 'express';
import StockService from '../services/StockService';

const router = express.Router();
const stockService = new StockService()

router.get('/{productId}', async (req: Request, res: Response) => {
  try {
    const stockDb = stockService.getByProductId(parseInt(req.params.productId))
    res.json(stockDb);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

export const StockRouter = router

