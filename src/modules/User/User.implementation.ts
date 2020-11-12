
import UserModel, { User } from './User.model'
import { DocumentType } from '@typegoose/typegoose';
import { UserInput } from './User.type'

export interface IUserImplementation {
    createUser(user: UserInput): Promise<DocumentType<User> | null> | null
}

class UserImplementation implements IUserImplementation {
    async createUser(user: UserInput): Promise<DocumentType<User> | null> {
        const newUser = new UserModel(user)
        const savedUser = newUser.save();
        return savedUser;
    }
}

export default UserImplementation;