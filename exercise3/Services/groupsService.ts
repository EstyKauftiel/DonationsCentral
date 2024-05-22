import { Groups } from "../types";

export default class GroupsService{
    private groupsList: Array<Groups>;

    constructor()
    {
        this.groupsList=[
            {
                id: 1,
                donate: []
            },
            {
                id: 2,
                donate: []
            },
            {
                id: 3,
                donate: []
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
}