import { FundRaiser } from "../types";

export default class DonateService{
    private donateList: Array<FundRaiser>;

    constructor()
    {
        this.donateList=[
            {
                id: 1,
                name: "Lea",
                cell: "058963215",
                groupNum: 1,
                donations: []
            },
            {
                id: 2,
                name: "Esty",
                cell: "0569823654",
                groupNum: 2,
                donations: []
            },
            {
                id: 3,
                name: "Sara",
                cell: "0597863214",
                groupNum: 1,
                donations: []
            },
            {
                id: 4,
                name: "Israel",
                cell: "0548796631",
                groupNum: 3,
                donations: []
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
}