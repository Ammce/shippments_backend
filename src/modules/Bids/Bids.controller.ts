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
            res.status(201).json(data);
        } catch (error) {
            next(error);
        }
    }

    public async updateBid(req: Request, res: Response, next: NextFunction) {
        try {
            const { amount } = req.body;
            const { bidId } = req.params;
            const data = await this.bidsLogic.updateBid(bidId, { amount: +amount });
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    public async deleteBid(req: Request, res: Response, next: NextFunction) {
        try {
            const { bidId } = req.params;
            const data = await this.bidsLogic.deleteBid(bidId);
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    public async getAllBids(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("OVDE SAm")
            const data = await this.bidsLogic.getAllBids();
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
}