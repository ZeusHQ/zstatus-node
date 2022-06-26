export enum APIPageSubscriptionNotificationType {
  Email = 'Email',
  SMS = 'SMS',
  Webhook = 'Webhook',
}

/*
********************
 API Types
********************
*/

export type APISubscriptionsResponse = APISubscription[];

export interface APISubscriptionDeleteResponse {
  success: boolean;
}

export interface APIImportBulkSubscriptionsResponse {
  count: number;
}

export interface CreateBulkSubscriptionProps {
  pageId: string;
  subscriptions: {
    type: APIPageSubscriptionNotificationType;
    value: string;
  }[];
}

export interface CreateEmailSubscriptionProps {
  pageId: string;
  serviceId?: string;
  userId?: string;
  type: APIPageSubscriptionNotificationType.Email;
  email: string;
}

export interface CreateSMSSubscriptionProps {
  pageId: string;
  serviceId?: string;
  userId?: string;
  type: APIPageSubscriptionNotificationType.SMS;
  phone: string;
}

export interface CreateWebhookSubscriptionProps {
  pageId: string;
  serviceId?: string;
  userId?: string;
  type: APIPageSubscriptionNotificationType.Webhook;
  url: string;
  email: string;
}

export interface UpdateSubscriptionProps {
  id: string;
  pageId: string;
  serviceId?: string;
  userId?: string;
  type: APIPageSubscriptionNotificationType;
  value: string;
}

export interface APISubscription {
  id: string;
  pageId: string;
  serviceId?: string;
  userId?: string;
  type: APIPageSubscriptionNotificationType;
  value: string;

  createdAt: string;
  updatedAt: string;
}

export interface APISubscriptionSearchArgs {
  pageId: string;
  type: APIPageSubscriptionNotificationType;
}
