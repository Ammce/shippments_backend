import { prop, getModelForClass, Ref } from '@typegoose/typegoose';

import { User } from '../../modules/User/User.model'
import { Shipment } from '../../modules/Shipment/Shipment.model'

export class Bids {
    @prop()
    public amount?: number;

    @prop({ ref: 'User' })
    public userId?: Ref<User>;

    @prop({ ref: 'Shipment' })
    public shipmentId?: Ref<Shipment>;
}

const BidsModel = getModelForClass(Bids);

export default BidsModel
