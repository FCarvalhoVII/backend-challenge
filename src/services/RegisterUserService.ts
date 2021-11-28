import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string;
    email: string;
    password: string;
}

export default class RegisterUserService {

    public static async execute({ name, email, password }: IUserRequest) {
        const usersRepository = getCustomRepository(UserRepositories);

        const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;

        if (!email || !validEmail.test(email)) {
            throw new Error('Invalid email');
        }

        if (!name) {
            throw new Error('Null name');
        }

        if (!password) {
            throw new Error('Null password');
        }

        const userAlreadyExists = await usersRepository.findOne({ email });

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: passwordHash
        });

        await usersRepository.save(user);

        user.password = undefined;

        return user;
    }
}