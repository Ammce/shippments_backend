
import BidsModel, { Bids } from './Bids.model'
import { DocumentType } from '@typegoose/typegoose';
import { BidsInput } from './Bids.type'

export interface IBidsImplementation {
    createBid(bid: BidsInput): Promise<DocumentType<Bids> | null> | null
}

class BidsImplementation implements IBidsImplementation {
    async createBid(shipment: BidsInput): Promise<DocumentType<Bids> | null> {
        const newBid = new BidsModel(shipment)
        const savedBid = newBid.save();
        return savedBid;
    }
}

export default BidsImplementation;