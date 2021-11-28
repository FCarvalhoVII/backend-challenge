import { Request, Response } from 'express';
import DeleteUserService from '../services/DeleteUserService';

export default class DeleteUserController {

    public static async handle(req: Request, res: Response) {
        const { user_id } = req;

        try {
            await DeleteUserService.execute(user_id);

            return res.send({ message: 'Success' });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(500).send({ error: 'Unexpected Error' });
        }
    }
}