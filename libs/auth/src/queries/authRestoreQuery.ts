import { Err } from '@lsk4/err';
import type { ApiClientOptions } from '@rckit/api-client';
import { apiClient as defaultApiClient } from '@rckit/api-client';

import { Otp, Session } from '../types.js';

export interface AuthRestoreParams {
  email: string;
}
export interface AuthRestoreResponse {
  data: {
    otp: Otp;
    session: Session;
  };
}
export async function fetchAuthRestore(
  params: AuthRestoreParams,
  { apiClient = defaultApiClient }: ApiClientOptions = {},
) {
  // TODO: change any
  const { data } = await apiClient.request<any, AuthRestoreResponse>({
    method: 'post',
    url: '/api/auth/restore',
    data: params,
  });
  if (!data?.otp && !data?.session) throw new Err('incorrectBackendResponse', { data });
  return data;
}
