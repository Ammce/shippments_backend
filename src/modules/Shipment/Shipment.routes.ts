import { Router } from 'express';

import { shipmentController } from './index';

const router = Router();

router.post('/', shipmentController.createShipment.bind(shipmentController));

export default router;