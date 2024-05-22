import { Router, Request, Response } from "express";
import DonationsService from "../Services/donationsService";
import _ from "lodash";

export default class DonationsApi {
    public router: Router;
    constructor(private service: DonationsService) {
        this.router = Router();
    }

    public setRoutes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send(this.service.getAll());
        });
        
        this.router.get('/:donationId', (req: Request, res: Response) => {
            const donationId = Number(req.params.id);
            if (!donationId || !_.isNumber(donationId)) {
                res.status(400).send(`donationId is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.id}`);
                return;
            }
        
            const donation = this.service.getDonation(donationId);
            res.send(donation);
        });
        
        this.router.post('/', (req: Request, res: Response) => {
            const donation = req.body;
            if(!_.isNumber(donation.id) || !_.isString(donation.name) || !_.isString(donation.cell) ||donation.cell.length!==10  || !_.isNumber(donation.sum))
            {
                res.status(400).send(`donation is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.donation}`);
                return;
            }
            this.service.addDonation(donation);
            res.end();
        });

        this.router.put('/', (req: Request, res: Response) => {
            const donation = req.body;
            if(!_.isNumber(donation.id) || !_.isString(donation.name) || !_.isString(donation.cell) ||donation.cell.length!==10  || !_.isNumber(donation.sum))
            {
                res.status(400).send(`donation is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.donation}`);
                return;
            }
            this.service.updateDonation(donation);
            res.end();
        });
        
        this.router.delete('/:donationId', (req: Request, res: Response) => {
            const donationId = Number(req.params.id);;
            if (!donationId || !_.isNumber(donationId)) {
                res.status(400).send(`donationId is invalid, Sorry for the mistake, we promise to repent😉 ${req.params.id}`);
                return;
            }
            const donation = this.service.deleteDonation(donationId);
            res.send(donation);
        });
        
    }
}