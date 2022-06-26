import { APIPage } from './pages';
import { APIServiceGroup } from './serviceGroups';
import { APIOrderByArgs, APIPaginationArgs } from './pagination';
import { APIStatusOption } from './statusOptions';

/*
********************
 API Types
********************
*/
export type APIServicesResponse = APIService[];

export interface APIServiceDeleteResponse {
  success: boolean;
}

export interface CreateServiceProps {
  pageId: string;
  name: string;
  statusId: string;
  description?: string;
  serviceGroupId?: string;
  serviceGroupName?: string;
  pagerDutyId?: string;
  url?: string;
  monitor?: boolean;
  lastPingedAt?: string;
}

export interface UpdateServiceProps {
  id: string;
  statusId?: string;
  name?: string;
  description?: string;
  serviceGroupId?: string;
  serviceGroupName?: string;
  pagerDutyId?: string;
  url?: string;
  monitor?: boolean;
  lastPingedAt?: string;
}

export interface APIService extends CreateServiceProps {
  id: string;
  page?: APIPage;
  status: APIStatusOption;
  serviceGroup?: APIServiceGroup;
  createdAt: string;
  updatedAt: string;
}

export type APIServiceSearchArgs = APIOrderByArgs &
  APIPaginationArgs & {
    pageId: string;
  };
