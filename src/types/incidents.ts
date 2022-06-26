import { APIUser } from './auth';
import { APIPage } from './pages';
import { APIStatusOption } from './statusOptions';

/*
********************
 API Types
********************
*/

export interface APIIncidentDeleteResponse {
  success: boolean;
}

export interface AffectedService {
  serviceId: string;
  statusId: string;
  status?: APIStatusOption;
}

export interface CreateIncidentProps {
  pageId: string;
  name: string;
  message?: string;
  parentId?: string;
  impactId?: string;
  statusId: string;
  startedAt?: string;
  resolvedAt?: string;
  pagerDutyId?: string;
  affectedServices: AffectedService[];
  notifySubscribers: boolean;
}

export interface UpdateIncidentProps {
  id: string;
  name?: string;
  message?: string;
  notifySubscribers?: boolean;
  pagerDutyId?: string;
  parentId?: string;
  startedAt?: string;
  resolvedAt?: string;
  impactId?: string;
  statusId?: string;
  affectedServices: AffectedService[];
}

export interface APIIncidentService {
  incidentId: string;
  serviceId: string;
}

export interface APIIncident extends CreateIncidentProps {
  id: string;
  page?: APIPage;
  createdByUserId?: string;
  createdBy?: APIUser;
  createdAt: string;
  impact?: APIStatusOption;
  status?: APIStatusOption;
  updates?: APIIncident[];
  updatedAt: string;
}

export interface APIIncidentSearchArgs {
  pageId: string;
  parentId: string | null;
}
