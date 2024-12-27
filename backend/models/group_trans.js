const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_trans', {
    group_trans_id: {
      autoIncrement: true,
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    group_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    mobile_number: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    age: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    education: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    business: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mobile_brand: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    car_brand: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    car_value: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    credit_card: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    house_owner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    house_value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'group_trans',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_group_trans",
        unique: true,
        fields: [
          { name: "group_trans_id" },
        ]
      },
    ]
  });
};
