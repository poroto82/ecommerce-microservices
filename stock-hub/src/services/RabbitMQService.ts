import amqp, { Channel, Connection, Message } from 'amqplib';
import Logger from '../logger'
class RabbitMQService {
    private connection: Connection | null = null;
    private channel: Channel | null = null;

    constructor(private readonly uri: string) {}

    async sendMessage(queue: string, message: string): Promise<void> {
        if (!this.connection) {
            await this.connect();
        }

        if (!this.channel) {
            throw new Error('RabbitMQ channel not initialized');
        }

        try {
            await this.channel.assertQueue(queue);
            await this.channel.sendToQueue(queue, Buffer.from(message));
            Logger.info(`Message sent to queue ${queue}: ${message}`);
        } catch (error) {
            Logger.error(`Error sending message to queue ${queue}:`, error);
            throw error;
        }
    }

    private async connect(): Promise<void> {
        try {
            this.connection = await amqp.connect(this.uri);
            this.channel = await this.connection.createChannel();
            Logger.info('Connected to RabbitMQ');
        } catch (error) {
            Logger.error('Error connecting to RabbitMQ:', error);
            throw error;
        }
    }


    async subscribe(queue: string, callback: (msg: Message | null) => void): Promise<void> {
        if (!this.connection) {
            await this.connect();
        }
    
        if (!this.channel) {
            throw new Error('RabbitMQ channel not initialized');
        }
    
        try {
            await this.channel.assertQueue(queue);
            await this.channel.consume(queue, callback, { noAck: true });
            Logger.info(`Subscribed to queue ${queue}`);
        } catch (error) {
            Logger.error(`Error subscribing to queue ${queue}:`, error);
            throw error;
        }
    }

    async close(): Promise<void> {
        if (this.connection) {
            await this.connection.close();
            Logger.info('Disconnected from RabbitMQ');
        }
    }
}

export default RabbitMQService;