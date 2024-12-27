 export const customerDetails= async (req, res) => {
    try {
      const customers = await CustomerProfile.findAll({ limit: 1000 });
      res.json(customers);
    } catch (error) {
      console.error('Error fetching customers:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };