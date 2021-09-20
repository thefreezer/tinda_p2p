const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  id : {
    type:DataTypes.UUID, 
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  }, 
  password: {
    type: DataTypes.STRING, 
    allowNull: false
  }, 
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  lastName: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }, 
  address: {
    type: DataTypes.STRING, 
  }
});