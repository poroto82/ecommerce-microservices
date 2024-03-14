import { Router } from 'express'
import { HealthcheckRouter } from './healthcheck'
import { ProductRouter } from './productRouter'
import { createProxyMiddleware } from 'http-proxy-middleware'


export const Routes = Router()

Routes.use('/products', ProductRouter)

Routes.use('/cart',createProxyMiddleware({
    target: 'http://cart-hub:3000/api/healthcheck',
    changeOrigin: false
}))

Routes.use(HealthcheckRouter)

