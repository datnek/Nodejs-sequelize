import { Request, Response } from "express";
// import * as database from '../databases/models';
const  database = require('../databases/models');

import {v4 as uuidv4 } from 'uuid';
import {diContainer} from "../inversify.config";
import {IMediaService} from "../Services/media.service";
import {TYPES} from "../Services/types";
import {IMedia} from "../databases/models/media";


export class MediasController {

    /***
     *
     * @param req
     * @param res
     */
    async FindAll(req: Request, res: Response) {
        try {
            const medias = await diContainer.get<IMediaService>(TYPES.MediaService).FindAll();
            return res.json(medias);
        } catch (err) {
            console.log('There was an error querying medias', err);
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
            const media = await diContainer.get<IMediaService>(TYPES.MediaService).FindBySlug(req.params.slug);
            return res.json(media);
        } catch (err) {
            console.log('***There was an error getting a media', err);
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
            const media = await diContainer.get<IMediaService>(TYPES.MediaService).FindById(+req.params.id);
            return res.json(media);
        } catch (err) {
            console.log('***There was an error getting a media', err);
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
            const  body: IMedia = req.body;
            const media = await diContainer.get<IMediaService>(TYPES.MediaService).Create(body);
            return res.json(media);
        } catch (err) {
            console.log('***There was an error creating a media',err);
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
            const  body: IMedia = req.body;
            const media = await diContainer.get<IMediaService>(TYPES.MediaService).Update(body, +req.params.id);
            return res.json(media);
        } catch (err) {
            console.log('***There was an error updating a media', err);
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
            const media = await diContainer.get<IMediaService>(TYPES.MediaService).Delete(req.params.slug);
            return res.json({'message': 'deleted'});
        } catch (err) {
            console.log('***Error deleting media',err);
            return res.status(400).json(err);
        }
    }
}
