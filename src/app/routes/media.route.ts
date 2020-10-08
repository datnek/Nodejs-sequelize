import { Request, Response, IRouter } from "express";
import { MediasController } from "../../controllers/medias.controller";
import {AuthGrade} from "../auth.grade";

/***
 *
 */
export class MediaRoute {
    mediasController: MediasController = new MediasController();

    /***
     *
     * @param routes
     * @param authGrade
     * @constructor
     */
    Run(routes: IRouter, authGrade: AuthGrade) {
        routes.get('/medias',authGrade.AuthenticateToken, this.mediasController.FindAll);
        routes.get('/medias/:id',authGrade.AuthenticateToken,this.mediasController.FindById);
        routes.get('/medias/public/:slug',authGrade.AuthenticateToken,this.mediasController.FindBySlug);
        routes.post('/medias',authGrade.AuthenticateToken, this.mediasController.Create);
        routes.delete('/medias/:slug',authGrade.AuthenticateToken, this.mediasController.Delete);
        routes.put('/medias/:id',authGrade.AuthenticateToken, this.mediasController.Put);
    }
}
