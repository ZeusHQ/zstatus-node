# zstatus-node

## Install
`npm i zstatus-node` or `yarn add zstatus-node`

## Create an API Client
Create an API key for your page on the Api Keys tab of your page management dashboard.
```
const api = new ZStatusClient({
  apiKey: "[API_KEY]"
});
```

## Pagination
ZStatus uses cursor based pagination with the following param structure:

```
interface APIPaginationArgs {
  skip?: number;
  take?: number;
  after?: string; // record ID or cursor
  before?: string; // record ID or cursor
  first?: number;
  last?: number;
}
```

## Search a resource
```
const services = await api.getServices({ })
```

Searches will return the following paginated response structure:

```
interface PaginatedResponse<T> {
  edges: APINode<T>[];
  totalCount: number;
  pageInfo: APIPageInfo;
}

interface APINode<T> {
  cursor: string;
  node: T;
}

interface APIPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
}
```

## Get a resource record
```
const services = await api.getService("cl4ws9q7e0213tovc0kd5rl8m")
```

## Create a resource record
```
const service = await api.createService({ 
  name: "API"
})
```

## Update a resource record
```
const service = await api.updateService("cl4ws9q7e0213tovc0kd5rl8m", { 
  name: "Frontend"
})
```

## Delete a resource record
```
const result = await api.deleteService("cl4ws9q7e0213tovc0kd5rl8m")
```
  
  
 # Resources
 - ApiKey
 - Incident
 - Integration
 - Invitation
 - Member
 - Service
 - ServiceGroup
 - StatusOption
 - Subscription
