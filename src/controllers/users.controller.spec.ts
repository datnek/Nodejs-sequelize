import supertest from 'supertest';
import app from '../server';
import {DbHandle} from '../tests/db.handle'
import {IUser} from "../databases/models/user";
import {FakeData} from "../tests/fake.data";



// afterAll(async ()  => await dbHandle.drop());

describe('UsersController',  () => {

    const dbHandle = new DbHandle();
    beforeEach(async () =>
    {
        await dbHandle.create();
        await dbHandle.migrate();
    });


    afterEach(async () => {
        await dbHandle.create();
        await dbHandle.drop();
    });

    const request = supertest(app);
    const url = "/api/users";
    const userComplete: IUser = new FakeData().User;





    it('can be created correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(userComplete);

        //console.log('response', response);
        //console.log('response', response);
        expect(response.body.Username).toBe(userComplete.Username);
        expect(response.body.Email).toBe(userComplete.Email);
        expect(response.body.slug).toBeDefined();

    });

    it('can be edit correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(userComplete);

        expect(response.status).toBe(200);
        expect(response.body.Username).toBe(userComplete.Username);
        expect(response.body.Email).toBe(userComplete.Email);
        expect(response.body.slug).toBeDefined();

        const newUser = response.body;

        newUser.Username = 'danick';
        newUser.Email = 'otis.takam@datnek.be';


        const response2 = await request.put(`${url}/${newUser.Id}`)
            .set('Authorization', dbHandle.Header)
            .send(newUser);

        expect(response2.status).toBe(200);
        expect(response2.body.Username).toBe(newUser.Username);
        expect(response2.body.Email).toBe(newUser.Email);
        expect(response2.body.slug).toBeDefined();
    });


    it('can be get all correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(userComplete);

        expect(response.status).toBe(200);
        expect(response.body.Username).toBe(userComplete.Username);
        expect(response.body.Email).toBe(userComplete.Email);
        expect(response.body.slug).toBeDefined();

        //const newUser = response.body;

        const response2 = await request.get(url)
            .set('Authorization', dbHandle.Header)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body[0].Username).toBe(userComplete.Username);

    });


    it('can be login correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(userComplete);

        expect(response.status).toBe(200);
        expect(response.body.Username).toBe(userComplete.Username);
        expect(response.body.Email).toBe(userComplete.Email);
        expect(response.body.slug).toBeDefined();

        const newUser = response.body;

        const response2 = await request.post(`${url}/login`)
            .set('Authorization', dbHandle.Header)
            .send(userComplete);

        expect(response2.status).toBe(200);
        expect(response2.body.Username).toBe(userComplete.Username);

    });

    it('can be find by Id correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(userComplete);

        expect(response.status).toBe(200);
        expect(response.body.Username).toBe(userComplete.Username);
        expect(response.body.Email).toBe(userComplete.Email);
        expect(response.body.slug).toBeDefined();

        const newUser = response.body;

        const response2 = await request.get(`${url}/${newUser.Id}`)
            .set('Authorization', dbHandle.Header)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body.Username).toBe(userComplete.Username);

    });

    it('can be find by Slug correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(userComplete);

        expect(response.status).toBe(200);
        expect(response.body.Username).toBe(userComplete.Username);
        expect(response.body.Email).toBe(userComplete.Email);
        expect(response.body.slug).toBeDefined();

        const newUser = response.body;

        const response2 = await request.get(`${url}/public/${newUser.Slug}`)
            .set('Authorization', dbHandle.Header)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body.Username).toBe(userComplete.Username);

    });

    it('can be delete correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(userComplete);

        expect(response.status).toBe(200);
        expect(response.body.Username).toBe(userComplete.Username);

        const newUser = response.body;

        const response2 = await request.delete(`${url}/${newUser.Slug}`)
            .set('Authorization', dbHandle.Header)
            .send();
        expect(response2.status).toBe(200);
        expect(response2.body.message).toBe('deleted');

    });
});
