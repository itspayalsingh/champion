const { DataTypes } = require("sequelize")
const { seqlize } = require("../config/db");

const admin_model = seqlize.define("admins", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullname: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(32),
        allowNull: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true
    },
    admin_photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
} )

async function syncDatabase() {
    await seqlize.sync(); // Create the tables based on your model definitions
    console.log('Tables created successfully');
}

syncDatabase();

module.exports = { admin_model }