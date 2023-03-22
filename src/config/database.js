import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:', {
    // Choose one of the logging options
    // logging: console.log,                  // Default, displays the first parameter of the log function call
    logging: (...msg) => console.log(msg), // Displays all log function call parameters
    // logging: false,                        // Disables logging
    // logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
    // logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports.database = sequelize