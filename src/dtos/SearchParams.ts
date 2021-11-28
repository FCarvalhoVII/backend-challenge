export default class SearchParams {

    public user_id?: string;

    public city?: string;

    public neighborhood?: string;

    public constructor(init: any, user_id: string) {
        const { city, neighborhood } = init;

        if (user_id) {
            this.user_id = user_id;
        }
        
        if (city) {
            this.city = city;
        }

        if (neighborhood) {
            this.neighborhood = neighborhood;
        }
    }
}