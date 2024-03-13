import { Router } from 'express'
import { HealthcheckRouter } from './healthcheck'
import { ProductRouter } from './productRouter'


export const Routes = Router()

Routes.use('/products', ProductRouter)
Routes.use(HealthcheckRouter)

