import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbconfig.js';

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login_id: { type: DataTypes.STRING, allowNull: false },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.STRING,
    },
    deleted_by: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'user',
    modelName: 'user',
  }
);

User.sync({ alter: true })
  .then(() => {
    console.log('User table has been updated');
  })
  .catch((err) => {
    console.error('User table:', err);
  });

export default User;
