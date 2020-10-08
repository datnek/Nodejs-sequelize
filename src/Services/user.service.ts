import {inject, injectable} from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import {IDatabaseService} from "./database.service";

import {ControllerBaseService} from "./controller.base.service";
import {IUser} from "../databases/models/user";
import {v4 as uuidv4} from "uuid";
import md5Hex from "md5-hex";
import * as database from "../databases/models";
import {Op} from "sequelize";

export interface IUserService extends ControllerBaseService<IUser> {

    // @ts-ignore
    Login(user: {Username: string, Password: string});

    // @ts-ignore
    FindByUsername(username: string);
}

@injectable()
export class UserService implements IUserService{
    private databaseService: IDatabaseService;

    constructor(@inject(TYPES.DatabaseService) databaseService: IDatabaseService){
        this.databaseService = databaseService;
    }

    async Create(body: IUser) {

        body.Slug = uuidv4().replace('-','');
        body.Password = md5Hex(body.Password);

        // @ts-ignore
        const user = await  this.databaseService.GetDatabase().User.create(body)
        return user;
    }

    async Delete(slug: string) {
        const user = await this.databaseService.GetDatabase().User.findOne({ where: { Slug: slug, include: ["Address", "Photo", "Background", "Securities"]}});
        if (user) {
            await user.destroy({force: true});
        }
    }

    async FindAll(){
        return  await this.databaseService.GetDatabase().User.findAll({include: ["Address", "Photo", "Background", "Securities"]});
    }

    async FindById(id: number) {
        return await this.databaseService.GetDatabase().User.findOne({where: {Id: id}, include: ["Address", "Photo", "Background", "Securities"]});
    }

    async FindBySlug(slug: string) {
        return await this.databaseService.GetDatabase().User.findOne({ where: { Slug: slug} , include: ["Address", "Photo", "Background", "Securities"]});
    }

    async FindByUsername(username: string) {
        return await this.databaseService.GetDatabase().User.findOne({ where: { Username: username} , include: ["Address", "Photo", "Background", "Securities"]});
    }

    async Update(body: IUser, id: number) {
        const user = await this.databaseService.GetDatabase().User.findByPk(id);
        // If password is the same
        // @ts-ignore
        const lastPassword  = (user as IUser).Password;
        body.Password = !body.Password || body.Password === lastPassword? lastPassword :md5Hex(body.Password);


        await user.update(body);
        return user;
    }

    async Login(body: {Username: string, Password: string}) {
        body.Password = md5Hex(body.Password);

        console.log('new password : ', body.Password);

        // @ts-ignore
        const user = await  database.User.findOne({ where: { Password: body.Password,
                [Op.or]: [
                    { Username: body.Username },
                    { Email: body.Username },
                    { Phone: body.Username }
                ]
            },
            include: ["Address", "Photo", "Background", "Securities"] });

        console.log('user is : ', user);

        return user;
    }

}
