import { prop, getModelForClass } from '@typegoose/typegoose';

export class Shipment {
    @prop()
    public from?: string;

    @prop()
    public to?: string;
}

const ShipmentModel = getModelForClass(Shipment);

export default ShipmentModel
