import * as dotenv from 'dotenv';

export class ConfigDatabase{

    constructor(){
        dotenv.config();
    }

    /***
     *
     * @constructor
     */
    GetConfig() {
        return {
            development: {
                username: process.env.DEV_DB_USERNAME,
                password: process.env.DEV_DB_PASSWORD,
                database: process.env.DEV_DB_NAME,
                host:  process.env.DEV_DB_HOSTNAME,
                dialect: process.env.DEV_DB_DIALECT
            },
            test: {
                username: process.env.TEST_DB_USERNAME,
                password: process.env.TEST_DB_PASSWORD,
                database: process.env.TEST_DB_NAME,
                host: process.env.TEST_DB_HOSTNAME,
                dialect: process.env.TEST_DB_DIALECT
            },
            production: {
                username: process.env.PROD_DB_USERNAME,
                password: process.env.PROD_DB_PASSWORD,
                database: process.env.PROD_DB_NAME,
                host: process.env.PROD_DB_HOSTNAME,
                dialect: process.env.PROD_DB_DIALECT
            }
        };
    }

    GetEnv(env: string){
        switch (env) {
            case 'development': return this.GetConfig().development;
            case 'test': return this.GetConfig().test;
            case 'production': return this.GetConfig().production;
        }
    }
}


