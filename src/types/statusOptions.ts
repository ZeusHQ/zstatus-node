import { APIPage } from './pages';
import { APIOrderByArgs, APIPaginationArgs } from './pagination';

export enum APIStatusOptionType {
  Service = 'Service',
  Incident = 'Incident',
}

/*
********************
 API Types
********************
*/
export type APIStatusOptionsResponse = APIStatusOption[];

export interface APIStatusOptionDeleteResponse {
  success: boolean;
}

export interface CreateStatusOptionProps {
  pageId: string;
  name: string;
  description: string;
  color: string;
  icon?: string | undefined;
  severity: number;
  type: APIStatusOptionType;
}

export interface UpdateStatusOptionProps {
  id: string;
  name: string;
  description: string;
  color: string;
  icon?: string | undefined;
  severity: number;
}

export interface APIStatusOption extends CreateStatusOptionProps {
  id: string;
  page?: APIPage;
  createdAt: string;
  updatedAt: string;
}

export type APIStatusOptionSearchArgs = APIOrderByArgs &
  APIPaginationArgs & {
    pageId: string;
    type?: APIStatusOptionType;
  };
