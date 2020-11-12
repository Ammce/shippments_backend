import { Router } from 'express';

import { bidsController } from './index';

const router = Router();

router.post('/', bidsController.createBid.bind(bidsController));
router.patch('/:bidId', bidsController.updateBid.bind(bidsController));
router.delete('/:bidId', bidsController.deleteBid.bind(bidsController));

export default router;