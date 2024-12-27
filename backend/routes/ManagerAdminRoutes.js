import { Router } from 'express';
import ManagerAdmin from '../controllers/ManagerAdminControllers.js';
import refreshToken from '../middlewares/refreshToken.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';
const router = Router();

router.get('/', refreshToken,roleMiddleware("ManagerAdmin"),ManagerAdmin);

export default router;
