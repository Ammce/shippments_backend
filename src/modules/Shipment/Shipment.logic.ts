import { DocumentType } from '@typegoose/typegoose';

import { Shipment } from './Shipment.model'
import { ShipmentInput } from './Shipment.type'
import { IShipmentImplementation } from './Shipment.implementation'


export interface IShipmentLogic {
    createShipment(user: ShipmentInput): Promise<DocumentType<Shipment> | null>
    getAllShipments(): Promise<DocumentType<Shipment>[]>
}

class ShipmentLogic implements IShipmentLogic {
    private shipmentImplementation: IShipmentImplementation
    constructor(shipmentImplementation: IShipmentImplementation) {
        this.shipmentImplementation = shipmentImplementation;
    }

    async createShipment({ from, to }: ShipmentInput): Promise<DocumentType<Shipment> | null> {
        const shipment = await this.shipmentImplementation.createShipment({ from, to });
        return shipment;
    }
    async getAllShipments(): Promise<DocumentType<Shipment>[]> {
        const shipments = await this.shipmentImplementation.getAllShipments();
        return shipments;
    }
}

export default ShipmentLogic;