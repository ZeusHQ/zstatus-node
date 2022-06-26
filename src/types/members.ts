import { APIUser } from './auth';
import { APIPage } from './pages';

export enum APIPageMemberRole {
  OWNER = 'OWNER',
  MEMBER = 'MEMBER',
  EDITOR = 'EDITOR',
  READONLY = 'READONLY',
}

/*
********************
 API Types
********************
*/
export type APIMembersResponse = APIMember[];

export interface APIMemberDeleteResponse {
  success: boolean;
}

export interface CreateMemberProps {
  pageId: string;
  userId: string;
  role: APIPageMemberRole;
}

export interface UpdateMemberProps {
  id: string;
  role: APIPageMemberRole;
}

export interface APIMember extends CreateMemberProps {
  id: string;
  userId: string;
  pageId: string;
  page?: APIPage;
  user?: APIUser;
  createdAt: string;
  updatedAt: string;
}

export interface APIMemberSearchArgs {
  pageId: string;
}
