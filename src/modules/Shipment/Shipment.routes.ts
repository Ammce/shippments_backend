import { Router } from 'express';

import { shipmentController } from './index';

const router = Router();

router.post('/', shipmentController.createShipment.bind(shipmentController));
router.get('/', shipmentController.getAllShipments.bind(shipmentController));

export default router;