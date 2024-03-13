import { Router } from 'express'

import { HealthcheckRouter } from './healthcheck'
import {StockRouter } from './stockRouter'

export const Routes = Router()
Routes.use('/',StockRouter)
Routes.use(HealthcheckRouter)

