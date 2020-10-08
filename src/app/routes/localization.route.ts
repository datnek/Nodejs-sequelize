import { Request, Response, IRouter } from "express";
import { LocalizationsController } from "../../controllers/localizations.controller";
import {AuthGrade} from "../auth.grade";

/***
 *
 */
export class LocalizationRoute {
    localizationsController: LocalizationsController = new LocalizationsController();

    /***
     *
     * @param routes
     * @param authGrade
     * @constructor
     */
    Run(routes: IRouter, authGrade: AuthGrade) {
        routes.get('/localizations',authGrade.AuthenticateToken, this.localizationsController.FindAll);
        routes.get('/localizations/:id',authGrade.AuthenticateToken, this.localizationsController.FindById);
        routes.get('/localizations/public/:slug',authGrade.AuthenticateToken, this.localizationsController.FindBySlug);
        routes.post('/localizations',authGrade.AuthenticateToken, this.localizationsController.Create);
        routes.delete('/localizations/:slug',authGrade.AuthenticateToken, this.localizationsController.Delete);
        routes.put('/localizations/:id',authGrade.AuthenticateToken, this.localizationsController.Put);
    }
}
