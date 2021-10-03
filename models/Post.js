const sequelize = require('../config/connection');
//const sequelize = new Sequelize('sqlite::memory');
const { Model, DataTypes } = require('sequelize');


class Post extends Model {}

Post.init (
    {
        id: {
            type: DataTypes.INTEGER,
            onDelete: "CASCADE",
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Post'
    }
);

module.exports = Post;