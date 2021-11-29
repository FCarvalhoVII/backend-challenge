import { Request, Response } from 'express';
import DeleteAddressService from '../services/DeleteAddressService';

export default class DeleteAddressController {

    public static async handle(req: Request, res: Response) {
        const { addressId } = req.params;
        const { user_id } = req;

        try {
            await DeleteAddressService.execute(addressId, user_id);

            return res.send({ message: 'Success' });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(500).send({ error: 'Unexpected Error' });
        }
    }
}