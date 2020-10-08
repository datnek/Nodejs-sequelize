import supertest from 'supertest';
import app from '../server';
import {DbHandle} from '../tests/db.handle'
import {ISecurity} from "../databases/models/security";
import {FakeData} from "../tests/fake.data";





// afterAll(async ()  => await dbHandle.drop());

describe('SecuritysController',  () => {
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
    const url = "/api/securities";
    const securityComplete: ISecurity =  new FakeData().Security;


    it('can be created correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(securityComplete);

        //console.log('response', response);
        //console.log('response', response);
        expect(response.body.Policy).toBe(securityComplete.Policy);
        expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response.body.Slug).toBeDefined();

    });
/*
    it('can be edit correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(securityComplete);

        expect(response.status).toBe(200);
        expect(response.body.Policy).toBe(securityComplete.Policy);
        expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response.body.Slug).toBeDefined();

        const newSecurity = response.body;

        newSecurity.Policy = 'Role4';
        newSecurity.Privatecode = 'ADMIS';


        const response2 = await request.put(`${url}/${newSecurity.Id}`)
            .set('Authorization', dbHandle.Header)
            .send(newSecurity);


        expect(response2.status).toBe(200);
        expect(response2.body.Policy).toBe(securityComplete.Policy);
        expect(response2.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response2.body.Slug).toBeDefined();
    });
*/

    it('can be get all correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(securityComplete);

        expect(response.status).toBe(200);
        expect(response.body.Policy).toBe(securityComplete.Policy);
        expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response.body.Slug).toBeDefined();

        //const newSecurity = response.body;

        const response2 = await request.get(url)
            .set('Authorization', dbHandle.Header)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body.Policy).toBe(securityComplete.Policy);
        expect(response2.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response2.body.Slug).toBeDefined();

    });

    it('can be find by Id correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(securityComplete);

        expect(response.status).toBe(200);
        expect(response.body.Policy).toBe(securityComplete.Policy);
        expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response.body.Slug).toBeDefined();

        const newSecurity = response.body;

        const response2 = await request.get(`${url}/${newSecurity.Id}`)
            .set('Authorization', dbHandle.Header)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body.Policy).toBe(securityComplete.Policy);
        expect(response2.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response2.body.Slug).toBeDefined();

    });

    it('can be find by Slug correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(securityComplete);

        expect(response.status).toBe(200);
        expect(response.body.Policy).toBe(securityComplete.Policy);
        expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response.body.Slug).toBeDefined();

        const newSecurity = response.body;

        const response2 = await request.get(`${url}/public/${newSecurity.Slug}`)
            .set('Authorization', dbHandle.Header)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body.Policy).toBe(securityComplete.Policy);
        expect(response2.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response2.body.Slug).toBeDefined();

    });

    it('can be delete correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(securityComplete);

        expect(response.status).toBe(200);
        expect(response.body.Policy).toBe(securityComplete.Policy);
        expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
        expect(response.body.Slug).toBeDefined();

        const newSecurity = response.body;

        const response2 = await request.delete(`${url}/${newSecurity.Slug}`)
            .set('Authorization', dbHandle.Header)
            .send();
        expect(response2.status).toBe(200);
        expect(response2.body.message).toBe('deleted');

    });
});
