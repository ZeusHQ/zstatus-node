import axios from 'axios';
import {
  APIIncidentSearchArgs,
  APIInvitationSearchArgs,
  APIMemberSearchArgs,
  APIServiceGroupSearchArgs,
  APIServiceSearchArgs,
  APIStatusOptionSearchArgs,
  APISubscriptionSearchArgs,
  CreateEmailSubscriptionProps,
  CreateIncidentProps,
  CreateInvitationProps,
  CreateMemberProps,
  CreateServiceGroupProps,
  CreateServiceProps,
  CreateSMSSubscriptionProps,
  CreateStatusOptionProps,
  CreateWebhookSubscriptionProps,
  UpdateIncidentProps,
  UpdateInvitationProps,
  UpdateMemberProps,
  UpdateServiceGroupProps,
  UpdateServiceProps,
  UpdateStatusOptionProps,
  UpdateSubscriptionProps,
} from './types';

export interface ZStatusClientConfig {
  apiKey: string;
  dev?: boolean;
}

export default class ZStatusClient {
  baseUrl: string;
  apiKey: string;

  constructor(config: ZStatusClientConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.dev ? 'http://localhost:3000/api/v0' : 'https://zstatus.io/api/v0';
  }

  getHeaders() {
    return {
      'content-type': 'application/json',
      'x-api-key': this.apiKey,
    };
  }

  /* Services */
  getServices(params: APIServiceSearchArgs) {
    const searchParams = new URLSearchParams(params as any);
    const url = `${this.baseUrl}/services?${searchParams.toString()}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  getService(serviceId: string) {
    const url = `${this.baseUrl}/services/${serviceId}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  createService(service: CreateServiceProps) {
    const url = `${this.baseUrl}/services`;
    return axios
      .post(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(service),
      })
      .then((res) => res.data);
  }

  updateService(serviceId: string, serviceUpdates: UpdateServiceProps) {
    const url = `${this.baseUrl}/services/${serviceId}`;
    return axios
      .put(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(serviceUpdates),
      })
      .then((res) => res.data);
  }

  deleteService(serviceId: string) {
    const url = `${this.baseUrl}/services/${serviceId}`;
    return axios
      .delete(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  /* Service Groups */
  getServiceGroups(params: APIServiceGroupSearchArgs) {
    const searchParams = new URLSearchParams(params as any);
    const url = `${this.baseUrl}/service-groups?${searchParams.toString()}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  getServiceGroup(serviceGroupId: string) {
    const url = `${this.baseUrl}/service-groups/${serviceGroupId}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  createServiceGroup(serviceGroup: CreateServiceGroupProps) {
    const url = `${this.baseUrl}/service-groups`;
    return axios
      .post(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(serviceGroup),
      })
      .then((res) => res.data);
  }

  updateServiceGroup(serviceGroupId: string, updates: UpdateServiceGroupProps) {
    const url = `${this.baseUrl}/service-groups/${serviceGroupId}`;
    return axios
      .put(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(updates),
      })
      .then((res) => res.data);
  }

  deleteServiceGroup(serviceGroupId: string) {
    const url = `${this.baseUrl}/service-groups/${serviceGroupId}`;
    return axios
      .delete(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  /* Incidents */
  getIncidents(params: APIIncidentSearchArgs) {
    const searchParams = new URLSearchParams(params as any);
    const url = `${this.baseUrl}/incidents?${searchParams.toString()}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  getIncident(incidentId: string) {
    const url = `${this.baseUrl}/incidents/${incidentId}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  createIncident(incident: CreateIncidentProps) {
    const url = `${this.baseUrl}/incidents`;
    return axios
      .post(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(incident),
      })
      .then((res) => res.data);
  }

  updateIncident(incidentId: string, updates: UpdateIncidentProps) {
    const url = `${this.baseUrl}/incidents/${incidentId}`;
    return axios
      .put(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(updates),
      })
      .then((res) => res.data);
  }

  deleteIncident(incidentId: string) {
    const url = `${this.baseUrl}/incidents/${incidentId}`;
    return axios
      .delete(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  /* Members */
  getMembers(params: APIMemberSearchArgs) {
    const searchParams = new URLSearchParams(params as any);
    const url = `${this.baseUrl}/members?${searchParams.toString()}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  getMember(memberId: string) {
    const url = `${this.baseUrl}/members/${memberId}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  createMember(member: CreateMemberProps) {
    const url = `${this.baseUrl}/members`;
    return axios
      .post(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(member),
      })
      .then((res) => res.data);
  }

  updateMember(memberId: string, updates: UpdateMemberProps) {
    const url = `${this.baseUrl}/members/${memberId}`;
    return axios
      .put(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(updates),
      })
      .then((res) => res.data);
  }

  deleteMember(memberId: string) {
    const url = `${this.baseUrl}/members/${memberId}`;
    return axios
      .delete(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  /* Invitation */
  getInvitations(params: APIInvitationSearchArgs) {
    const searchParams = new URLSearchParams(params as any);
    const url = `${this.baseUrl}/invitations?${searchParams.toString()}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  getInvitation(invitationId: string) {
    const url = `${this.baseUrl}/invitations/${invitationId}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  createInvitation(invitation: CreateInvitationProps) {
    const url = `${this.baseUrl}/invitations`;
    return axios
      .post(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(invitation),
      })
      .then((res) => res.data);
  }

  updateInvitation(invitationId: string, updates: UpdateInvitationProps) {
    const url = `${this.baseUrl}/invitations/${invitationId}`;
    return axios
      .put(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(updates),
      })
      .then((res) => res.data);
  }

  deleteInvitation(invitationId: string) {
    const url = `${this.baseUrl}/invitations/${invitationId}`;
    return axios
      .delete(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  /* subscriptions */
  getSubscriptions(params: APISubscriptionSearchArgs) {
    const searchParams = new URLSearchParams(params as any);
    const url = `${this.baseUrl}/subscriptions?${searchParams.toString()}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  getSubscription(subscriptionId: string) {
    const url = `${this.baseUrl}/subscriptions/${subscriptionId}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  createEmailSubscription(subscription: CreateEmailSubscriptionProps) {
    const url = `${this.baseUrl}/subscriptions`;
    return axios
      .post(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(subscription),
      })
      .then((res) => res.data);
  }

  createSMSSubscription(subscription: CreateSMSSubscriptionProps) {
    const url = `${this.baseUrl}/subscriptions`;
    return axios
      .post(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(subscription),
      })
      .then((res) => res.data);
  }

  createWebhookSubscription(subscription: CreateWebhookSubscriptionProps) {
    const url = `${this.baseUrl}/subscriptions`;
    return axios
      .post(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(subscription),
      })
      .then((res) => res.data);
  }

  updateSubscription(subscriptionId: string, updates: UpdateSubscriptionProps) {
    const url = `${this.baseUrl}/subscriptions/${subscriptionId}`;
    return axios
      .put(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(updates),
      })
      .then((res) => res.data);
  }

  deleteSubscription(subscriptionId: string) {
    const url = `${this.baseUrl}/subscriptions/${subscriptionId}`;
    return axios
      .delete(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  /* Status Options */
  getStatusOptions(params: APIStatusOptionSearchArgs) {
    const searchParams = new URLSearchParams(params as any);
    const url = `${this.baseUrl}/status-options?${searchParams.toString()}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  getStatusOption(statusOptionId: string) {
    const url = `${this.baseUrl}/status-options/${statusOptionId}`;
    return axios
      .get(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }

  createStatusOption(statusOption: CreateStatusOptionProps) {
    const url = `${this.baseUrl}/status-options`;
    return axios
      .post(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(statusOption),
      })
      .then((res) => res.data);
  }

  updateStatusOption(statusOptionId: string, updates: UpdateStatusOptionProps) {
    const url = `${this.baseUrl}/status-options/${statusOptionId}`;
    return axios
      .put(url, {
        headers: this.getHeaders(),
        body: JSON.stringify(updates),
      })
      .then((res) => res.data);
  }

  deleteStatusOption(statusOptionId: string) {
    const url = `${this.baseUrl}/status-options/${statusOptionId}`;
    return axios
      .delete(url, {
        headers: this.getHeaders(),
      })
      .then((res) => res.data);
  }
}
