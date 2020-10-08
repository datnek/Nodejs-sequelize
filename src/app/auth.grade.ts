"use strict";

import jwt from "jsonwebtoken";
// get config vars
import * as dotenv from "dotenv";
import {Request, Response} from "express";

export class AuthGrade {
    constructor(){
        dotenv.config()
    }

    /***
     *
     * @param req
     * @param res
     * @param next
     * @constructor
     */
    AuthenticateToken(req: Request, res: Response, next: () => void) {
        // Gather the jwt access token from the request header
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        // console.log(`the token is ${token}`);
        //we can private url here and do other with token


        if (token == null) return res.sendStatus(401); // if there isn't any token
        // console.log('debug', process.env.ACCESS_TOKEN_SECRET);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , (err, user) => {
            console.log(err);
            if (err) return res.sendStatus(403);

            // @ts-ignore
            req.user = user;
            next() // pass the execution off to whatever request the client intended
        });
    }

    /***
        the above object structure is completely arbitrary
     * @param payload
     */
    GenerateAccessToken(payload: {Privatecode: string, Origin: string, Roles: string, Expiretime: number }) {
        // expires after half and hour (1800 seconds = 30 minutes)
        const days = (payload.Expiretime > 0 ? payload.Expiretime : process.env.ACCESS_TOKEN_LIFE);
        const daystr = `${days} days`;
        //, algorithm: "HS256"
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: daystr, algorithm: "HS256" });
    }
}
