const { DataTypes } = require("sequelize");
const sequelize = require("../../../SoftwareDownloader/Backend/DB/configSqlz");
const bcrypt = require('bcrypt');
const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        user_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_dob: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        role: {
            type: DataTypes.ENUM('user', 'admin', 'superuser'),
            allowNull: true,
        }

    }, {
        tableName: "user",
        createdAt: false,
        updatedAt: false,
        hooks: {
            beforeCreate: (user) => {
                user.user_password = user.user_password && user.user_password !== "" ?
                    bcrypt.hashSync(user.user_password, 10) :
                    "";
            }
        }
    }
);


module.exports = User;