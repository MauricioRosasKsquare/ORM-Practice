import Logger from '../Logger';
import { mongoClient } from './mongo/MongoClientFactory';
import { sqlClient } from './sql/SQLClientFactory';

export async function initializeDataBases(logger: Logger): Promise<void>{
  try {
    await Promise.all([
      sqlClient.init(),
      mongoClient.init()
    ]);
    logger.info('Databases initialized correctly')
  } catch (error) {
    console.log(error)
    throw new Error('Databases could not initialize correctly');
  }
};
