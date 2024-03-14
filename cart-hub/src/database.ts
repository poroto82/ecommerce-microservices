import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { Models } from './models'
import Config from './config'

export class Database {
  public static async connect(): Promise<Sequelize> {
    
    console.log(Config)
    
    const options: SequelizeOptions = {
      models: Models,
      pool: {
        max: Config.DB_POOL_MAX_CONNECTIONS,
        min: Config.DB_POOL_MIN_CONNECTIONS,
        idle: Config.DB_POOL_IDLE_CONNECTIONS,
      },
      logging: Config.NODE_ENV == 'development',
    }

    const sequelize = new Sequelize(Config.DB_URI, options)
    await sequelize.authenticate()

    if (Config.NODE_ENV == 'development') {
      await sequelize.sync({ force: false })
    }

    return sequelize
  }

}
