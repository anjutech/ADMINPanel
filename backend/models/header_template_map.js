const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('header_template_map', {
    header_template_id: {
      autoIncrement: true,
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    header_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    trai_template_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'header_template_map',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_header_template_map",
        unique: true,
        fields: [
          { name: "header_template_id" },
        ]
      },
    ]
  });
};
