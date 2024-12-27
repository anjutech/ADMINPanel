import sequelize from "../config/database.js";
import DataTypes from "sequelize";
const menu_master = sequelize.define('menu_master', {
    menu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    menu_url: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    menu_display_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    srl_number: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
      // defaultValue: Math.floor(100000 + Math.random() * 900000), // random 6-digit number

    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    menu_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'menu_master',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_menu_master",
        unique: true,
        fields: [
          { name: "menu_id" },
        ]
      },
    ]
  });

  export default menu_master;