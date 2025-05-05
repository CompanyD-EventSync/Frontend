/*
// models/User.js (Sequelize version)
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  role: { type: DataTypes.ENUM("USER", "ADMIN"), defaultValue: "USER" }
});
module.exports = User;
*/

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: { type: DataTypes.ENUM("USER", "ADMIN"), defaultValue: "USER" }
});
module.exports = User;