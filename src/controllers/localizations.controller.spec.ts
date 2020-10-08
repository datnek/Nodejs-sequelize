import supertest from 'supertest';
import app from '../server';
import {DbHandle} from '../tests/db.handle'
import {ILocalization} from "../databases/models/localization";
import {FakeData} from "../tests/fake.data";






// afterAll(async ()  => await dbHandle.drop());

describe('LocalizationsController',  () => {
    const localizationComplete: ILocalization =  new FakeData().Localization;
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
    const url = "/api/localizations";


    it('can be created correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(localizationComplete);

        //console.log('response', response);
        //console.log('response', response);
        expect(response.body.City).toBe(localizationComplete.City);
        expect(response.body.Country).toBe(localizationComplete.Country);
        expect(response.body.Slug).toBeDefined();

    });

    it('can be edit correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(localizationComplete);

        expect(response.status).toBe(200);
        expect(response.body.City).toBe(localizationComplete.City);
        expect(response.body.Country).toBe(localizationComplete.Country);
        expect(response.body.Slug).toBeDefined();

        const newLocalization = response.body;

        newLocalization.Country = 'fr';
        newLocalization.City = 'Paris';


        const response2 = await request.put(`${url}/${newLocalization.Id}`)
            .set('Authorization', dbHandle.Header)
            .send(newLocalization);


        expect(response2.status).toBe(200);
        expect(response2.body.City).toBe(localizationComplete.City);
        expect(response2.body.Country).toBe(localizationComplete.Country);
        expect(response2.body.Slug).toBeDefined();
    });


    it('can be get all correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(localizationComplete);

        expect(response.status).toBe(200);
        expect(response.body.City).toBe(localizationComplete.City);
        expect(response.body.Country).toBe(localizationComplete.Country);
        expect(response.body.Slug).toBeDefined();

        //const newLocalization = response.body;

        const response2 = await request.get(url)
            .set('Authorization', dbHandle.Header)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body.City).toBe(localizationComplete.City);
        expect(response2.body.Country).toBe(localizationComplete.Country);
        expect(response2.body.Slug).toBeDefined();

    });

    it('can be find by Id correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(localizationComplete);

        expect(response.status).toBe(200);
        expect(response.body.City).toBe(localizationComplete.City);
        expect(response.body.Country).toBe(localizationComplete.Country);
        expect(response.body.Slug).toBeDefined();

        const newLocalization = response.body;

        const response2 = await request.get(`${url}/${newLocalization.Id}`)
            .set('Authorization', dbHandle.Header)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body.City).toBe(localizationComplete.City);
        expect(response2.body.Country).toBe(localizationComplete.Country);
        expect(response2.body.Slug).toBeDefined();

    });

    it('can be find by Slug correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(localizationComplete);

        expect(response.status).toBe(200);
        expect(response.body.City).toBe(localizationComplete.City);
        expect(response.body.Country).toBe(localizationComplete.Country);
        expect(response.body.Slug).toBeDefined();

        const newLocalization = response.body;

        const response2 = await request.get(`${url}/public/${newLocalization.Slug}`)
            .set('Authorization', dbHandle.Header)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body.City).toBe(localizationComplete.City);
        expect(response2.body.Country).toBe(localizationComplete.Country);
        expect(response2.body.Slug).toBeDefined();

    });

    it('can be delete correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(localizationComplete);

        expect(response.status).toBe(200);
        expect(response.body.City).toBe(localizationComplete.City);
        expect(response.body.Country).toBe(localizationComplete.Country);
        expect(response.body.Slug).toBeDefined();

        const newLocalization = response.body;

        const response2 = await request.delete(`${url}/${newLocalization.Slug}`)
            .set('Authorization', dbHandle.Header)
            .send();
        expect(response2.status).toBe(200);
        expect(response2.body.message).toBe('deleted');

    });
});
