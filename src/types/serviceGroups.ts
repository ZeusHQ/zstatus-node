import { APIPage } from './pages';

/*
********************
 API Types
********************
*/
export type APIServiceGroupsResponse = APIServiceGroup[];

export interface APIServiceGroupDeleteResponse {
  success: boolean;
}

export interface CreateServiceGroupProps {
  pageId: string;
  name: string;
}

export interface UpdateServiceGroupProps {
  id: string;
  name?: string;
}

export interface APIServiceGroup extends CreateServiceGroupProps {
  id: string;
  page?: APIPage;
  createdAt: string;
  updatedAt: string;
}

export interface APIServiceGroupSearchArgs {
  pageId?: string;
  serviceId?: string;
}
