import { AxiosInstance } from 'axios';

export interface ApiClient extends AxiosInstance {
  update(cb: (arg: AxiosInstance['defaults']) => AxiosInstance['defaults']): void;
}

export type ApiClientOptions = {
  apiClient?: ApiClient;
  signal?: AbortSignal;
  pageParam?: number;
};
