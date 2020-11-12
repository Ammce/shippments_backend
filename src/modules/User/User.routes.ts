import { Router } from 'express';

import { userController } from './index';

const router = Router();

router.post('/', userController.createUser.bind(userController));

export default router;