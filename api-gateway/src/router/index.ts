import { Router } from 'express'

import { HealthcheckRouter } from './healthcheck'
import {defaultRouter } from './defaultRouter'

export const Routes = Router()


Routes.use('/',defaultRouter)
Routes.use(HealthcheckRouter)

