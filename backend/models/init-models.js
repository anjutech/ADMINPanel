var DataTypes = require("sequelize").DataTypes;
var _ANJANI = require("./ANJANI");
var _admin_master = require("./admin_master");
var _customer_details = require("./customer_details");
var _customer_profile = require("./customer_profile");
var _dnd_numbers = require("./dnd_numbers");
var _group_master = require("./group_master");
var _group_trans = require("./group_trans");
var _header_template_map = require("./header_template_map");
var _headers = require("./headers");
var _menu_group = require("./menu_group");
var _menu_master = require("./menu_master");
var _menu_trans = require("./menu_trans");
var _principalEntities = require("./principalEntities");
var _route_master = require("./route_master");
var _templates = require("./templates");

function initModels(sequelize) {
  var ANJANI = _ANJANI(sequelize, DataTypes);
  var admin_master = _admin_master(sequelize, DataTypes);
  var customer_details = _customer_details(sequelize, DataTypes);
  var customer_profile = _customer_profile(sequelize, DataTypes);
  var dnd_numbers = _dnd_numbers(sequelize, DataTypes);
  var group_master = _group_master(sequelize, DataTypes);
  var group_trans = _group_trans(sequelize, DataTypes);
  var header_template_map = _header_template_map(sequelize, DataTypes);
  var headers = _headers(sequelize, DataTypes);
  var menu_group = _menu_group(sequelize, DataTypes);
  var menu_master = _menu_master(sequelize, DataTypes);
  var menu_trans = _menu_trans(sequelize, DataTypes);
  var principalEntities = _principalEntities(sequelize, DataTypes);
  var route_master = _route_master(sequelize, DataTypes);
  var templates = _templates(sequelize, DataTypes);


  return {
    ANJANI,
    admin_master,
    customer_details,
    customer_profile,
    dnd_numbers,
    group_master,
    group_trans,
    header_template_map,
    headers,
    menu_group,
    menu_master,
    menu_trans,
    principalEntities,
    route_master,
    templates,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
