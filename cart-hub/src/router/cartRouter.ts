import express, { Request, Response } from 'express';
import Logger from '../logger'
import CartService from '../services/CartService';
import { mapCartToDTO, mapDTOToDomain } from '../mappers/CartMapper';
import { CartDTO } from '../dtos/CartDTO';
import { validateDto } from '../middleware/validation';

const router = express.Router();
const cartService = new CartService()

router.get('/:cartId', async (req: Request, res: Response) => {
  try {
    const cart = await cartService.getCart(req.params.cartId)
    if (cart === null)
      res.json('cart not found',404)
    else
      res.json(mapCartToDTO(cart))

  } catch (error) {
    Logger.error('Error fetching cart:', JSON.stringify(error));
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

router.put('/:cartId', async (req: Request, res: Response) => {
  try {
    const cart = await cartService.saveCart(mapDTOToDomain(req.body))
    if (cart === null)
      res.json('cart not found',404)
    else
      res.json(mapCartToDTO(cart))

  } catch (error) {
    Logger.error('Error fetching cart:', JSON.stringify(error));
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

router.post('/', validateDto(CartDTO), async (req: Request, res: Response) => {
  try {
    const cart = await cartService.saveCart(mapDTOToDomain(req.body))
    res.json(mapCartToDTO(cart))
  
  } catch (error) {
    Logger.error('Error fetching cart:', JSON.stringify(error));
    res.status(500).json({ error: 'Failed to save cart' });
  }
});


export const CartRouter = router

