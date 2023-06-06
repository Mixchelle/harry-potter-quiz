import { DataTypes, Model } from 'sequelize';
import db from './';

export interface UserAttributes {
  id?: number;
  username: string;
  email: string;
  password: string;
  house: string;
  avatar: string;
  birthdate: Date;
}

class User extends Model<UserAttributes> {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public house!: string;
  public avatar!: string;
  public birthdate!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    modelName: 'User',
    tableName: 'users',
  },
);

export default User;
