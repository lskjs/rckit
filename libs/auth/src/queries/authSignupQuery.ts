import { Err } from '@lsk4/err';
import type { ApiClientOptions } from '@rckit/api-client';
import { apiClient as defaultApiClient } from '@rckit/api-client';

import { Otp, Session } from '../types.js';

export interface AuthSignupParams {
  email: string;
  password: string;
}
export interface AuthSignupResponse {
  data: {
    otp: Otp;
    session: Session;
  };
}

export async function fetchAuthSignup(
  params: AuthSignupParams,
  { apiClient = defaultApiClient }: ApiClientOptions = {},
) {
  // TODO: change any
  const { data } = await apiClient.request<any, AuthSignupResponse>({
    method: 'post',
    url: '/api/auth/signup',
    data: params,
  });
  if (!data?.otp && !data?.session) throw new Err('incorrectBackendResponse', { data });
  return data;
}
