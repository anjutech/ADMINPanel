const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_details', {
    details_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    route_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'customer_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_customer_details",
        unique: true,
        fields: [
          { name: "details_id" },
        ]
      },
    ]
  });
};
