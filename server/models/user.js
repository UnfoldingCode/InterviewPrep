// models/user.js

// Library req.
const { sequelize, DataTypes } = require ('sequelize');
// User Model
module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
    },
        password: {
            type: DataTypes.STRING,
            allowNULL: false,
    },
        email: {
            type: DataTypes.STRING,
            allowNULL: false,
            unique: true
    },
},
    {
        collection: 'User',
    },
    User.hasMany(Note, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    }),
);
return User;
}
