import menu_group from '../models/menu_group.js';

 const  ManagerAdmin =async (req, res) => {
    try {
      const groups = await menu_group.findAll();
      res.status(200).json(groups);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching groups', error:error.message });
    }
  };
  export default ManagerAdmin;