import { Request, Response } from 'express';
import CreateAddressService from '../services/CreateAddressService';

export default class CreateAddressController {

    public static async handle(req: Request, res: Response) {
        const { address, neighborhood, number, city } = req.body;
        const { user_id } = req;

        try {
            const userAddress = await CreateAddressService.execute({
                user_id,
                address,
                neighborhood,
                number,
                city
            });

            return res.send({ userAddress });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(500).send({ error: 'Unexpected Error' });
        }
    }
}