import { ServerApp } from './server'

import Logger from './logger'
import Config from './config'
import RabbitMQService from './services/RabbitMQService'
import connectDatabase from './database'

(async () => {

  try {

    /**
     * Connect to the database
     */
    await connectDatabase()


    const app = await ServerApp.getInstance()
    

    const srv = app.listen(Config.SERVER_PORT)

    Logger.info('Environment: ' + Config.NODE_ENV)
    Logger.info('Server is listening on port ' + Config.SERVER_PORT)

    srv.on('error', (error) => {
      Logger.error(error.message)
    })

    const rabbitMQService = new RabbitMQService('amqp://rabbitmq');

    await rabbitMQService.subscribe('cart-queue', (msg) => {
      
        if (msg !== null) {
            Logger.info('Mensaje recibido:', msg.content.toString());
        }
    });

  } catch (err) {
    Logger.error(err)
    process.exit(1)
  }
})()
