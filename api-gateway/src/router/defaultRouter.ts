import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  try {
    
    res.json('ok');
  } catch (error) {
    
    
  }
});

export const defaultRouter = router

