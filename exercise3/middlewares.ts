import { NextFunction, Request, Response } from "express";

export function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`Server got request ${req.method} ${req.url}`);
    next();
}