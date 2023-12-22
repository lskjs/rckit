import { Err } from '@lsk4/err';
import type { ApiClientOptions } from '@rckit/api-client';
import { apiClient as defaultApiClient } from '@rckit/api-client';

export interface AuthRestoreParams {
  email: string;
}
export interface AuthRestoreResponse {
  data: boolean;
}
export async function fetchAuthRestore(
  params: AuthRestoreParams,
  { apiClient = defaultApiClient }: ApiClientOptions = {},
) {
  // TODO: change any
  const { data } = await apiClient.request<any, AuthRestoreResponse>({
    method: 'post',
    url: '/api/auth/resetPassword/request',
    data: params,
  });
  if (typeof data !== 'boolean') throw new Err('incorrectBackendResponse', { data });
  return data;
}
