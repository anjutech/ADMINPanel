import { Router } from 'express';
import {   login, register,logout } from '../controllers/AuthControllers.js';
import refreshToken from '../middlewares/refreshToken.js';
const router = Router();

router.post('/register', register);
router.post('/login',login);
router.post('/refreshToken', refreshToken);
router.post('/logout', logout);
export default router;
