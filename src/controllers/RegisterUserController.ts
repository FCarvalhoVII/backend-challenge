import { Request, Response } from 'express';
import RegisterUserService from '../services/RegisterUserService';

export default class RegisterUserController {

    public static async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            const user = await RegisterUserService.execute({ name, email, password });

            return res.send({ user });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(500).send({ error: 'Unexpected Error' });
        }
    }
}