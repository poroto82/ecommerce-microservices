import express, { Request, Response } from 'express';

import { mapPriceToDTO } from '../mappers/PriceMapper';
import PriceService from '../services/PriceService';


const router = express.Router();
const priceService = new PriceService()

router.post('/', async (req: Request, res: Response) => {
  try {
    const priceDb = await priceService.newPrice(parseInt(req.params.productId),req.body.priceWithouTax, req.body.tax);

    res.json(mapPriceToDTO(priceDb));

  } catch (error) {
    console.error('Error fetching stock:', error);
    res.status(500).json({ error: 'Failed to fetch stock' });
  }
});



router.get('/:productId', async (req: Request, res: Response) => {
  try {
    const priceDb = await priceService.getByProductId(parseInt(req.params.productId));
    if (priceDb)
      res.json(mapPriceToDTO(priceDb));
    else
      res.status(400).json();
  
  } catch (error) {
    console.error('Error fetching stock:', error);
    res.status(500).json({ error: 'Failed to fetch stock' });
  }
});



router.patch('/:productId', async (req: Request, res: Response) => {
  try {
    const priceDb = await priceService.updatePrice(parseInt(req.params.productId),req.body.priceWithouTax, req.body.tax);
    res.json(mapPriceToDTO(priceDb));
  
  } catch (error) {
    console.error('Error fetching stock:', error);
    res.status(500).json({ error: 'Failed to fetch stock' });
  }
});

export const StockRouter = router

