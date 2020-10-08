
// import util from 'util';

import * as dotenv from 'dotenv';

const { exec, spawn } = require('child-process-async');


export  class DbHandle{
    Header: string;
    // private  exec = util.promisify(require('child_process').exec);
    constructor(){

        dotenv.config();
        this.Header = process.env.ACCESS_TOKEN;
    }
    async create(){
        console.log('hello world !!!!');
        await this.run("sequelize db:create");
    }

    async drop(){
        await this.run("sequelize db:drop");
    }

    async migrate(){
        await this.run("sequelize db:migrate");
    }

    async run(command: string) {
        try {
            const { stdout, stderr } = await exec(command);

            if (stderr) {
                console.error(`error: ${stderr}`);
            }
            console.log(`stdout: ${stdout}`);
        } catch (e) {

        }
    }

}
