
import ShipmentModel, { Shipment } from './Shipment.model'
import { DocumentType } from '@typegoose/typegoose';
import { ShipmentInput } from './Shipment.type'

export interface IShipmentImplementation {
    createShipment(shipment: ShipmentInput): Promise<DocumentType<Shipment> | null> | null
}

class ShipmentImplementation implements IShipmentImplementation {
    async createShipment(shipment: ShipmentInput): Promise<DocumentType<Shipment> | null> {
        const newShipment = new ShipmentModel(shipment)
        const savedShipment = newShipment.save();
        return savedShipment;
    }
}

export default ShipmentImplementation;