import { APIPage } from './pages';

/*
********************
 API Types
********************
*/
export type APIApiKeysResponse = APIApiKey[];

export interface APIApiKeyDeleteResponse {
  success: boolean;
}

export interface CreateApiKeyProps {
  pageId: string;
}

export interface APIApiKey extends CreateApiKeyProps {
  id: string;
  key: string;
  pageId: string;
  page?: APIPage;
  createdAt: string;
  updatedAt: string;
}

export interface APIApiKeySearchArgs {
  pageId: string;
}
