import {injectable} from "inversify";
import "reflect-metadata";
import * as dotenv from "dotenv";
const nodeMailer = require('nodemailer');

export interface IMailingService {
    // @ts-ignore
    Send(body: string, receiver: string, subject: string, isHtml: boolean);
}

@injectable()
export class MailingService implements IMailingService{

    private transporter: any;

    constructor(){
        dotenv.config();
        this.Build();
    }

   async Send(body: string, recipients: string, subject: string, isHtml: boolean=false) {

       const mailOptions: any = {
           to: recipients,
           subject: subject,
       };

       if (!isHtml){
           mailOptions.text = body;
       } else {
           mailOptions.html = body;
       }

        return  await this.transporter.sendMail(mailOptions);

        //            console.log('Message %s sent: %s', info.messageId, info.response);

    }

   private Build(): void{
        this.transporter = nodeMailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.MAIL_SECURE,
            auth: {
                // should be replaced with real sender's account
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        });
    }
}
