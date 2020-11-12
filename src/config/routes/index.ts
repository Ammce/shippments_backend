import { Application } from 'express';
import userRoutes from '../../modules/User/User.routes';
import shipmentRoutes from '../../modules/Shipment/Shipment.routes';

export default (app: Application) => {
    app.use('/user', userRoutes);
    app.use('/shipment', shipmentRoutes);
};