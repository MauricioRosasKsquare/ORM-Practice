import { connect } from 'mongoose';
import { ClientFactory } from '../ClientFactory';

export class MongoClientFactory implements ClientFactory<void> {  
  constructor(private url: string) {};

  async init(): Promise<void> {
    try {
      await connect(this.url);
    } catch (error) {
      console.log(error);
      throw new Error("Error in the Mongo DB setup")
    }
  }
}

export const mongoClient = new MongoClientFactory('mongodb+srv://admin:9FqpCWGLqBqkVZzv@prueba.nz1kw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
