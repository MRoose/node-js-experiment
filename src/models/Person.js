import { DataTypes, Model } from 'sequelize';

class Person extends Model { }

Person.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    age: DataTypes.INTEGER
});

module.exports.Person = Person