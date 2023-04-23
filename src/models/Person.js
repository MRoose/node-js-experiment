const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../config/database.js");

class Person extends Model { }

Person.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        lastName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        age: DataTypes.INTEGER
    },
    {
        sequelize,
        modelName: 'Person',
        tableName: 'persons',
    }
);

module.exports.Person = Person