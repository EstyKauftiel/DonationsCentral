import { Donation } from "../types";
import DonateService from "./donateService";

export default class DonationsService{
    private donationList: Array<Donation>;

    constructor(private donateService: DonateService )
    {
        this.donationList=[
            {
                id: 1,
                name: "Yosf",
                cell: "0521485247",
                sum: 560,
                FundRaiserID:1
            },
            {
                id: 2,
                name: "Michael",
                cell: "0584236978",
                sum: 200,
                FundRaiserID:2
            },
            {
                id: 3,
                name: "Moshe",
                cell: "0541236987",
                sum: 780,
                FundRaiserID:3
            },
            {
                id: 4,
                name: "Tamar",
                cell: "0536987236",
                sum: 1050,
                FundRaiserID:4
            },
        ]
    }
    public getAll() {
        return this.donationList;
    }

    public getDonation(donationId: number) {
        return this.donationList.find(donation => donation.id == donationId);
    }

    public addDonation(donation: Donation) {
        this.donateService.addDonation(donation.FundRaiserID,donation);
        this.donationList.push(donation);
    }

    public updateDonation(donationToUpdate: Donation) {
        const donationIndex = this.donationList.findIndex(donation => donation.id == donationToUpdate.id);
        this.donationList[donationIndex] = donationToUpdate;
    }

    public deleteDonation(donationId: number) {
        const donationIndex = this.donationList.findIndex(donation => donation.id == donationId);
        delete this.donationList[donationIndex];
    }
    
}