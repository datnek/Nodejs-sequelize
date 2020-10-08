import { Request, Response, IRouter } from "express";
import {SecuritiesController} from "../../controllers/securities.controller";
import {AuthGrade} from "../auth.grade";

/***
 *
 */
export class SecurityRoute {
    securitiesController: SecuritiesController  =  new SecuritiesController();

/***
 *
 * @param routes
 * @param authGrade
 * @constructor
 */
Run(routes: IRouter, authGrade: AuthGrade) {
    routes.get('/securities', authGrade.AuthenticateToken, this.securitiesController.FindAll);
    routes.get('/securities/:id', authGrade.AuthenticateToken,this.securitiesController.FindById);
    routes.get('/securities/app/init', this.securitiesController.InitUserApp);
    routes.get('/securities/public/:slug', authGrade.AuthenticateToken,this.securitiesController.FindBySlug);
    routes.post('/securities', this.securitiesController.Create);
    routes.delete('/securities/:slug', authGrade.AuthenticateToken, this.securitiesController.Delete);
   // routes.put('/securities/:id', authGrade.AuthenticateToken, this.securitiesController.Put);
}
}
