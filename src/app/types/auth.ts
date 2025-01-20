
export interface IUser {
    id: string;
    name: string;
    email: string;
    defaultTenantId: string;
}

export interface ITenant {
    id: string;
    name: string;
}
