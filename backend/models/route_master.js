const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('route_master', {
    route_id: {
      autoIncrement: true,
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    route_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    route_url: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    route_type: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    route_TM_ID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'route_master',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_route_master",
        unique: true,
        fields: [
          { name: "route_id" },
        ]
      },
    ]
  });
};
