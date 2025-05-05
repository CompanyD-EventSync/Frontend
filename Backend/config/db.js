const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('eventsync', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;