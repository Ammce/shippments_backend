import UserController from './User.controller';
import UserLogic from './User.logic';
import UserImplementation from './User.implementation';

const userImplementation = new UserImplementation();
const userLogic = new UserLogic(userImplementation);
const userController = new UserController(userLogic);


export { userController };