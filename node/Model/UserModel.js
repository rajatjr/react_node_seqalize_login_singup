const Sequelize = require("sequelize");
const db = require("../Config/Db");

const { DataTypes } = Sequelize;

const Users = db.define('rajatlive_Users',{

    Id:
    {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING
    },
    
    password: {
        type: DataTypes.STRING
    },
});

module.exports = Users;