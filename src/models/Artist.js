const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Artist = sequelize.define('artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    formationYear: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

module.exports = Artist;