const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dnd_numbers', {
    dndNo: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'dnd_numbers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_dnd_numbers",
        unique: true,
        fields: [
          { name: "dndNo" },
        ]
      },
    ]
  });
};
