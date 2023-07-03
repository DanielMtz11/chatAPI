const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Users = db.define('user',{
    id:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    username:{
        notNull: true,
        type: DataTypes.STRING(20),
    },
    email:{
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate:{
            isEmail: true,
        }
        
    },
    password:{
        allowNull:false,
        type: DataTypes.STRING,
        allowNull: false,

    },
    isConfirmed:{
        type: DataTypes.BOOLEAN,
        field: "is_confirmed",
        defaultValue: false,
    },

});

module.exports = Users;