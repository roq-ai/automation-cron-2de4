import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AdministratorInterface {
  id?: string;
  username: string;
  password: string;
  email: string;
  last_login?: any;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface AdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  organization_id?: string;
}
