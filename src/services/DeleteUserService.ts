import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';

export default class DeleteUserService {

    public static async execute(id: string) {
        const usersRepositories = getCustomRepository(UserRepositories);

        const user = await usersRepositories.delete(id);

        return user;
    }
}