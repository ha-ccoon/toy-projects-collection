import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbconfig.js';

const Sequence = sequelize.define(
  'SEQUENCES',
  {
    name: {
      type: DataTypes.STRING(32),
    },
    currval: {
      type: DataTypes.BIGINT,
    },
  },
  {
    timestamps: false,
  }
);

// Sequence.sync({ alter: true })
//   .then(() => {
//     console.log("Sequence table has been updated");
//   })
//   .catch((err) => {
//     console.error("Sequence table:", err);
//   });

export default Sequence;
