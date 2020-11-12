import ShipmentController from './Shipment.controller';
import ShipmentLogic from './Shipment.logic';
import ShipmentImplementation from './Shipment.implementation';

const shipmentImplementation = new ShipmentImplementation();
const shipmentLogic = new ShipmentLogic(shipmentImplementation);
const shipmentController = new ShipmentController(shipmentLogic);


export { shipmentController };