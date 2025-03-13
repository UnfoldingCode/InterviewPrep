// models/note.js

//library req.
const { sequelize, DataTypes } = require ('sequelize');

// Note Model
module.exports = ( sequelize, DataTypes) => {
    const Note = sequelize.define('Note',{
        title: {
            type: DataTypes.STRING,
            allowNULL: false,
            unique:true
        },
        content: {
            type: DataTypes.TEXT,
            allowNULL: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNULL: false,
        },
    },
        {
            collection: 'Note',
            timestamps: true,
        },
        Note.belongsTo(User, {
            foreignKey: 'userId',
        }),
    );
    return Note;
    }