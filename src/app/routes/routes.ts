import { HomeRoute } from "./home.route";
import { IRouter } from "express";
import {SecurityRoute} from "./security.route";
import {UserRoute} from "./user.route";
import {MediaRoute} from "./media.route";
import {LocalizationRoute} from "./localization.route";
import {AuthGrade} from "../auth.grade";

/***
 *
 */
export class Routes {
    private authGrade: AuthGrade;
    constructor(){
        this.authGrade = new AuthGrade();
    }
    /***
     *
     * @param routes
     * @constructor
     */
    SetRoutes(routes: IRouter): void {
        new HomeRoute().Run(routes);
        new SecurityRoute().Run(routes, this.authGrade);
        new UserRoute().Run(routes, this.authGrade);
        new MediaRoute().Run(routes, this.authGrade);
        new LocalizationRoute().Run(routes, this.authGrade);
    }
}
