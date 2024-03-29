import { Router } from 'express'

import { HealthcheckRouter } from './healthcheck'
import {PriceRouter } from './priceRouter'

export const Routes = Router()
Routes.use('/',PriceRouter)
Routes.use(HealthcheckRouter)

