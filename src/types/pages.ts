import { APIIncident } from './incidents';
import { APIService } from './services';
import { APIStatusOption } from './statusOptions';

export enum APIPageType {
  Public = 'Public',
  Private = 'Private',
  Audience = 'Audience',
}

/*
********************
 API Types
********************
*/
export type APIPagesResponse = APIPage[];

export interface APIPageDeleteResponse {
  success: boolean;
}

export interface APIPageAvailabilityResponse {
  available: boolean;
}

export interface CreatePageProps {
  name: string;
  type: APIPageType;
  slug?: string;
  services?: string;
  operationalStatusId?: string;
  resolvedStatusId?: string;
}

export interface UpdatePageProps {
  id: string;
  name?: string;
  active?: boolean;
  organizationLegalName?: string;
  companyWebsiteURL?: string;
  supportURL?: string;
  privacyPolicyURL?: string;
  defaultSMSCountryCode?: string;
  pageTimeZone?: string;
  googleAnalyticsTrackingID?: string;
  headline?: string;
  about?: string;
  type?: APIPageType;
  slug?: string;

  operationalStatusId?: string;
  resolvedStatusId?: string;

  brandColor?: string;
  backgroundColor?: string;
  panelColor?: string;

  logoUrl?: string;
  logoUrlBlurHash?: string;
  logoWidth?: number;
  logoHeight?: number;

  iconUrl?: string;
  iconUrlBlurHash?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export interface APIPage extends CreatePageProps {
  id: string;
  slug: string;

  active: boolean;
  headline: string;
  about: string;

  organizationLegalName: string;
  companyWebsiteURL: string;
  supportURL: string;
  privacyPolicyURL: string;
  defaultSMSCountryCode: string;
  pageTimeZone: string;
  googleAnalyticsTrackingID: string;

  brandColor?: string;
  backgroundColor?: string;
  panelColor?: string;

  operationalStatus?: APIStatusOption;
  resolvedStatus?: APIStatusOption;

  logoUrl?: string;
  logoUrlBlurHash?: string;
  logoWidth?: number;
  logoHeight?: number;

  iconUrl?: string;
  iconUrlBlurHash?: string;
  iconWidth?: number;
  iconHeight?: number;

  createdAt: string;
  updatedAt: string;
}

export type PageWithNested = APIPage & {
  incidents: APIIncident[];
  services: APIService[];
};
