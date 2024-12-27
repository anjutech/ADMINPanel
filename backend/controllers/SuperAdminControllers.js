import menu_group from '../models/menu_group.js';

 const  SuperAdmin =async (req, res) => {
    try {
      const groups = await menu_group.findAll();
      res.status(200).json(groups);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching groups', error:error.message });
    }
  };    

  export default SuperAdmin;

// In the routes file (e.g., routes/menu.js), import the SuperAdmin function and apply it to the route: