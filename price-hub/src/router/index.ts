import { Router } from 'express'

import { HealthcheckRouter } from './healthcheck'
import {StockRouter } from './priceRouter'

export const Routes = Router()
Routes.use('/',StockRouter)
Routes.use(HealthcheckRouter)

