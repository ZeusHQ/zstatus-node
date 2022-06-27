export interface OrderArgs {
  field?: string;
  direction?: OrderDirection;
}

export type OrderDirection = 'desc' | 'asc';

export interface APIPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
}

export interface PaginatedResponse<T> {
  edges: T[];
  totalCount: number;
  pageInfo: APIPageInfo;
}

export interface APINode<T> {
  cursor: string;
  node: T;
}

export interface APIOrderByArgs {
  orderBy?: string;
  orderDirection?: string;
}

export interface APIPaginationArgs {
  skip?: number;
  take?: number;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}
