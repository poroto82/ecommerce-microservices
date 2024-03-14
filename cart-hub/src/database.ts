import mongoose, { ConnectOptions } from "mongoose";
import config from "./config";

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.DB_URI, {
      minPoolSize: config.DB_POOL_MIN_CONNECTIONS,
      maxPoolSize: config.DB_POOL_MAX_CONNECTIONS

    }as ConnectOptions);

    console.log(`MongoDB Connected`);
  } catch (error:any) {
    console.error(`Fallaste papi: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;