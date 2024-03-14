import { ServerApp } from './server'
import { Database } from './database'
import Logger from './logger'
import Config from './config'
import RabbitMQService from './services/RabbitMQService'

(async () => {

  try {

    /**
     * Connect to the database
     */
    await Database.connect()

    const app = await ServerApp.getInstance()

    const srv = app.listen(Config.SERVER_PORT)

    Logger.info('Environment: ' + Config.NODE_ENV)
    Logger.info('Server is listening on port ' + Config.SERVER_PORT)

    srv.on('error', (error) => {
      Logger.error(error.message)
    })

    const rabbitMQService = new RabbitMQService('amqp://rabbitmq');

    
    
    await rabbitMQService.subscribe('stock-queue', (msg) => {
        //TODO maybe reservation of stock could be done here

      
        if (msg !== null) {
            console.log('Mensaje recibido:', msg.content.toString());
        }
    });

  } catch (err) {
    Logger.error(err)
    process.exit(1)
  }
})()
