import {IRouter, Request, Response} from "express";
import {ISecurity} from "../databases/models/security";
import {diContainer} from "../inversify.config";
import {ISecurityService} from "../Services/security.service";
import {TYPES} from "../Services/types";

/***
 *
 */
export class SecuritiesController {
    /***
     *
     * @param req
     * @param res
     */
    async FindAll(req: Request, res: Response) {
        try {
            const securities = await diContainer.get<ISecurityService>(TYPES.SecurityService).FindAll();
            return res.json(securities);
        } catch (err) {
            console.log('There was an error querying securities', err);
            return res.status(500).json(err);
        }
    }

    /***
     *
     * @param req
     * @param res
     */
    async InitUserApp(req: Request, res: Response) {
        try {
            const security = await diContainer.get<ISecurityService>(TYPES.SecurityService).InitUserApp();
            return res.json(security);
        } catch (err) {
            console.log('There was an error init user and security', err);
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
            const security = await diContainer.get<ISecurityService>(TYPES.SecurityService).FindBySlug(req.params.slug);
            return res.json(security);
        } catch (err) {
            console.log('***There was an error getting a security', err);
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
            const security = await diContainer.get<ISecurityService>(TYPES.SecurityService).FindById(+req.params.id);
            return res.json(security);
        } catch (err) {
            console.log('***There was an error getting a security', err);
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
            const  body: ISecurity = req.body;
            const security = await diContainer.get<ISecurityService>(TYPES.SecurityService).Create(body);
            return res.json(security);
        } catch (err) {
            console.log('***There was an error creating a security',err);
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
            const  body: ISecurity = req.body;
            const security = await diContainer.get<ISecurityService>(TYPES.SecurityService).Update(body, +req.params.id);
            return res.json(security);
        } catch (err) {
            console.log('***There was an error updating a security', err);
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
            const security = await diContainer.get<ISecurityService>(TYPES.SecurityService).Delete(req.params.slug);
            return res.json({'message': 'deleted'});
        } catch (err) {
            console.log('***Error deleting security',err);
            return res.status(400).json(err);
        }
    }
}
