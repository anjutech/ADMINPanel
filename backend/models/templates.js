const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templates', {
    template_id: {
      autoIncrement: true,
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    trai_template_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    template_text: {
      type: DataTypes.STRING(4000),
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
    },
    template_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "explicit"
    }
  }, {
    sequelize,
    tableName: 'templates',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_templates",
        unique: true,
        fields: [
          { name: "template_id" },
        ]
      },
    ]
  });
};
