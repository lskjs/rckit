import { Err } from '@lsk4/err';
import { apiClient as defaultApiClient, ApiClientOptions } from '@rckit/api-client';

import { Session } from '../types';

export interface AuthOtpActivateParams {
  otpId: string;
  code: string;
}
export interface AuthOtpActivateResponse {
  data: {
    session: Session;
  };
}

export async function fetchAuthOtpActivate(
  params: AuthOtpActivateParams,
  { apiClient = defaultApiClient }: ApiClientOptions = {},
) {
  // TODO: change any
  const { data } = await apiClient.request<any, AuthOtpActivateResponse>({
    method: 'post',
    url: '/api/auth/otp/activate',
    data: params,
  });
  if (!data?.session) throw new Err('incorrectResponse');
  return data;
}
