import { Request, Response } from 'express';
import ListUserDataService from '../services/ListUserDataService';

export default class ListUserDataController {

    public static async handle(req: Request, res: Response) {
        const { user_id } = req;

        try {
            const userData = await ListUserDataService.execute(user_id);

            return res.send({ userData });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(500).send({ error: 'Unexpected Error' });
        }
    }
}