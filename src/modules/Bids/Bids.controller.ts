import { NextFunction, Request, Response } from 'express';

import { IBidsLogic } from './Bids.logic';

export default class BidsController {
    private bidsLogic: IBidsLogic
    constructor(bidsLogic: IBidsLogic) {
        this.bidsLogic = bidsLogic;
    }

    public async createBid(req: Request, res: Response, next: NextFunction) {
        try {
            const { amount, userId, shipmentId } = req.body;
            const data = await this.bidsLogic.createBid({ amount: +amount, userId, shipmentId });
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
}