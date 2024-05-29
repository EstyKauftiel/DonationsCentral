import { Router, Request, Response } from "express";
import GroupsService from "../Services/groupsService";
import _ from "lodash";
import { isNotNull, isNumber } from "../middlewares";

export default class GroupsApi {
    public router: Router;
    constructor(private service: GroupsService) {
        this.router = Router();
    }

    public setRoutes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send(this.service.getAll());
        });
        
        this.router.get('/:id', isNumber, (req: Request, res: Response) => {
            const groupId = Number(req.params.id);   
            res.send(this.service.getGroup(groupId));
        });
        
        this.router.post('/', isNotNull, (req: Request, res: Response) => {
            const group = req.body;
            this.service.addGroup(group);
            res.end();
        });
        
        this.router.put('/', isNotNull, (req: Request, res: Response) => {
            const group = req.body;
            this.service.updateGroup(group);
            res.end();
        });
        
        this.router.delete('/:id', isNumber, (req: Request, res: Response) => {
            const groupId = Number(req.params.id);;
            res.send(this.service.deleteGroup(groupId));
        });
    }
}