import { User, UserCreationAttributes, UserAttributes } from '../models/User';

export class UsersService {
  async addUser(userInfo: UserCreationAttributes): Promise<UserAttributes> {
    try {
      const user = await User.create(userInfo);
      return user;
    } catch (error) {
      throw new Error('Error creating a user');
    }
  }

  async getUsers(): Promise<Array<User>> {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error('Error getting users');
    }
  }

  async getUser(userInfo: UserCreationAttributes): Promise<Array<User>> {
    try {
      return await User.findAll({ where: { id: userInfo.id }});
    } catch (error) {
      throw new Error('Error getting user');
    }
  }

  async deleteUser(userInfo: UserCreationAttributes): Promise<User | null> {
    try {
        const user = await User.findOne({ where: { id: userInfo.id }});
        
        if(user != null){
          const deleted = user;
          user?.destroy();
          return deleted;
        }else{
          return null
        }
        
    } catch (error) {
      throw new Error('Error deleting user');
    }
  }
  async updateUser(userInfo: UserCreationAttributes): Promise<User | null > {
    try {
        const user = await User.findOne({ where: { id: userInfo.id }});
        if (user !== null){
          user?.update( { name: userInfo.name });
          return user;
        }else{
          return null;
        }
    } catch (error) {
      throw new Error('Error updating user');
    }
  }
}
