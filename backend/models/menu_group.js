import sequelize from "../config/database.js";
import DataTypes from "sequelize";
const menu_group = sequelize.define('menu_group', {
    menu_group_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'menu_group',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_menu_group",
        unique: true,
        fields: [
          { name: "menu_group_id" },
        ]
      },
    ]
  });

export default menu_group;