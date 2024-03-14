import { Router } from 'express'

import { HealthcheckRouter } from './healthcheck'
import {CartRouter } from './cartRouter'

export const Routes = Router()
Routes.use('/',CartRouter)
Routes.use(HealthcheckRouter)

