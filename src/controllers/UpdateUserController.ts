import { Request, Response } from 'express';
import UpdateUserService from '../services/UpdateUserService';

export default class UpdateUserController {

    public static async handle(req: Request, res: Response) {
        const { name } = req.body;
        const { user_id } = req;

        try {
            const userUpdated = await UpdateUserService.execute(name, user_id);

            return res.send({ userUpdated });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(500).send({ error: 'Unexpected Error' });
        }
    }
}