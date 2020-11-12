import { DocumentType } from '@typegoose/typegoose';

import { User } from './User.model'
import { UserInput } from './User.type'
import { IUserImplementation } from './User.implementation'


export interface IUserLogic {
    createUser(user: UserInput): Promise<DocumentType<User> | null>
}

class UserLogic implements IUserLogic {
    private userImplementation: IUserImplementation
    constructor(userImplementation: IUserImplementation) {
        this.userImplementation = userImplementation;
    }

    async createUser({ name, email, password }: UserInput): Promise<DocumentType<User> | null> {
        const user = await this.userImplementation.createUser({ name, email, password });
        return user;
    }
}

export default UserLogic;