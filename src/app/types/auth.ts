
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

export interface ISessionData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  contactPhone: string;
  professionType: string;
}
