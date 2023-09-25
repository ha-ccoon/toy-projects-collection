import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbconfig.js';
import Post from './Post.js';

class Upload extends Model {}

Upload.init(
  {
    upload_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'upload',
    modelName: 'upload',
  }
);

// Define Association
Post.hasMany(Upload, {
  foreignKey: {
    name: 'post_id',
  },
});

Upload.belongsTo(Upload, {
  foreignKey: {
    name: 'post_id',
  },
});

// Upload.sync({ alter: true })
//   .then(() => {
//     console.log("Upload table has been updated");
//   })
//   .catch((err) => {
//     console.error("Upload table:", err);
//   });

export default Upload;
