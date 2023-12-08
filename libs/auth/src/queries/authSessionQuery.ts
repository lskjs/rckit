import { Err } from '@lsk4/err';
import { apiClient as defaultApiClient, ApiClientOptions } from '@rckit/api-client';

import { Session } from '../types';

export interface AuthSessionParams {}
export interface AuthSessionResponse {
  data: {
    session?: Session;
  };
}

export async function fetchAuthSession(
  params: AuthSessionParams,
  { apiClient = defaultApiClient }: ApiClientOptions = {},
) {
  // TODO: change any
  const { data } = await apiClient.request<any, AuthSessionResponse>({
    method: 'post',
    url: '/api/auth/session',
    data: params,
  });
  if (!data.session) throw new Err('incorrectResponse');
  return data;
}
