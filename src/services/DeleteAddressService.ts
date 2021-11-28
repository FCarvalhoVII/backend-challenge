import { getCustomRepository } from 'typeorm';
import { AddressRepositories } from '../repositories/AddressRepositories';

export default class DeleteAddressService {

    public static async execute(addressId: string) {
        const addressRepositories = getCustomRepository(AddressRepositories);

        const addressDeleted = await addressRepositories.delete(addressId);

        return addressDeleted;
    }
}