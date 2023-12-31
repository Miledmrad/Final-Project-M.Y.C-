const {DataTypes} = require("sequelize");
const sequelize = require("../../../SoftwareDownloader/Backend/DB/configSqlz");
const User = require("./User");


const Country = sequelize.define('Country', {
    country_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    country_name:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    country_abbr:{
        type: DataTypes.STRING(6),
        allowNull: false,
    },
    country_code:{
        type: DataTypes.STRING(4),
        allowNull: true,
    },
    
},{
    tableName: "country",
    createdAt: false,
    updatedAt: false,
}
);




module.exports = Country;