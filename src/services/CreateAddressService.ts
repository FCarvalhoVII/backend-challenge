import { getCustomRepository } from 'typeorm';
import { AddressRepositories } from '../repositories/AddressRepositories';

interface IAddressRequest {
    user_id: string;
    address: string;
    neighborhood: string;
    number: string;
    city: string;
}

export default class CreateAddressService {

    public static async execute({
        user_id,
        address,
        neighborhood,
        number,
        city
    }: IAddressRequest) {
        const addressRepositories = getCustomRepository(AddressRepositories);

        if (!user_id || !address || !neighborhood || !number || !city) {
            throw new Error('Empty fields');
        }

        const location = addressRepositories.create({
            user_id: Number(user_id),
            address,
            neighborhood,
            number,
            city
        });

        await addressRepositories.save(location);

        return location;
    }
}