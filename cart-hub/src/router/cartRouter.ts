import express, { Request, Response } from 'express';
import Logger from '../logger'

const router = express.Router();


router.post('/', async (_: Request, res: Response) => {
  try {
    

    res.json('ok')

  } catch (error) {
    Logger.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});



router.get('/:productId', async (_: Request, res: Response) => {
  try {
    res.json('ok')
  
  } catch (error) {
    Logger.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});



router.patch('/:productId', async (_: Request, res: Response) => {
  try {
    res.json('ok')
  
  } catch (error) {
    Logger.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

export const CartRouter = router

