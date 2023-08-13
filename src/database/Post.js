import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Post extends Model {}

Post.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    deleted_by: {
      type: DataTypes.STRING,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'post',
    modelName: 'post',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

// Post.sync({ alter: true })
//   .then(() => {
//     console.log('Post table has been updated');
//   })
//   .catch((err) => {
//     console.error('Post table:', err);
//   });

export default Post;
