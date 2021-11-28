import UpdateObject from '../../src/dtos/UpdateObject';
import SearchParams from '../../src/dtos/SearchParams';

describe('Generate Objects', () => {
    it('should generate update object', () => {
        const updateObject = new UpdateObject({
            address: 'Test',
            neighborhood: 'Test',
            number: '',
            city: ''
        });

        expect(updateObject).toEqual({
            address: 'Test',
            neighborhood: 'Test'
        });
    });

    it('should generate search params object', () => {
        const searchParams = new SearchParams({
            neighborhood: 'Test',
            city: ''
        }, 'id');

        expect(searchParams).toEqual({
            neighborhood: 'Test',
            user_id: 'id'
        });
    });
});