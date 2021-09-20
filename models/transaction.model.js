const { Sequelize, DataTypes } = require('sequelize');

const transaction = sequelize.define('Transaction', {
  id : {
    type:DataTypes.UUID, 
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  }, 
  fromID: {
    type: DataTypes.UUID, 
    allowNull: false
  }, 
  toID: {
    type: DataTypes.UUID,
    allowNull: false,
  }, 
  amount: {
    type: DataTypes.DOUBLE, 
    allowNull: false,
  },
  operation: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
});