import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';

export default class UpdateUserService {

    public static async execute(name: string, id: string) {
        const usersRepositories = getCustomRepository(UserRepositories);

        if (!name) {
            throw new Error('Null name');
        }

        await usersRepositories.update(id, { name });

        const user = await usersRepositories.findOne(id);

        return { name: user.name, email: user.email };
    }
}