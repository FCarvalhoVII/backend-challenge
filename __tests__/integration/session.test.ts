import app from '../../src/app';
import request from 'supertest';
import connectToDatabase from '../../src/database';

describe('Authentication', () => {
    beforeAll(async () => {
        await connectToDatabase();
    });

    it('should register a user', async () => {
        const response = await request(app).post('/register').send({
            name: 'test',
            email: 'test@test.com',
            password: '123456'
        });

        expect(response.status).toBe(200);
    });

    it('should login user', async () => {
        const response = await request(app).post('/login').send({
            email: 'test@test.com',
            password: '123456'
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should return unauthorized to create a user address', async () => {
        const response = await request(app).post('/user/address').send({
            address: 'Test',
            neighborhood: 'Test',
            number: '00',
            city: 'Test'
        });

        expect(response.status).toBe(401);
    });

    it('should delete user', async () => {
        const { body } = await request(app).post('/login').send({
            email: 'test@test.com',
            password: '123456'
        });

        const response = await request(app).delete('/user')
            .set({ Authorization: `Bearer ${body.token}` });

        expect(response.status).toBe(200);
    });
});