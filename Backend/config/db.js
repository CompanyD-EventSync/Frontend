// config/db.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('eventsync', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = sequelize;
