import { Sequelize } from 'sequelize';
import { SQLConfigFactory } from './SQLClientConfigFactory';
import { SQLConfig } from './SQLConfig';
import { registerSQLModels } from '../../../models';
import { ClientFactory } from '../ClientFactory';

class SQLClientFactory implements ClientFactory<Sequelize> {
  private client: Sequelize;

  constructor(config: SQLConfig) {
    this.client = new Sequelize(config)
  }

  async init(): Promise<Sequelize> {
    try {
      await this.client.authenticate();
      registerSQLModels(this.client);
      return this.client.sync()
    } catch (error) {
      throw new Error("Error in the SQL DB setup")
    }
  }

  getClient(): Sequelize {
    return this.client;
  }
}

export const sqlClient = new SQLClientFactory(SQLConfigFactory.createConfig());

