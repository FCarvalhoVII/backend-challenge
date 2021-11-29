import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';

export default class ListUserDataService {

    public static async execute(user_id: string) {
        const usersRepositories = getCustomRepository(UserRepositories);

        const userData = await usersRepositories.find({
            where: {
                id: user_id
            },
            relations: ['address'],
            select: ['name', 'email', 'address']
        });

        return userData[0];
    }
}