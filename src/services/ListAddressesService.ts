import { getCustomRepository } from 'typeorm';
import SearchParams from '../dtos/SearchParams';
import { AddressRepositories } from '../repositories/AddressRepositories';

export default class ListAddressesService {

    public static async execute(queryParams: any, user_id: string, addressId: string) {
        const addressRepositories = getCustomRepository(AddressRepositories);

        if (addressId) {
            const address = await addressRepositories.find({
                where: {
                    id: addressId,
                    user_id
                }
            });

            return address[0];
        }

        const searchParams = new SearchParams(queryParams, user_id);

        const result = await addressRepositories.find({ where: searchParams });

        return result;
    }
}