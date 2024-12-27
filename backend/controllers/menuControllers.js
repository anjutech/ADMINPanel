import menu_group from '../models/menu_group.js';
import menu_master from '../models/menu_master.js';
import menu_trans from '../models/menu_trans.js';

export const InsertMenuGroup = async (req, res) => {
    const { group_name } = req.body;
    
    if (!group_name) {
      return res.status(400).json({ message: 'Group name is required' });
    }
  
    try {
      const newGroup = await menu_group.create({ group_name });
      res.status(201).json({ message: 'Group added successfully', group: newGroup });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error inserting group', error: error.message });
    }
  };

  export const  GetMenuGroup =async (req, res) => {
    try {
      const groups = await menu_group.findAll();
      res.status(200).json(groups);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching groups', error:error.message });
    }
  };
  

  export const insertMenuMaster = async (req, res) => {
    const { menu_url, menu_display_name, srl_number, is_active, menu_group_id } = req.body;
  
    if (!menu_url || !menu_display_name || !srl_number || !is_active ||!menu_group_id) {
      return res.status(400).json({ message: 'All fields are required'  });
    }
  
    try {
      const newMenu = await menu_master.create({
        menu_url,
        menu_display_name,
        srl_number,
        is_active,
        menu_group_id
      });
      res.status(201).json({ message: 'Menu added successfully', menu: newMenu });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error inserting menu', error });
    }
  };

export const getMenuMaster = async (req, res) => {
    try {
      const menus = await menu_master.findAll({
        limit: 1000,
      });
      res.status(200).json(menus);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching menus', error });
    }
  };

  export const insertMenuTrans = async (req, res) => {
    const { menu_id, admin_id } = req.body;
  
    if (!menu_id || !admin_id) {
      return res.status(400).json({ message: 'Menu ID and Admin ID are required' });
    }
  
    try {
      const newTransaction = await menu_trans.create({
        menu_id,
        admin_id,
      });
      res.status(201).json({ message: 'Transaction added successfully', transaction: newTransaction });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error inserting transaction', error });
    }
  };


 export const getMenuTrans = async (req, res) => {
    try {
      const transactions = await menu_trans.findAll({
        limit: 1000,
      });
      res.status(200).json(transactions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching transactions', error });
    }
  };