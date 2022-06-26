import { APIUser } from './auth';

export enum APIIntegrationType {
  PagerDuty = 'PagerDuty',
}

/*
********************
 API Types
********************
*/
export type APIIntegrationsResponse = APIIntegration[];

export interface APIIntegrationDeleteResponse {
  success: boolean;
}

export interface CreateIntegrationProps {
  pageId: string;
  data?: Record<string, string>;
  type: APIIntegrationType;
}

export interface UpdateIntegrationProps {
  id: string;
  data?: Record<string, string>;
}

export interface APIIntegration extends CreateIntegrationProps {
  id: string;
  creatorId: string;
  creator: APIUser;
  createdAt: string;
  updatedAt: string;
}

export interface APIIntegrationSearchArgs {
  pageId: string;
  type?: APIIntegrationType;
}
