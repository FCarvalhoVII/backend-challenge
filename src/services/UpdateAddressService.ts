import { getCustomRepository } from 'typeorm';
import UpdateObject from '../dtos/UpdateObject';
import { AddressRepositories } from '../repositories/AddressRepositories';

interface IUpdateRequestBody {
    address?: string;
    neighborhood?: string;
    number?: string;
    city?: string;
}

export default class UpdateAddressService {

    public static async execute(addressId: string, user_id: string, requestBody: IUpdateRequestBody) {
        const addressRepositories = getCustomRepository(AddressRepositories);

        const updateObject = new UpdateObject(requestBody);

        const address = await addressRepositories.findOne(addressId);

        if (address.user_id !== parseInt(user_id)) {
            throw new Error('Unauthorized update');
        }

        await addressRepositories.update(addressId, updateObject);

        const addressUpdated = await addressRepositories.findOne(addressId);

        return addressUpdated;
    }
}