import { Router } from 'express';
import { InsertMenuGroup, GetMenuGroup } from '../controllers/menuControllers.js';

import { insertMenuMaster, getMenuMaster } from '../controllers/menuControllers.js';

import { insertMenuTrans, getMenuTrans } from '../controllers/menuControllers.js';

const router = Router();
// menu group
router.post('/InsertMenuGroup', InsertMenuGroup);
router.get('/GetMenuGroup',GetMenuGroup);


// menu master
router.post('/insertMenuMaster', insertMenuMaster);
router.get('/getMenuMaster',getMenuMaster);
 
// menu trans
router.post('/insertMenuTrans', insertMenuTrans);
router.get('/getMenuTrans', getMenuTrans);



export default router;
