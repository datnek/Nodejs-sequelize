import { Request, Response } from "express";

import { ILocalization } from "../databases/models/localization";
import {diContainer} from "../inversify.config";
import {ILocalizationService} from "../Services/localization.service";
import {TYPES} from "../Services/types";



/***
 *
 */
export class LocalizationsController {

    /***
     *
     * @param req
     * @param res
     */
    async FindAll(req: Request, res: Response) {
        try {
            const localizations = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).FindAll();
            return res.json(localizations);
        } catch (err) {
            console.log('There was an error querying localizations', err);
            return res.status(500).json(err);
        }
    }

    /***
     *
     * @param req
     * @param res
     */
    async FindBySlug(req: Request, res: Response) {
        try {
            const localization = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).FindBySlug(req.params.slug);
            return res.json(localization);
        } catch (err) {
            console.log('***There was an error getting a localization', err);
            return res.status(400).json(err);
        }
    }

    /***
     *
     * @param req
     * @param res
     */
    async FindById(req: Request, res: Response) {
        try {
            const localization = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).FindById(+req.params.id);
            return res.json(localization);
        } catch (err) {
            console.log('***There was an error getting a localization', err);
            return res.status(400).json(err);
        }
    }

    /***
     *
     * @param req
     * @param res
     */
    async Create(req: Request, res: Response) {
        try {
            const  body: ILocalization = req.body;
            const localization = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Create(body);
            return res.json(localization);
        } catch (err) {
            console.log('***There was an error creating a localization',err);
            return res.status(500).json(err);
        }
    }

    /***
     *
     * @param req
     * @param res
     */
    async Put(req: Request, res: Response) {
        try {
            const  body: ILocalization = req.body;
            const localization = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Update(body, +req.params.id);
            return res.json(localization);
        } catch (err) {
            console.log('***There was an error updating a localization', err);
            return res.status(500).json(err);
        }
    }

    /***
     *
     * @param req
     * @param res
     */
    async Delete(req: Request, res: Response) {
        try {
            const localization = await diContainer.get<ILocalizationService>(TYPES.LocalizationService).Delete(req.params.slug);
            return res.json({'message': 'deleted'});
        } catch (err) {
            console.log('***Error deleting localization',err);
            return res.status(400).json(err);
        }
    }
}
