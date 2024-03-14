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

    /**
     * Bootstrap the application here and handle any errors events gracefully.
     */
    const app = await ServerApp.getInstance()

    const srv = app.listen(Config.SERVER_PORT)

    Logger.info('Environment: ' + Config.NODE_ENV)
    Logger.info('Server is listening on port ' + Config.SERVER_PORT)

    srv.on('error', (error) => {
      Logger.error(error.message)
    })

    const rabbitMQService = new RabbitMQService('amqp://rabbitmq');

    
    // Suscríbete a la cola deseada
    await rabbitMQService.subscribe('price-queue', (msg) => {
        // Aquí puedes manejar los mensajes recibidos de la cola
        if (msg !== null) {
            console.log('Mensaje recibido:', msg.content.toString());
        }
    });

  } catch (err) {
    Logger.error(err)
    process.exit(1)
  }
})()
