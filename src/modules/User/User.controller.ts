import { NextFunction, Request, Response } from 'express';

import { IUserLogic } from './User.logic';

export default class CardController {
    private userLogic: IUserLogic
    constructor(userLogic: IUserLogic) {
        this.userLogic = userLogic;
    }

    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, password } = req.body;
            const data = await this.userLogic.createUser({ name, email, password });
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
}