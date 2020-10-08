import { Request, Response } from "express";

export class HomeController {
    Index(req: Request, res: Response) {
        res.json({
            message: "Hello Stratege",
        });
    }
}
