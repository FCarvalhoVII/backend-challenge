import { getCustomRepository } from 'typeorm';
import { AddressRepositories } from '../repositories/AddressRepositories';

export default class DeleteAddressService {

    public static async execute(addressId: string, user_id: string) {
        const addressRepositories = getCustomRepository(AddressRepositories);

        const address = await addressRepositories.findOne(addressId);

        if (address.user_id !== parseInt(user_id)) {
            throw new Error('Unauthorized delete');
        }

        const addressDeleted = await addressRepositories.delete(addressId);

        return addressDeleted;
    }
}