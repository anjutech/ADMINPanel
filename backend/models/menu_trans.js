import sequelize from "../config/database.js";
import DataTypes from "sequelize";

const menu_trans= sequelize.define('menu_trans', {
    menu_trans_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'menu_trans',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_menu_trans",
        unique: true,
        fields: [
          { name: "menu_trans_id" },
        ]
      },
    ]
  });

  export default menu_trans;