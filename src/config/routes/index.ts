import { Application } from 'express';
import userRoutes from '../../modules/User/User.routes';

export default (app: Application) => {
    app.use('/user', userRoutes);
};