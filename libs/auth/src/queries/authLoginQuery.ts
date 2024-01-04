import { Err } from '@lsk4/err';
import type { ApiClientOptions } from '@rckit/api-client';
import { apiClient as defaultApiClient } from '@rckit/api-client';

import { Otp, Session } from '../types.js';

export interface AuthLoginParams {
  email: string;
  password: string;
}
export interface AuthLoginResponse {
  otp: Otp;
  session: Session;
}
export async function fetchAuthLogin(
  params: AuthLoginParams,
  { apiClient = defaultApiClient }: ApiClientOptions = {},
) {
  const { data } = await apiClient.request<AuthLoginResponse>({
    method: 'post',
    url: '/api/auth/login',
    data: params,
  });
  if (!data?.otp && !data?.session) throw new Err('incorrectBackendResponse', { data });
  return data;
}
