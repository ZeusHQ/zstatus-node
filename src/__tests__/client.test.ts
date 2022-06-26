import ZStatusClient from '../client';

test('My API Client', () => {
  const config = {
    apiKey: 'test',
  };
  const client = new ZStatusClient(config);

  expect(client.baseUrl).toBe('https://zstatus.io/api/v0');
  expect(client.apiKey).toBe('test');

  expect(client.getHeaders()).toEqual({
    'content-type': 'application/json',
    'x-api-key': 'test',
  });

  expect(client.getIncident).not.toBeUndefined();
  expect(client.getIncidents).not.toBeUndefined();
  expect(client.getService).not.toBeUndefined();
  expect(client.getServices).not.toBeUndefined();
  expect(client.getMember).not.toBeUndefined();
  expect(client.getMembers).not.toBeUndefined();
  expect(client.getInvitation).not.toBeUndefined();
  expect(client.getInvitations).not.toBeUndefined();
  expect(client.getServiceGroup).not.toBeUndefined();
  expect(client.getServiceGroup).not.toBeUndefined();
  expect(client.getSubscription).not.toBeUndefined();
  expect(client.getSubscriptions).not.toBeUndefined();
});
