import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

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

await sequelize.sync();