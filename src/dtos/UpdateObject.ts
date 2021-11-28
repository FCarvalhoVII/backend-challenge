export default class UpdateObject {

    public address?: string;

    public number?: string;

    public city?: string;

    public neighborhood?: string;

    public constructor(init: any) {
        const {
            city,
            neighborhood,
            address,
            number
        } = init;
        
        if (city) {
            this.city = city;
        }

        if (neighborhood) {
            this.neighborhood = neighborhood;
        }

        if (address) {
            this.address = address;
        }

        if (number) {
            this.number = number;
        }
    }
}