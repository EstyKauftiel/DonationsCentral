import { Router, Request, Response } from "express";
import DonationsService from "../Services/donationsService";
import _ from "lodash";
import { isNotNull, isNumber, logRequest } from "../middlewares";

export default class DonationsApi {
    public router: Router;
    constructor(private service: DonationsService) {
        this.router = Router();
    }

    public setRoutes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send(this.service.getAll());
        });
        
        this.router.get('/:id', isNumber, (req: Request, res: Response) => {
            const donationId = Number(req.params.id);
            console.log(donationId);
            res.send(this.service.getDonation(donationId));
        });
        
        this.router.post('/', isNotNull,logRequest, (req: Request, res: Response) => {
            const donation = req.body;
            if(!_.isNumber(donation.id) || !_.isString(donation.name) || !_.isString(donation.cell) ||donation.cell.length!==10  || !_.isNumber(donation.sum))
                {
                    res.status(400).send(`donation is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.donation}`);
                    return;
                }
            this.service.addDonation(req.body);
            res.end();
        });

        this.router.put('/',isNotNull, (req: Request, res: Response) => {
            const donation = req.body;
            if(!_.isNumber(donation.id) || !_.isString(donation.name) || !_.isString(donation.cell) ||donation.cell.length!==10  || !_.isNumber(donation.sum))
            {
                res.status(400).send(`donation is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.donation}`);
                return;
            }
            this.service.updateDonation(donation);
            res.end();
        });
        
        this.router.delete('/:id',isNumber, (req: Request, res: Response) => {
            const donationId = Number(req.params.id);;
            res.send(this.service.deleteDonation(donationId));
        });
        
    }
}