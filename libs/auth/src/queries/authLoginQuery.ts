import { Err } from '@lsk4/err';
import { apiClient as defaultApiClient, ApiClientOptions } from '@rckit/api-client';

import { Otp, Session } from '../types';

export interface AuthLoginParams {
  email: string;
  password: string;
}
export interface AuthLoginResponse {
  data: {
    otp: Otp;
    session: Session;
  };
}
export async function fetchAuthLogin(
  params: AuthLoginParams,
  { apiClient = defaultApiClient }: ApiClientOptions = {},
) {
  // TODO: change any
  const { data } = await apiClient.request<any, AuthLoginResponse>({
    method: 'post',
    url: '/api/auth/login',
    data: params,
  });
  if (!data?.otp && !data.session) throw new Err('incorrectResponse');
  return data;
}