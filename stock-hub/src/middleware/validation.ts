import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/HttpException';

export function validateDto<T>(dtoClass: any) {
  
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(dtoClass, req.body);
    const errors: ValidationError[] = await validate(dtoInstance);
    if (errors.length > 0) {
      const message = errors.map(error => Object.values(error)).join(', ');
      next(new HttpException(400, message));
    } else {
      req.body = dtoInstance;
      next();
    }
  };
}