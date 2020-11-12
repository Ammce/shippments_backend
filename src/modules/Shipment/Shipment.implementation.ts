
import ShipmentModel, { Shipment } from './Shipment.model'
import { DocumentType } from '@typegoose/typegoose';
import { ShipmentInput } from './Shipment.type'

export interface IShipmentImplementation {
    createShipment(shipment: ShipmentInput): Promise<DocumentType<Shipment> | null> | null
    getAllShipments(): Promise<DocumentType<Shipment>[]>
}

class ShipmentImplementation implements IShipmentImplementation {
    async createShipment(shipment: ShipmentInput): Promise<DocumentType<Shipment> | null> {
        const newShipment = new ShipmentModel(shipment)
        const savedShipment = newShipment.save();
        return savedShipment;
    }
    async getAllShipments(): Promise<DocumentType<Shipment>[]> {
        const shipments = await ShipmentModel.aggregate([
            {
                $lookup: {
                    from: "bids",
                    localField: "_id",
                    foreignField: "shipmentId",
                    as: "bids"
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "bids.userId",
                    foreignField: "_id",
                    as: "bids.user"
                }
            }
        ])
        return shipments;
    }
}

export default ShipmentImplementation;