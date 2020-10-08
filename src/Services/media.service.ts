import {inject, injectable} from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import {IDatabaseService} from "./database.service";

import {IMedia} from "../databases/models/media";
import {ControllerBaseService} from "./controller.base.service";
import {v4 as uuidv4} from "uuid";
import {IUtilService} from "./util.service";

export interface IMediaService extends  ControllerBaseService<IMedia>{

}


@injectable()
export class MediaService implements IMediaService{
    private databaseService: IDatabaseService;
    @inject(TYPES.UtilsService) private utilService: IUtilService;

    constructor(@inject(TYPES.DatabaseService) databaseService: IDatabaseService,
                @inject(TYPES.UtilsService) utilService: IUtilService    ){
        this.utilService = utilService;
        this.databaseService = databaseService;
    }

    async Create(body: IMedia) {

        body.Slug = uuidv4().replace('-','');


        const name =  `${uuidv4().replace('-','')}-${body.Name}`;
        this.utilService.SaveFile(body.Hashname, name, null );

        body.Hashname = name;

        // @ts-ignore
        const media = await this.databaseService.GetDatabase().Media.create(body);
        //const media = new this.databaseService.GetDatabase().Media(body);

        //await media.save();
        return media;
    }

    async Delete(slug: string) {
        const media = await this.databaseService.GetDatabase().Media.findOne({ where: { Slug: slug } })
        if (media) {
            await media.destroy({force: true});
        }
    }

    async FindAll(){
       // const medias =  await this.databaseService.GetDatabase().Media.findAll({ });
       // console.log("medias : ", medias);
        return await this.databaseService.GetDatabase().Media.findAll({ });
    }

    async FindById(id: number) {
        return await this.databaseService.GetDatabase().Media.findOne({where: {Id: id}});
    }

    async FindBySlug(slug: string) {
        return await this.databaseService.GetDatabase().Media.findOne({ where: { Slug: slug} });
    }

    async Update(body: IMedia, id: number) {
        const media = await this.databaseService.GetDatabase().Media.findByPk(id);
        await media.update(body);
        return media;
    }

}
