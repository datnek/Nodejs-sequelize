"use strict";
// @ts-ignore
import compression from "compression";

import * as express from "express";

import dotenv from 'dotenv'

import * as cors from "cors";
import { Routes } from "./routes/routes";



/***
 *
 */
class App {
    public app: express.Application;

    /***
     *
     */
    constructor() {
        dotenv.config();
        this.app = express.default();
        this.middlewares();
        this.routes();
    }


    /***
     *
     */
    private middlewares() {
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(express.json()); // same like this.express.use(bodyParser.json())
        this.app.use(compression());
        this.app.use(cors.default());
    }

    /***
     *
     */
    private routes() {
        const router = express.Router();
        new Routes().SetRoutes(router);
        this.app.use("/api", router);
    }
}

export default new App().app;
