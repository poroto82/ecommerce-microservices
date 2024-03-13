import express, { Request, Response } from 'express';

const router = express.Router();


router.get('/', async (_: Request, res: Response) => {
  try {
    
    res.json('todo');
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

export const StockRouter = router

