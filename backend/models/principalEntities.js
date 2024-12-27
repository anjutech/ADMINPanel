const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('principalEntities', {
    PrincipalEntity_id: {
      autoIncrement: true,
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    PE_ID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PE_Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    customer_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'principalEntities',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_principalEntities",
        unique: true,
        fields: [
          { name: "PrincipalEntity_id" },
        ]
      },
    ]
  });
};
