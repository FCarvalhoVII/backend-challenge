import { Request, Response } from 'express';
import UpdateAddressService from '../services/UpdateAddressService';

export default class UpdateAddressController {

    public static async handle(req: Request, res: Response) {
        const { addressId } = req.params;
        const { user_id } = req;
        const { address, neighborhood, number, city } = req.body;

        try {
            const addressUpdated = await UpdateAddressService.execute(addressId, user_id, {
                address,
                neighborhood,
                number,
                city
            });

            return res.send({ addressUpdated });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(500).send({ error: 'Unexpected Error' });
        }
    }
}