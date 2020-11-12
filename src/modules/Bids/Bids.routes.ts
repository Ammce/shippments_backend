import { Router } from 'express';

import { bidsController } from './index';

const router = Router();

router.post('/', bidsController.createBid.bind(bidsController));

export default router;