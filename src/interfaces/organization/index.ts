import { AdministratorInterface } from 'interfaces/administrator';
import { CronJobInterface } from 'interfaces/cron-job';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  administrator?: AdministratorInterface[];
  cron_job?: CronJobInterface[];
  user?: UserInterface;
  _count?: {
    administrator?: number;
    cron_job?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
