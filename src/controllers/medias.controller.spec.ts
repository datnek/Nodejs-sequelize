import supertest from 'supertest';
import app from '../server';
import {DbHandle} from '../tests/db.handle'
import {IMedia} from "../databases/models/media";
import {FakeData} from "../tests/fake.data";


// afterAll(async ()  => await dbHandle.drop());

describe('MediasController',  () => {

    const dbHandle = new DbHandle();

    const mediaComplete: IMedia = new FakeData().Media;

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
    const url = "/api/medias";




    it('can be created correctly', async () => {

        const response = await request.post(url)
            .set('Authorization', dbHandle.Header)
            .send(mediaComplete);

        //console.log('response', response);
        //console.log('response', response);
        expect(response.status).toBe(200);
        expect(response.body.Name).toBe(mediaComplete.Name);
        expect(response.body.Extension).toBe(mediaComplete.Extension);
        expect(response.body.Slug).toBeDefined();

    });

});
