import express, { Request, Response } from 'express';
import Logger from '../logger'
import Cart from '../models/Cart';

const router = express.Router();


router.get('/', async (_: Request, res: Response) => {
  try {
    
    const newProduct = new Cart({
      idCustomer: 1,
      products:[{
        idProduct: 3,
        quantity: 2,
        priceUnit: 3
      }
      ]
    });

    await newProduct.save()
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

