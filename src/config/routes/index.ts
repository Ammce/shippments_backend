import { Application } from 'express';
import userRoutes from '../../modules/User/User.routes';
import shipmentRoutes from '../../modules/Shipment/Shipment.routes';
import bidsRoutes from '../../modules/Bids/Bids.routes';

export default (app: Application) => {
    app.use('/user', userRoutes);
    app.use('/shipment', shipmentRoutes);
    app.use('/bids', bidsRoutes);
};