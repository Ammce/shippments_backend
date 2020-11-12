import { NextFunction, Request, Response } from 'express';

import { IShipmentLogic } from './Shipment.logic';

export default class ShipmentController {
    private shipmentLogic: IShipmentLogic
    constructor(shipmentLogic: IShipmentLogic) {
        this.shipmentLogic = shipmentLogic;
    }

    public async createShipment(req: Request, res: Response, next: NextFunction) {
        try {
            const { from, to } = req.body;
            const data = await this.shipmentLogic.createShipment({ from, to });
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    public async getAllShipments(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.shipmentLogic.getAllShipments();
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
}