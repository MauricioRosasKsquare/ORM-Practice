import { Sequelize } from 'sequelize/types';
import { UserModelInitializer } from './User';
import { PostModelInitializer } from './Post';

export const registerSQLModels = (client: Sequelize) => {

  new PostModelInitializer(client).initialize();
  new UserModelInitializer(client).initialize();

}
