import { Sequelize } from 'sequelize/types';
import { User ,UserModelInitializer } from './User';
import { Post,PostModelInitializer } from './Post';

export const registerSQLModels = (client: Sequelize) => {
  
  new UserModelInitializer(client).initialize();
  new PostModelInitializer(client).initialize();
  User.hasMany(Post, {foreignKey: 'userId', sourceKey: 'id'})
  Post.belongsTo(User, {foreignKey: 'userId', targetKey: 'id'});
  
}
