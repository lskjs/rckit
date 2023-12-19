import type { ApiClientOptions } from '@rckit/api-client';
import { apiClient as defaultApiClient } from '@rckit/api-client';

export interface AuthLogoutResponse {
  data: Record<string, unknown>;
}

export async function fetchAuthLogout({ apiClient = defaultApiClient }: ApiClientOptions = {}) {
  // TODO: change any
  const { data } = await apiClient.request<any, AuthLogoutResponse>({
    method: 'post',
    url: '/api/auth/logout',
  });
  return data;
}
