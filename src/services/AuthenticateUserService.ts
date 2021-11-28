import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import 'dotenv/config';

interface IAuthenticateRequest {
    email: string;
    password: string;
}

export default class AuthenticateUserService {

    public static async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UserRepositories);

        const user = await usersRepositories.findOne({ email });

        if (!user) {
            throw new Error('Email/Password incorrect');
        }
      
        const passwordMatch = await compare(password, user.password);
      
        if (!passwordMatch) {
            throw new Error('Email/Password incorrect');
        }

        const TOKEN_SECRET = process.env.TOKEN_SECRET;

        const token = sign({
            id: user.id,
            email: user.email,
            name: user.name
        }, TOKEN_SECRET);

        return token;
    }
}