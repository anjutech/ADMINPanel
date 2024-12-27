
const roleMiddleware = (...allowedRoles) => {
  return (req,res,next) => {
    if(!allowedRoles.includes(req.admin_master.admin_type)) {
      return res.status(403).json({ message: 'Unauthorized Access' });
    }
    next();
  };
}

export default roleMiddleware
