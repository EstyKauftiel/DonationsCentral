import { Router, Request, Response } from "express";
import GroupsService from "../Services/groupsService";
import _ from "lodash";

export default class GroupsApi {
    public router: Router;
    constructor(private service: GroupsService) {
        this.router = Router();
    }

    public setRoutes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send(this.service.getAll());
        });
        
        this.router.get('/:groupId', (req: Request, res: Response) => {
            const groupId = Number(req.params.groupId);
            if (!groupId || !_.isNumber(groupId)) {
                res.status(400).send(`groupId is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.groupId}`);
                return;
            }    
            const group = this.service.getGroup(groupId);
            res.send(group);
        });
        
        this.router.post('/', (req: Request, res: Response) => {
            const group = req.body;
            if(!_.isNumber(group.id))
            {
                res.status(400).send(`group is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.group}`);
                return;
            }
            this.service.addGroup(group);
            res.end();
        });
        
        this.router.put('/', (req: Request, res: Response) => {
            const group = req.body;
            if(!_.isNumber(group.id))
            {
                res.status(400).send(`group is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.group}`);
                return;
            }
            this.service.updateGroup(group);
            res.end();
        });
        
        this.router.delete('/:groupId', (req: Request, res: Response) => {
            const groupId = Number(req.params.groupId);;
            if (!groupId || !_.isNumber(groupId)) {
                res.status(400).send(`groupId is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.groupId}`);
                return;
            }
            const group = this.service.deleteGroup(groupId);
            res.send(group);
        });
    }
}