import BidsController from './Bids.controller';
import BidsLogic from './Bids.logic';
import BidsImplementation from './Bids.implementation';

const bidsImplementation = new BidsImplementation();
const bidsLogic = new BidsLogic(bidsImplementation);
const bidsController = new BidsController(bidsLogic);


export { bidsController };