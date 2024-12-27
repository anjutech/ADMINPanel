const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_master', {
    group_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    group_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    customer_id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'group_master',
    schema: 'dbo',
    timestamps: false
  });
};
