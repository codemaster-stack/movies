const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'video_player',
    'root',
    '', {
        dialect: 'mysql',
        host: 'localhost',
    }
)

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
}

module.exports = { connectDb, sequelize };