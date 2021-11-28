import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

export default class AuthenticateUserController {

    public static async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const token = await AuthenticateUserService.execute({ email, password });

            return res.send({ token });

        } catch(err) {
            console.error('ERROR: ', err);
            
            return res.status(400).send({ error: 'Email/Password incorrect' });
        }
    }
}