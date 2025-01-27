const { sequelize } = require('./db');

const { DataTypes } = require('sequelize');


const movies = sequelize.define('movies', {

    title: {
        type: DataTypes.STRING,
        validate: {
            max: 60,
        },
    },
    actor: {
        type: DataTypes.STRING,
        validate: {
            max: 60,
        },
    },
    year: {
        type: DataTypes.INTEGER,
        validate: {
            max: 30,
        },
    },
    genres: {
        type: DataTypes.STRING,
        validate: {
            max: 60,
        },
    },
    director: {
        type: DataTypes.STRING,
        validate: {
            max: 60,
        },
    },
    timestamp: {
        type: DataTypes.DATE,
    },
});



const users = sequelize.define('users', {

    id_istrue: {
        type: DataTypes.INTEGER,
        validate: {
            max: 10,
        },
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            max: 60,
        },
    },
    phoneNo: {
        type: DataTypes.INTEGER,
        validate: {
            max: 30,
        },
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            max: 60,
        },
    },
    location: {
        type: DataTypes.STRING,
        validate: {
            max: 60,
        },
    },
    dateOfBrith: {
        type: DataTypes.DATE,
    },
    is_complete: {
        type: DataTypes.BOOLEAN,
    },
});



//sequelize.sync()

module.exports = {movies, users}