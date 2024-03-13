import { Router } from 'express'

import { HealthcheckRouter } from './healthcheck'
import { createProxyMiddleware } from 'http-proxy-middleware'


export const Routes = Router()


Routes.use('/products',createProxyMiddleware({
    target: 'http://product-hub:3000',
    changeOrigin: true
}))
Routes.use(HealthcheckRouter)

