import express, { Request, Response } from 'express';
import StockService from '../services/StockService';
import { mapStockToDTO } from '../dtos/StockMapper';
import RabbitMQService from '../services/RabbitMQService';

const router = express.Router();
const stockService = new StockService()

router.get('/:productId', async (req: Request, res: Response) => {
  try {
    const stockDb = await stockService.getByProductId(parseInt(req.params.productId));

    const rabbitmqService = new RabbitMQService('amqp://rabbitmq');
    rabbitmqService.sendMessage('cola1','mensaej1')

    if (stockDb !== null) {
      res.json(mapStockToDTO(stockDb));
    } else {
      throw new Error('Stock not found');
    }
  } catch (error) {
    console.error('Error fetching stock:', error);
    res.status(500).json({ error: 'Failed to fetch stock' });
  }
});

export const StockRouter = router

