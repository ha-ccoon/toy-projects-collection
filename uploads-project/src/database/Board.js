import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbconfig.js';

class Board extends Model {}

Board.init(
  {
    board_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
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
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'board',
    modelName: 'board',
  }
);

// Board.sync({ alter: true })
//   .then(() => {
//     console.log("Board table has been updated");
//   })
//   .catch((err) => {
//     console.error("Board table:", err);
//   });

export default Board;
