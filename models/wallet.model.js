const { Sequelize, DataTypes } = require('sequelize');

const Wallet = sequelize.define('Wallet', {
  accountNumber : {
    type:DataTypes.UUID, 
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  }, 
  userID: {
    type: DataTypes.UUID, 
    allowNull: false
  }, 
  balance: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  }, 
});