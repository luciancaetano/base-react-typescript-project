
export interface ISessionData {
  token: string;
  user: IUser;
  tenants: ITenant[];
}

export interface ITenant {
  id: string;
  name: string;
  contactPhone?: string;
  contactEmail?: string;
  addressCep?: string;
  addressStreet?: string;
  addressNumber?: string;
  addressComplement?: string;
  addressNeighborhood?: string;
  addressCity?: string;
  addressState?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  emailVerifiedAt?: string;
  createdAt: string;
  updatedAt: string;
  defaultTenantId?: string;
  agendaColorId?: string;
  doctorPrefix?: string;
  documentCpf?: string;
  documentRg?: string;
  contactPhone?: string;
  contactPhoneSecondary?: string;
  contactEmail?: string;
  addressCep?: string;
  addressStreet?: string;
  addressNumber?: string;
  addressComplement?: string;
  addressNeighborhood?: string;
  addressCity?: string;
  addressState?: string;
  doctorCrm?: string;
}
