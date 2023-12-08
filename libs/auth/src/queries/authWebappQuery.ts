import { Err } from '@lsk4/err';
import { apiClient as defaultApiClient, ApiClientOptions } from '@rckit/api-client';

import { Otp, Session } from '../types';

export interface AuthWebappSignupParams {
  email: string;
  tos: boolean;
  telegramInitData?: any;
}
export interface AuthWebappSignupResponse {
  data: {
    otp?: Otp;
    session?: Session;
  };
}
export async function fetchAuthWebappSignup(
  params: AuthWebappSignupParams,
  { apiClient = defaultApiClient }: ApiClientOptions = {},
) {
  // TODO: change any
  const { data } = await apiClient.request<any, AuthWebappSignupResponse>({
    method: 'post',
    url: '/api/auth/webapp/signup',
    data: params,
  });
  if (!data?.otp && !data.session) throw new Err('incorrectResponse');
  return data;
}
