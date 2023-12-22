import { Err } from '@lsk4/err';
import type { ApiClientOptions } from '@rckit/api-client';
import { apiClient as defaultApiClient } from '@rckit/api-client';

export interface AuthResetPasswordParams {
  otpId: string;
  code: string;
  newPassword: string;
}

export interface AuthResetPasswordResponse {
  data: boolean;
}

export async function fetchAuthResetPassword(
  params: AuthResetPasswordParams,
  { apiClient = defaultApiClient }: ApiClientOptions = {},
) {
  // TODO: change any
  const { data } = await apiClient.request<any, AuthResetPasswordResponse>({
    method: 'post',
    url: '/api/auth/resetPassword',
    data: params,
  });
  if (typeof data !== 'boolean') throw new Err('incorrectBackendResponse', { data });
  return data;
}
