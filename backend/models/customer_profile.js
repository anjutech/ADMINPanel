const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_profile', {
    customer_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    customer_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    customer_add1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    customer_add2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PIN: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    aadhar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    aadharImage: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    PANImage: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    customer_email: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    customer_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer_profile',
    schema: 'dbo',
    timestamps: false
  });
};
