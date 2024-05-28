import { Router, Request, Response } from "express";
import DonateService from "../Services/donateService";
import _ from "lodash";
import { logRequest } from "../middlewares";

export default class DonateApi {
    public router: Router;
    constructor(private service: DonateService) {
        this.router = Router();
    }

    public setRoutes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send(this.service.getAll());
        });
        
        this.router.get('/:fundRaiserId', (req: Request, res: Response) => {
            const fundRaiserId = Number(req.params.fundRaiserId);
            if (!fundRaiserId || !_.isNumber(fundRaiserId)) {
                res.status(400).send(`fundRaiserId is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.id}`);
                return;
            }      
            const fundRaiser = this.service.getFundRaiser(fundRaiserId);
            res.send(fundRaiser);
        });
        
        this.router.post('/',logRequest, (req: Request, res: Response) => {
            const fundRaiser = req.body;
            if(!_.isNumber(fundRaiser.id) || !_.isString(fundRaiser.name) || !_.isString(fundRaiser.cell) ||fundRaiser.cell.length!==10 )
            {
                res.status(400).send(`fundRaiser is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.fundRaiser}`);
                return;
            }
            this.service.addFundRaiser(fundRaiser);
            res.end();
        });

        this.router.put('/', (req: Request, res: Response) => {
            const fundRaiser = req.body;
            if(!_.isNumber(fundRaiser.id) || !_.isString(fundRaiser.name) || !_.isString(fundRaiser.cell) ||fundRaiser.cell.length!==10 )
            {
                res.status(400).send(`fundRaiser is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.fundRaiser}`);
                return;
            }
            this.service.updateFundRaiser(fundRaiser);
            res.end();
        });
        
        this.router.delete('/:fundRaiserId', (req: Request, res: Response) => {
            const fundRaiserId = Number(req.params.fundRaiserId);;
            if (!fundRaiserId || !_.isNumber(fundRaiserId)) {
                res.status(400).send(`fundRaiserId is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.fundRaiserId}`);
                return;
            }
            const fundRaiser = this.service.deleteFundRaiser(fundRaiserId);
            res.send(fundRaiser);
        });
    }
}