import { Request, Response } from 'express';
import DeleteAddressService from '../services/DeleteAddressService';

export default class DeleteAddressController {

    public static async handle(req: Request, res: Response) {
        const { addressId } = req.params;

        try {
            await DeleteAddressService.execute(addressId);

            return res.send({ message: 'Success' });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(500).send({ error: 'Unexpected Error' });
        }
    }
}