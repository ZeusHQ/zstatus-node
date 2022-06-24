const axios = require("axios");

class ZStatusClient {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.dev ? "http://localhost:3000/api/v0" : "https://zstatus.io/api/v0"
    }

    getHeaders() {
        return {
            "content-type": "application/json",
            "x-api-key": this.apiKey,
        }
    }

    getStatusOptions(params) {
        const searchParams = new URLSearchParams(params);
        const url = `${this.baseUrl}/status-options?${searchParams.toString()}`;
        return axios.get(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    getStatusOption(statusOptionId) {
        const url = `${this.baseUrl}/status-options/${statusOptionId}`;
        return axios.get(url, {
            headers: this.getHeaders(),
        }).then(res => res.data)
    }

    createStatusOption(statusOption) {
        const url = `${this.baseUrl}/status-options`;
        return axios.post(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(statusOption)
        }).then(res => res.data)
    }

    updateStatusOption(statusOptionId, statusOptionUpdates) {
        const url = `${this.baseUrl}/status-options/${statusOptionId}`;
        return axios.put(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(statusOptionUpdates)
        }).then(res => res.data)
    }

    deleteStatusOption(statusOptionId) {
        const url = `${this.baseUrl}/status-options/${statusOptionId}`;
        return axios.delete(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    /* Services */
    getServices(params) {
        const searchParams = new URLSearchParams(params);
        const url = `${this.baseUrl}/services?${searchParams.toString()}`;
        return axios.get(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    getService(serviceId) {
        const url = `${this.baseUrl}/services/${serviceId}`;
        return axios.get(url, {
            headers: this.getHeaders(),
        }).then(res => res.data)
    }

    createService(service) {
        const url = `${this.baseUrl}/services`;
        return axios.post(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(service)
        }).then(res => res.data)
    }

    updateService(serviceId, serviceUpdates) {
        const url = `${this.baseUrl}/services/${serviceId}`;
        return axios.put(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(serviceUpdates)
        }).then(res => res.data)
    }

    deleteService(serviceId) {
        const url = `${this.baseUrl}/services/${serviceId}`;
        return axios.delete(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    /* Service Groups */
    getServiceGroups(params) {
        const searchParams = new URLSearchParams(params);
        const url = `${this.baseUrl}/service-groups?${searchParams.toString()}`;
        return axios.get(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    getServiceGroup(serviceGroupId) {
        const url = `${this.baseUrl}/service-groups/${serviceGroupId}`;
        return axios.get(url, {
            headers: this.getHeaders(),
        }).then(res => res.data)
    }

    createServiceGroup(serviceGroup) {
        const url = `${this.baseUrl}/service-groups`;
        return axios.post(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(serviceGroup)
        }).then(res => res.data)
    }

    updateServiceGroup(serviceGroupId, updates) {
        const url = `${this.baseUrl}/service-groups/${serviceGroupId}`;
        return axios.put(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(updates)
        }).then(res => res.data)
    }

    deleteServiceGroup(serviceGroupId) {
        const url = `${this.baseUrl}/service-groups/${serviceGroupId}`;
        return axios.delete(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    /* Incidents */
    getIncidents(params) {
        const searchParams = new URLSearchParams(params);
        const url = `${this.baseUrl}/incidents?${searchParams.toString()}`;
        return axios.get(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    getIncident(incidentId) {
        const url = `${this.baseUrl}/incidents/${incidentId}`;
        return axios.get(url, {
            headers: this.getHeaders(),
        }).then(res => res.data)
    }

    createIncident(incident) {
        const url = `${this.baseUrl}/incidents`;
        return axios.post(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(incident)
        }).then(res => res.data)
    }

    updateIncident(incidentId, updates) {
        const url = `${this.baseUrl}/incidents/${incidentId}`;
        return axios.put(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(updates)
        }).then(res => res.data)
    }

    deleteIncident(incidentId) {
        const url = `${this.baseUrl}/incidents/${incidentId}`;
        return axios.delete(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    /* Members */
    getMembers(params) {
        const searchParams = new URLSearchParams(params);
        const url = `${this.baseUrl}/members?${searchParams.toString()}`;
        return axios.get(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    getMember(memberId) {
        const url = `${this.baseUrl}/members/${memberId}`;
        return axios.get(url, {
            headers: this.getHeaders(),
        }).then(res => res.data)
    }

    createMember(member) {
        const url = `${this.baseUrl}/members`;
        return axios.post(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(member)
        }).then(res => res.data)
    }

    updateMember(memberId, updates) {
        const url = `${this.baseUrl}/members/${memberId}`;
        return axios.put(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(updates)
        }).then(res => res.data)
    }

    deleteMember(memberId) {
        const url = `${this.baseUrl}/members/${memberId}`;
        return axios.delete(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    /* Invitation */
    getInvitations(params) {
        const searchParams = new URLSearchParams(params);
        const url = `${this.baseUrl}/invitations?${searchParams.toString()}`;
        return axios.get(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    getInvitation(invitationId) {
        const url = `${this.baseUrl}/invitations/${invitationId}`;
        return axios.get(url, {
            headers: this.getHeaders(),
        }).then(res => res.data)
    }

    createInvitation(invitation) {
        const url = `${this.baseUrl}/invitations`;
        return axios.post(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(invitation)
        }).then(res => res.data)
    }

    updateInvitation(invitationId, updates) {
        const url = `${this.baseUrl}/invitations/${invitationId}`;
        return axios.put(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(updates)
        }).then(res => res.data)
    }

    deleteInvitation(invitationId) {
        const url = `${this.baseUrl}/invitations/${invitationId}`;
        return axios.delete(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    /* subscriptions */
    getSubscriptions(params) {
        const searchParams = new URLSearchParams(params);
        const url = `${this.baseUrl}/subscriptions?${searchParams.toString()}`;
        return axios.get(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }

    getSubscription(subscriptionId) {
        const url = `${this.baseUrl}/subscriptions/${subscriptionId}`;
        return axios.get(url, {
            headers: this.getHeaders(),
        }).then(res => res.data)
    }

    createSubscription(subscription) {
        const url = `${this.baseUrl}/subscriptions`;
        return axios.post(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(subscription)
        }).then(res => res.data)
    }

    updateSubscription(subscriptionId, updates) {
        const url = `${this.baseUrl}/subscriptions/${subscriptionId}`;
        return axios.put(url, {
            headers: this.getHeaders(),
            body: JSON.stringify(updates)
        }).then(res => res.data)
    }

    deleteSubscription(subscriptionId) {
        const url = `${this.baseUrl}/subscriptions/${subscriptionId}`;
        return axios.delete(url, {
            headers: this.getHeaders()
        }).then(res => res.data)
    }
}

module.exports = {
    ZStatusClient
}