
import BidsModel, { Bids } from './Bids.model'
import { DocumentType } from '@typegoose/typegoose';
import { BidsInput } from './Bids.type'

export interface IBidsImplementation {
    createBid(bid: BidsInput): Promise<DocumentType<Bids> | null> | null
    updateBid(bidId: string, data: { amount: number }): Promise<DocumentType<Bids> | null>
    deleteBid(bidId: string,): Promise<boolean>
    getAllBids(): Promise<DocumentType<Bids>[]>
}

class BidsImplementation implements IBidsImplementation {
    async createBid(bid: BidsInput): Promise<DocumentType<Bids> | null> {
        const newBid = new BidsModel(bid)
        const savedBid = newBid.save();
        return savedBid;
    }

    async updateBid(bidId: string, data: { amount: number }): Promise<DocumentType<Bids> | null> {
        const bid = await BidsModel.findByIdAndUpdate(bidId, { amount: data.amount }, { useFindAndModify: false, new: true })
        return bid;
    }

    async deleteBid(bidId: string): Promise<boolean> {
        const deletedBid = await BidsModel.findOneAndRemove({ _id: bidId });
        if (deletedBid) {
            return true
        }
        return false;
    }
    async getAllBids(): Promise<DocumentType<Bids>[]> {
        const allBids = await BidsModel.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $lookup: {
                    from: "shipments",
                    localField: "shipmentId",
                    foreignField: "_id",
                    as: "shipment"
                }
            },
            {
                $unwind: {
                    path: "$user"
                }
            },
            {
                $unwind: {
                    path: "$shipment"
                }
            }
        ])
        return allBids
    }
}

export default BidsImplementation;