import app from '../server';
import {DbHandle} from '../tests/db.handle'
import {ILocalization} from "../databases/models/localization";
import {FakeData} from "../tests/fake.data";
import {diContainer} from "../inversify.config";
import {ILocalizationService} from "./localization.service";
import {TYPES} from "./types";






// afterAll(async ()  => await dbHandle.drop());

describe('LocalizationService',  () => {
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



    it('can be created correctly', async () => {

        const response = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Create(localizationComplete);

        //console.log('response', response);
        //console.log('response', response);
        expect(response.City).toBe(localizationComplete.City);
        expect(response.Country).toBe(localizationComplete.Country);
        expect(response.Slug).toBeDefined();

    });

    it('can be edit correctly', async () => {

        const response = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Create(localizationComplete);


        expect(response.City).toBe(localizationComplete.City);
        expect(response.Country).toBe(localizationComplete.Country);
        expect(response.Slug).toBeDefined();

        const newLocalization = response.body;

        newLocalization.Country = 'fr';
        newLocalization.City = 'Paris';


        const response2 = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Update(newLocalization, newLocalization.Id);

        expect(response2.City).toBe(localizationComplete.City);
        expect(response2.Country).toBe(localizationComplete.Country);
        expect(response2.Slug).toBeDefined();
    });


    it('can be get all correctly', async () => {

        const response = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Create(localizationComplete);


        expect(response.status).toBe(200);
        expect(response.City).toBe(localizationComplete.City);
        expect(response.Country).toBe(localizationComplete.Country);
        expect(response.Slug).toBeDefined();

        //const newLocalization = response.body;

        const response2 = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).FindAll();


        expect(response2.City).toBe(localizationComplete.City);
        expect(response2.Country).toBe(localizationComplete.Country);
        expect(response2.Slug).toBeDefined();

    });

    it('can be find by Id correctly', async () => {

        const response = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Create(localizationComplete);


        expect(response.City).toBe(localizationComplete.City);
        expect(response.Country).toBe(localizationComplete.Country);
        expect(response.Slug).toBeDefined();

        const newLocalization = response.body;

        const response2 = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).FindById(newLocalization.Id);

        expect(response2.City).toBe(localizationComplete.City);
        expect(response2.Country).toBe(localizationComplete.Country);
        expect(response2.Slug).toBeDefined();

    });

    it('can be find by Slug correctly', async () => {

        const response = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Create(localizationComplete);


        expect(response.City).toBe(localizationComplete.City);
        expect(response.Country).toBe(localizationComplete.Country);
        expect(response.Slug).toBeDefined();

        const newLocalization = response.body;

        const response2 = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).FindBySlug(newLocalization.Slug);

        expect(response2.City).toBe(localizationComplete.City);
        expect(response2.Country).toBe(localizationComplete.Country);
        expect(response2.Slug).toBeDefined();

    });

    it('can be delete correctly', async () => {

        const response = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Create(localizationComplete);


        expect(response.City).toBe(localizationComplete.City);
        expect(response.Country).toBe(localizationComplete.Country);
        expect(response.Slug).toBeDefined();

        const newLocalization = response.body;

        const response2 = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Delete(newLocalization.Slug);

        expect(response2.message).toBe('deleted');

    });
});
