import { FundRaiser, Groups } from "../types";

export default class GroupsService{
    private groupsList: Array<Groups>;

    constructor()
    {
        this.groupsList=[
            {
                id: 1,
                donate: [ {
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
                },
            ]
            }]
            },
            {
                id: 2,
                donate: [{
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
                }]
            },
            {
                id: 3,
                donate: [ {
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
                }]
            },
            {
                id: 4,
                donate: []
            },
        ]
    }
    public getAll() {
        return this.groupsList;
    }

    public getGroup(groupId: number) {
        return this.groupsList.find(group => group.id == groupId);
    }

    public addGroup(group: Groups) {
        this.groupsList.push(group);
    }

    public updateGroup(groupToUpdate: Groups) {
        const groupIndex = this.groupsList.findIndex(group => group.id == groupToUpdate.id);
        this.groupsList[groupIndex] = groupToUpdate;
    }

    public deleteGroup(groupId: number) {
        const groupIndex = this.groupsList.findIndex(group => group.id == groupId);
        delete this.groupsList[groupIndex];
    }
    public addFundRaiser(groupId: number,fundRaiser:FundRaiser ){
        const groupIndex = this.groupsList.findIndex(group => group.id == groupId);
        this.groupsList[groupIndex].donate.push(fundRaiser);
    }
    
}