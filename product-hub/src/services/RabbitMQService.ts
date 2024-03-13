import amqp, { Channel, Connection } from 'amqplib';

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
            console.log(`Message sent to queue ${queue}: ${message}`);
        } catch (error) {
            console.error(`Error sending message to queue ${queue}:`, error);
            throw error;
        }
    }

    // async subscribe(queue: string, callback: (message: Message) => void): Promise<void> {
    //     if (!this.connection) {
    //         await this.connect();
    //     }

    //     if (!this.channel) {
    //         throw new Error('RabbitMQ channel not initialized');
    //     }

    //     try {
    //         await this.channel.assertQueue(queue);
    //         await this.channel.consume(queue, callback, { noAck: true });
    //         console.log(`Subscribed to queue ${queue}`);
    //     } catch (error) {
    //         console.error(`Error subscribing to queue ${queue}:`, error);
    //         throw error;
    //     }
    // }

    private async connect(): Promise<void> {
        try {
            this.connection = await amqp.connect(this.uri);
            this.channel = await this.connection.createChannel();
            console.log('Connected to RabbitMQ');
        } catch (error) {
            console.error('Error connecting to RabbitMQ:', error);
            throw error;
        }
    }

    async close(): Promise<void> {
        if (this.connection) {
            await this.connection.close();
            console.log('Disconnected from RabbitMQ');
        }
    }
}

export default RabbitMQService;