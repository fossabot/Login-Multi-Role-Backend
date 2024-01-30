import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Users = db.define('TUser',{ 
    UserID :{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    validate:{
        notEmpty: true,
        }
    },
    Username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    Password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    Role:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    freezeTableName: true
});

export default Users;