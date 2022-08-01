const { DataTypes } = require("sequelize");
const db = require("../database/connectdb");

const User = db.define("Admin", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;