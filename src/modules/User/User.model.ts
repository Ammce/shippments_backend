import { prop, getModelForClass } from '@typegoose/typegoose';

export class User {
    @prop()
    public name?: string;

    @prop()
    public email?: string;

    @prop()
    public password?: string;
}

const UserModel = getModelForClass(User);

export default UserModel
