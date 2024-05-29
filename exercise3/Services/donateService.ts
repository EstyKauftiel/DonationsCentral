import { Donation, FundRaiser } from "../types";
import GroupsService from "./groupsService";

export default class DonateService{
    private donateList: Array<FundRaiser>;

    constructor(private groupsService: GroupsService)
    {
        this.donateList=[
            {
                id: 1,
                name: "Lea",
                cell: "058963215",
                groupNum: 1,
                donations: [ 
                {
                    id: 1,
                    name: "Yosf",
                    cell: "0521485247",
                    sum: 560,
                    FundRaiserID:1
                }]
            },
            {
                id: 2,
                name: "Esty",
                cell: "0569823654",
                groupNum: 2,
                donations: [{
                    id: 2,
                    name: "Michael",
                    cell: "0584236978",
                    sum: 200,
                    FundRaiserID:2
                }]
            },
            {
                id: 3,
                name: "Sara",
                cell: "0597863214",
                groupNum: 1,
                donations: [{
                    id: 3,
                    name: "Moshe",
                    cell: "0541236987",
                    sum: 780,
                    FundRaiserID:3
                }]
            },
            {
                id: 4,
                name: "Israel",
                cell: "0548796631",
                groupNum: 3,
                donations: [{
                    id: 4,
                    name: "Tamar",
                    cell: "0536987236",
                    sum: 1050,
                    FundRaiserID:4
                }]
            },
        ]
    }
    public getAll() {
        return this.donateList;
    }

    public getFundRaiser(fundRaiserId: number) {
        return this.donateList.find(fundRaiser => fundRaiser.id == fundRaiserId);
    }

    public addFundRaiser(fundRaiser: FundRaiser) {
        this.groupsService.addFundRaiser(fundRaiser.groupNum,fundRaiser);
        this.donateList.push(fundRaiser);
    }

    public updateFundRaiser(fundRaiserToUpdate: FundRaiser) {
        const fundRaiserIndex = this.donateList.findIndex(fundRaiser => fundRaiser.id == fundRaiserToUpdate.id);
        this.donateList[fundRaiserIndex] = fundRaiserToUpdate;
    }

    public deleteFundRaiser(fundRaiserId: number) {
        const fundRaiserIndex = this.donateList.findIndex(fundRaiser => fundRaiser.id == fundRaiserId);
        delete this.donateList[fundRaiserIndex];
    }
    public addDonation(fundRaiserId: number, donation: Donation){
        const fundRaiserIndex = this.donateList.findIndex(fundRaiser => fundRaiser.id == fundRaiserId);
        this.donateList[fundRaiserIndex].donations.push(donation);
    }
}