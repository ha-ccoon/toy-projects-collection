import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const poolOptions = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: '172.19.201.76',
    dialect: 'mysql',
    timezone: '+09:00',
    pool: poolOptions,
  }
);

const mySQLClient = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection connected');
  } catch (error) {
    console.error('MySQL connection:', error);
  }
};

mySQLClient();

export default sequelize;
