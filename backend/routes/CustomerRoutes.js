import { Router } from 'express';
import { customerDetails } from '../controllers/customerDetails.js';
const router = Router();

router.post('/customerDetails', customerDetails);

export default router;
