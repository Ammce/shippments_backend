import { DocumentType } from '@typegoose/typegoose';

import { Bids } from './Bids.model'
import { BidsInput } from './Bids.type'
import { IBidsImplementation } from './Bids.implementation'


export interface IBidsLogic {
    createBid(bid: BidsInput): Promise<DocumentType<Bids> | null>
    updateBid(bidId: string, data: { amount: number }): Promise<DocumentType<Bids> | null>
    deleteBid(bidId: string,): Promise<boolean>
    getAllBids(): Promise<DocumentType<Bids>[]>
}

class BidsLogic implements IBidsLogic {
    private bidsImplementation: IBidsImplementation
    constructor(bidsImplementation: IBidsImplementation) {
        this.bidsImplementation = bidsImplementation;
    }

    async createBid({ amount, userId, shipmentId }: BidsInput): Promise<DocumentType<Bids> | null> {
        const bid = await this.bidsImplementation.createBid({ amount, userId, shipmentId })
        return bid;
    }

    async updateBid(bidId: string, data: { amount: number }): Promise<DocumentType<Bids> | null> {
        const bid = await this.bidsImplementation.updateBid(bidId, data);
        return bid;
    }

    async deleteBid(bidId: string): Promise<boolean> {
        const deletedBid = await this.bidsImplementation.deleteBid(bidId);
        return deletedBid
    }

    async getAllBids(): Promise<DocumentType<Bids>[]> {
        const allBids = await this.bidsImplementation.getAllBids();
        return allBids
    }
}

export default BidsLogic;