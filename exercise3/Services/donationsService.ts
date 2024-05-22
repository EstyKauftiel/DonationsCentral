import { Donation } from "../types";

export default class DonationsService{
    private donationList: Array<Donation>;

    constructor()
    {
        this.donationList=[
            {
                id: 1,
                name: "Yosf",
                cell: "0521485247",
                sum: 560
            },
            {
                id: 2,
                name: "Michael",
                cell: "0584236978",
                sum: 200
            },
            {
                id: 3,
                name: "Moshe",
                cell: "0541236987",
                sum: 780
            },
            {
                id: 4,
                name: "Tamar",
                cell: "0536987236",
                sum: 1050
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