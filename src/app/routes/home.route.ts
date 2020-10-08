import { Request, Response, IRouter } from "express";
import { HomeController } from "../../controllers/home.controller";
const { exec, spawn } = require('child-process-async');

/***
 *
 */
export class HomeRoute {
    homeController: HomeController = new HomeController();

    /***
     *
     * @param routes
     * @constructor
     */
    Run(routes: IRouter) {
        routes.get("/", this.homeController.Index);
        routes.get('/create', ( async (req, res) => {
            const { stdout, stderr } = await exec("sequelize db:create --env test");
            console.log('stdout', stdout);
            console.log('stderr', stderr);

            res.json({
                message: "Create database use test env",
            });
        }));
        routes.get('/migrate', ( async (req, res) => {
            const { stdout, stderr } = await exec("sequelize db:migrate --env test");
            console.log('stdout', stdout);
            console.log('stderr', stderr);

            res.json({
                message: "update database use test env",
            });
        }))
    }
}
