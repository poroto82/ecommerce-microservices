import express, { Request, Response } from 'express';
import StockService from '../services/StockService';
import { mapStockToDTO } from '../dtos/StockMapper';

const router = express.Router();
const stockService = new StockService()

router.post('/', async (req: Request, res: Response) => {
  try {
    const stockDb = await stockService.newStock(parseInt(req.params.productId),req.body.quantity);

    res.json(mapStockToDTO(stockDb));

  } catch (error) {
    console.error('Error fetching stock:', error);
    res.status(500).json({ error: 'Failed to fetch stock' });
  }
});



router.get('/:productId', async (req: Request, res: Response) => {
  try {
    const stockDb = await stockService.getByProductId(parseInt(req.params.productId));
    if (stockDb)
      res.json(mapStockToDTO(stockDb));
    else
      res.status(400).json();
  
  } catch (error) {
    console.error('Error fetching stock:', error);
    res.status(500).json({ error: 'Failed to fetch stock' });
  }
});



router.patch('/:productId', async (req: Request, res: Response) => {
  try {
    const stockDb = await stockService.updateQuantity(parseInt(req.params.productId),req.body.quantity);
    res.json(mapStockToDTO(stockDb));
  
  } catch (error) {
    console.error('Error fetching stock:', error);
    res.status(500).json({ error: 'Failed to fetch stock' });
  }
});

export const StockRouter = router

