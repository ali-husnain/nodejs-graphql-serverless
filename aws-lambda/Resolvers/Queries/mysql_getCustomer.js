let common = require("../Common/mysql_common");

const Sequelize = require('sequelize');

exports.func = async (_, { id }) => {

  const config = {
    "username": process.env.MYSQL_DB_USERNAME,
    "password": process.env.MYSQL_DB_PASSWORD,
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_DB_HOST,
    "dialect": "mysql",
    "pool": {
      "max": 2,
      "min": 1,
      "acquire": 30000,
      "idle": 10000
    }
  }

  const sequelize = new Sequelize(config.database, config.username, config.password, config);

  let resp = await common.getCustomer(sequelize, id);

  sequelize.close();
  
  return resp
};
