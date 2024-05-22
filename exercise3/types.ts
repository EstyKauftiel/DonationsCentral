export type FundRaiser= {
    id: number;
    name: string;
    cell: string;
    groupNum: number;
    donations: Array<Donation>;
}

export type Donation= {
    id: number;
    name: string;
    cell: string;
    sum: number;
}

export type Groups= {
    id: number;
    donate: Array<FundRaiser>;
}