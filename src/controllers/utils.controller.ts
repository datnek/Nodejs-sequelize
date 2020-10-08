
import { Request, Response } from "express";
import {diContainer} from "../inversify.config";
import {TYPES} from "../Services/types";
import {IMailingService} from "../Services/mailing.service";
import {ISmsService} from "../Services/sms.service";
import {IUtilService} from "../Services/util.service";

export class UtilsController {


    async SendMail(req: Request, res: Response) {

        try {
            const info = await diContainer.get<IMailingService>(TYPES.MailingService).Send(req.body.Body,
                req.body.Recipients, req.body.Subject, req.body.IsHtml);

            return res.json({
                message: `Message ${info.messageId} sent: ${info.response}`,
            });
        } catch (err) {
            console.log('There was an error sending an email', err);
            return res.status(500).json(err);
        }
    }

    async SendSms(req: Request, res: Response) {

        try {
            const info = await diContainer.get<ISmsService>(TYPES.SmsService).Send(
                req.body.Recipients,
                req.body.Body,
                req.body.Subject);

            return res.json({
                message: `Message ${info.messageId} sent: ${info.response}`,
            });
        } catch (err) {
            console.log('There was an error sending a sms', err);
            return res.status(500).json(err);
        }
    }

    async SaveFile(req: Request, res: Response) {

        try {
            diContainer.get<IUtilService>(TYPES.UtilsService).SaveFile(req.body.File,
                req.body.Filename, req.body.SubDir);

            return res.json({
                message: `Uploaded image successfull`,
            });
        } catch (err) {
            console.log('There was an error saving file', err);
            return res.status(500).json(err);
        }
    }
}
