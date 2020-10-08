import {inject, injectable} from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import {IDatabaseService} from "./database.service";
import {ControllerBaseService} from "./controller.base.service";
import {ISecurity} from "../databases/models/security";
import {v4 as uuidv4} from "uuid";
import {AuthGrade} from "../app/auth.grade";
import md5Hex from "md5-hex";
import {Constant, IConstant} from "../app/constant";
import {IUser} from "../databases/models/user";
import {IUserService} from "./user.service";

export interface ISecurityService extends ControllerBaseService<ISecurity>{
    // @ts-ignore
    InitUserApp();
}

@injectable()
export class SecurityService implements ISecurityService{
    private databaseService: IDatabaseService;
   private userService: IUserService;
    private constant: IConstant;

    constructor(@inject(TYPES.DatabaseService) databaseService: IDatabaseService,
                @inject(TYPES.UserService) userService: IUserService,
                @inject(TYPES.Constant) constant: IConstant){
        this.userService = userService;
        this.constant = constant;
        this.databaseService = databaseService;
    }

    async InitUserApp(){

        const exitUser = await this.userService.FindByUsername("brain-maker");

        if(exitUser && exitUser.Id){
            return exitUser;
        }

        let user: IUser = {Username:"brain-maker",
            Password:"datnek-brain-maker2020",
            Firstname:"contact",
            Lastname:"datnek",
            Civility:1,
            Email:"contact@datnek.be",
            Phone:"+32465806045",
            UpdatedAt: null,
            CreatedAt: null,
            Sex: 3,
            Slug:"123"};

        let security: ISecurity = {
            Policy : "1",
            Origin : "http://localhost:4200",
            UserId : 1,
            Privatecode : 'exemple',
            Slug : '1234',
            Token : null,
            Expiretime: 360*25
        };

        // create user
        user = await this.userService.Create(user);

        // @ts-ignore
        security.UserId = user.id;
       // console.log('security : ', security);
        security = await this.Create(security);
        // @ts-ignore
        return await this.FindById(security.id);

    }

    async Create(body: ISecurity) {

        body.Slug = uuidv4().replace('-','');
        // generate token
        body.Token = new AuthGrade().GenerateAccessToken({Privatecode: body.Privatecode,
            Origin: body.Origin, Roles: body.Policy, Expiretime: body.Expiretime });
        body.Privatecode =  md5Hex(body.Slug);
        body.Policy = this.constant.GetRoles().find((f: { Id: string, Title : string }) => f.Id.toString() === body.Policy).Title;


        // @ts-ignore
        const security = await this.databaseService.GetDatabase().Security.create(body);
        //const security = new this.databaseService.GetDatabase().Security(body);

       // await security.save();
        return security;
    }

    async Delete(slug: string) {
        const security = await this.databaseService.GetDatabase().Security.findOne({ where: { Slug: slug } })
        if (security) {
            await security.destroy({force: true});
        }
    }

    async FindAll(){
        return  await this.databaseService.GetDatabase().Security.findAll({ });
    }

    async FindById(id: number) {
        return await this.databaseService.GetDatabase().Security.findOne({where: {Id: id}});
    }

    async FindBySlug(slug: string) {
        return await this.databaseService.GetDatabase().Security.findOne({ where: { Slug: slug} });
    }

    async Update(body: ISecurity, id: number) {
        const security = await this.databaseService.GetDatabase().Security.findByPk(id);
        await security.update(body);
        return security;
    }

}
