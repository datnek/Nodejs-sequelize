import {injectable} from "inversify";
import Sequelize from "sequelize";
import "reflect-metadata";

export interface IDatabaseService {
    // @ts-ignore
    GetDatabase();
}

@injectable()
export class DatabaseService implements IDatabaseService{
    // @ts-ignore
    GetDatabase(){
        const model =  require('../databases/models');
        return model;
    }
}
