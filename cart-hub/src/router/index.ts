import { Router } from 'express'

import { HealthcheckRouter } from './healthcheck'
import {StockRouter } from './cartRouter'

export const Routes = Router()
Routes.use('/',StockRouter)
Routes.use(HealthcheckRouter)

