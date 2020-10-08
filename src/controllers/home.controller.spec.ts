import supertest from 'supertest';
import app from '../server';
import {DbHandle} from '../tests/db.handle'


const request = supertest(app);
const url = "/api";

describe('HomeController',  () => {

    const dbHandle = new DbHandle();

    it('can be get first page', async () => {

        const response2 = await request.get(url)
            .send();

        expect(response2.status).toBe(200);
    });


});
