const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

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
      type: DataTypes.BLOB('long'),
    },
  },
  {
    sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true,
    tableName: 'upload',
    modelName: 'upload',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

Upload.sync({ alter: true })
  .then(() => {
    console.log('Upload table has been updated');
  })
  .catch((err) => {
    console.error('Upload table:', err);
  });

module.exports = Upload;
