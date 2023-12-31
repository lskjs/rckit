import { omitNull } from '@lsk4/algos';
import { isDev, isServer } from '@lsk4/env';
import { Err } from '@lsk4/err';
import { createLogger } from '@lsk4/log';
import axios from 'axios';

// import { serverBaseURL } from '@/config/config';
import { ApiClient } from './types';

const isDebug = isDev;
const log = createLogger('api', {
  level: isDebug ? 'debug' : 'info',
});

export function createApiClient({ baseURL }: { baseURL?: string } = {}): ApiClient {
  // eslint-disable-next-line no-nested-ternary
  // const baseURL = isServer ? '???????????? serverBaseURL ??????????????' : null; // isDev ? '/' : clientBaseURL;

  // console.log({ baseURL });
  const instance = axios.create(
    omitNull({
      baseURL,
      withCredentials: true,
      headers: isServer ? { Accept: 'application/json', 'Accept-Encoding': 'identity' } : null,
    }),
  ) as ApiClient;

  instance.interceptors.request.use(
    (config) => {
      log.debug('req', ...[config.url, config.params, config.data].filter(Boolean));
      if (isServer && !baseURL) throw new Err('!baseURL', 'baseURL is required on server');
      return config;
    },
    (err) => {
      log.error('req', err);
      return err;
    },
  );

  instance.interceptors.response.use(
    (response) => {
      const data = response.data ?? response;
      log.trace('res', response?.config?.url, data);
      return data;
    },
    (err) => {
      const code = Err.getCode(err);
      if (code === 'ERR_CANCELED') {
        log.warn('[canceled]', err?.config?.url);
      } else {
        // log.error('[err]', Err.getCode(err), err);
        log.error('res', ...[code, err?.config?.url, Err.getMessage(err)].filter(Boolean));
      }
      // log.error('[err]', Err.getCode(err), err?.response?.request);
      throw new Err(err?.response?.data?.code ? err?.response?.data : err);
      // log.trace('axios response err', err);
      // return err?.response?.data ?? err;
    },
  );

  instance.update = (cb) => {
    const newOptions = cb(instance.defaults);
    instance.defaults = newOptions;
  };

  return instance;
}

export default createApiClient;
