import { DocumentType } from '@typegoose/typegoose';

import { Bids } from './Bids.model'
import { BidsInput } from './Bids.type'
import { IBidsImplementation } from './Bids.implementation'


export interface IBidsLogic {
    createBid(user: BidsInput): Promise<DocumentType<Bids> | null>
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
}

export default BidsLogic;