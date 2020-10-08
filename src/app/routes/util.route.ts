import {IRouter} from "express";
import {UtilsController} from "../../controllers/utils.controller";

/***
 *
 */
class UtilRoute {
    utilsController: UtilsController = new UtilsController();

    /***
     *
     * @param routes
     * @constructor
     */
    Run(routes: IRouter) {
        routes.get("/utils/savefile", this.utilsController.SaveFile);
        routes.get("/utils/sendmail", this.utilsController.SendMail);
        routes.get("/utils/sendsms", this.utilsController.SendSms);
    }
}
