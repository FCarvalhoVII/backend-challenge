import { Request, Response } from 'express';
import ListAddressesService from '../services/ListAddressesService';

export default class ListAddressesController {

    public static async handle(req: Request, res: Response) {
        const { user_id } = req;
        const { addressId } = req.params;

        try {
            const addresses = await ListAddressesService.execute(req.query, user_id, addressId);

            return res.send({ addresses });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(500).send({ error: 'Unexpected Error' });
        }
    }
}