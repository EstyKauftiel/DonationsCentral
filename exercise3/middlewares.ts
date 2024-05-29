import { NextFunction, Request, Response } from "express";
import _ from "lodash";

export function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(` new donation - name : ${req.body.name} amount: ${req.body.sum}`);;
    next();
}

export function isNumber(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    if (!id) {
        res.status(400).send(`id is invalid ${req.params.id}`);
        return;
    }
    next();
}

export function isNotNull(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
        res.status(400).send("body is null");
        return;
    }
    next();
}