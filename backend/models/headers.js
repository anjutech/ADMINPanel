const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('headers', {
    header_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      autoIncrement: true
    },
    header_name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'headers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_headers",
        unique: true,
        fields: [
          { name: "is_active" },
        ]
      },
    ]
  });
};
