import { APIMember, APIPageMemberRole } from './members';

/*
********************
 API Types
********************
*/
export type APIInvitationsResponse = APIInvitation[];

export interface CreateInvitationsResponse {
  invitation?: APIInvitation;
  member?: APIMember;
}

export interface APIInvitationDeleteResponse {
  success: boolean;
}

export interface CreateInvitationProps {
  pageId: string;
  email: string;
  role: APIPageMemberRole;
}

export interface UpdateInvitationProps {
  id: string;
  role: APIPageMemberRole;
}

export interface APIInvitation extends CreateInvitationProps {
  id: string;
  token: string;
  createdAt: string;
  updatedAt: string;
}

export interface APIInvitationSearchArgs {
  pageId: string;
}
