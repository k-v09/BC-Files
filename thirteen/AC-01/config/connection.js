const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'library_db',
  'root',
  'Magic_MAN!09',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
