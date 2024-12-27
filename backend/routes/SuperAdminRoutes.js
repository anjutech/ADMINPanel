import { Router } from 'express';
import SuperAdmin from '../controllers/SuperAdminControllers.js'
import refreshToken from '../middlewares/refreshToken.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';
const router = Router();

router.get('/', refreshToken,roleMiddleware("SuperAdmin"),SuperAdmin);

export default router;
