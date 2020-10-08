import { Request, Response } from "express";

import * as database from '../databases/models';

import { IUser } from "../databases/models/user";

import {v4 as uuidv4 } from 'uuid';

import md5Hex from 'md5-hex';
import {diContainer} from "../inversify.config";
import {IUserService} from "../Services/user.service";
import {TYPES} from "../Services/types";

/***
 *
 */
export class UsersController {

    /***
     *
     * @param req
     * @param res
     */
    async FindAll(req: Request, res: Response) {
        try {
            const users = await diContainer.get<IUserService>(TYPES.UserService).FindAll();
            return res.json(users);
        } catch (err) {
            console.log('There was an error querying users', err);
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
            const user = await diContainer.get<IUserService>(TYPES.UserService).FindBySlug(req.params.slug);
            return res.json(user);
        } catch (err) {
            console.log('***There was an error getting a user', err);
            return res.status(400).json(err);
        }
    }

    /***
     *
     * @param req
     * @param res
     */
    async FindByUsername(req: Request, res: Response) {
        try {
            const user = await diContainer.get<IUserService>(TYPES.UserService).FindByUsername(req.params.username);
            return res.json(user);
        } catch (err) {
            console.log('***There was an error getting a user', err);
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
            const user = await diContainer.get<IUserService>(TYPES.UserService).FindById(+req.params.id);
            return res.json(user);
        } catch (err) {
            console.log('***There was an error getting a user', err);
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
            const  body: IUser = req.body;
            const user = await diContainer.get<IUserService>(TYPES.UserService).Create(body);
            return res.json(user);
        } catch (err) {
            console.log('***There was an error creating a user',err);
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
            const  body: IUser = req.body;
            const user = await diContainer.get<IUserService>(TYPES.UserService).Update(body, +req.params.id);
            return res.json(user);
        } catch (err) {
            console.log('***There was an error updating a user', err);
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
            const user = await diContainer.get<IUserService>(TYPES.UserService).Delete(req.params.slug);
            return res.json({'message': 'deleted'});
        } catch (err) {
            console.log('***Error deleting user',err);
            return res.status(400).json(err);
        }
    }
    /***
     *
     * @param req
     * @param res
     */
    async Login(req: Request, res: Response) {
        try {
            const  body: {Username: string, Password: string} = req.body;
            body.Password = md5Hex(body.Password);

            const user = await diContainer.get<IUserService>(TYPES.UserService).Login(body);
            return res.json(user);
        } catch (err) {
            console.log('***There was an error loging a user',err);
            return res.status(500).json(err);
        }
    }

}
