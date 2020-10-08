import { Request, Response, IRouter } from "express";
import { UsersController } from "../../controllers/users.controller";
import {AuthGrade} from "../auth.grade";

/***
 *
 */
export class UserRoute {
    usersController: UsersController;

    /***
     *
     * @param routes
     * @param authGrade
     * @constructor
     */
    Run(routes: IRouter, authGrade: AuthGrade) {
        this.usersController = new UsersController();
        routes.get('/users',authGrade.AuthenticateToken, this.usersController.FindAll);
        routes.get('/users/username/:username',authGrade.AuthenticateToken, this.usersController.FindByUsername);
        routes.get('/users/:id',authGrade.AuthenticateToken, this.usersController.FindById);
        routes.get('/users/public/:slug',authGrade.AuthenticateToken, this.usersController.FindBySlug);
        routes.post('/users', this.usersController.Create);
        routes.post('/users/login', this.usersController.Login);
        routes.delete('/users/:slug',authGrade.AuthenticateToken, this.usersController.Delete);
        routes.put('/users/:id',authGrade.AuthenticateToken, this.usersController.Put);
    }
}
