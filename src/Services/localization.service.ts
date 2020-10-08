import {inject, injectable} from "inversify";
import {ILocalization} from "../databases/models/localization";
import "reflect-metadata";
import { TYPES } from "./types";
import {IDatabaseService} from "./database.service";
import {ControllerBaseService} from "./controller.base.service";
import {v4 as uuidv4 } from 'uuid';


export interface ILocalizationService extends ControllerBaseService<ILocalization>{

}

@injectable()
export class LocalizationService implements ILocalizationService{
    private databaseService: IDatabaseService;

    constructor(@inject(TYPES.DatabaseService) databaseService: IDatabaseService){
        this.databaseService = databaseService;
    }

    async Create(body: ILocalization) {

        body.Slug = uuidv4().replace('-','');

        console.log('database instance : ', this.databaseService.GetDatabase());
        // @ts-ignore
        const localization = await this.databaseService.GetDatabase().Localization.create(body)

       // await localization.save();
        return localization;
    }

   async Delete(slug: string) {
        const localization = await this.databaseService.GetDatabase().Localization.findOne({ where: { Slug: slug } })
        if (localization) {
            await localization.destroy({force: true});
        }
    }

    async FindAll(){
        return  await this.databaseService.GetDatabase().Localization.findAll({ });
    }

    async FindById(id: number) {
        return await this.databaseService.GetDatabase().Localization.findOne({where: {Id: id}});
    }

   async FindBySlug(slug: string) {
        return await this.databaseService.GetDatabase().Localization.findOne({ where: { Slug: slug} });
    }

    async Update(body: ILocalization, id: number) {
        const localization = await this.databaseService.GetDatabase().Localization.findByPk(id);
        await localization.update(body);
        return localization;
    }

}
