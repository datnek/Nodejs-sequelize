import {injectable} from "inversify";
import "reflect-metadata";
import * as dotenv from "dotenv";
import {request} from "https";

export interface ISmsService {
    // @ts-ignore
    Send(recipients: string[], body: string, sender: string );
}

@injectable()
export class SmsService implements ISmsService{
    constructor(){
        dotenv.config();
    }
   async Send(recipients: string[], body: string, sender: string = null) {
        if(!sender){
            sender =  process.env.MAIL_NAME;
        }
        // var request = require('request');
        var options = {
            'method': 'POST',
            'url': process.env.SMS_HTTP,
            'headers': {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.SMS_API}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"body":body,
                "encoding":"auto",
                "originator":sender,
                "recipients":recipients,
                "route":"business"})

        };
        return await request(options);
    }
}
