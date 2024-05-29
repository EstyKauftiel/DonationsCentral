import { NextFunction, Request, Response } from "express";
import _ from "lodash";

export function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`Server got request ${req.method} ${req.url}`);
    next();
}

export function isNumber(req: Request, res: Response, next: NextFunction) {
    const groupId = Number(req.params.id);
    if (groupId == null || !_.isNumber(groupId)) {
        res.status(400).send(`group id is invalid ${req.params.id}`);
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