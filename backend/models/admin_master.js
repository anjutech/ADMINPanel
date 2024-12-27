import sequelize from "../config/database.js";
import DataTypes from "sequelize";
const admin_master = sequelize.define('admin_master', {
    admin_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admin_login: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    admin_pwd: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    admin_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    admin_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    admin_email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    admin_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "U"
    },
    refresh_token:{
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_master',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_admin_master",
        unique: true,
        fields: [
          { name: "admin_id" },
        ]
      },
    ]
  });

export default admin_master;
