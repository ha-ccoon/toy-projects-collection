import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbconfig.js';
import User from './User.js';
import Board from './Board.js';

class Post extends Model {}

Post.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sort_id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
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
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'post',
    modelName: 'post',
  }
);

// Define Association
User.hasMany(Post, {
  foreignKey: {
    name: 'user_id',
  },
});

Post.belongsTo(User, {
  foreignKey: {
    name: 'user_id',
  },
});

Board.hasMany(Post, {
  foreignKey: {
    name: 'board_id',
  },
});

Post.belongsTo(Board, {
  foreignKey: {
    name: 'board_id',
  },
});

// Post.sync({ alter: true })
//   .then(() => {
//     console.log("Post table has been updated");
//   })
//   .catch((err) => {
//     console.error("Post table:", err);
//   });

export default Post;
