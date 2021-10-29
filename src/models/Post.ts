import { DataTypes, Model, Sequelize, Optional } from 'sequelize'
import { ModelInitializer } from './ModelInitializer';


export interface PostAttributes {
  id: number;
  text?: string;
  UserId?: number;
}

export interface PostCreationAttributes extends Optional<PostAttributes, "id"> {
}

export class Post extends Model<PostAttributes, PostCreationAttributes> {
  // Not nulleable attributtes
  public id!: number;
  public text!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public UserId!: number;
}

export class PostModelInitializer implements ModelInitializer {

  constructor(private client: Sequelize) {};
  
  initialize(): void {
    Post.init({

      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      text: {
        allowNull: false,
        type: new DataTypes.STRING(128),
      },
      UserId:{
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    }, {

      sequelize: this.client, 
      modelName: 'Post' 
    });
  }
};
