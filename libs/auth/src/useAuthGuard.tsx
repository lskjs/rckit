import { isClient } from '@lsk4/env';

import { useAppSession } from './AppSession/useAppSession.js';
import { log } from './log.js';
import { Router } from './types.js';

type UseAuthGuardOptions = {
  role?: string;
  redirect?: string;
};

export const useAuthGuard = (
  router: Router,
  { role = 'user', redirect = '' }: UseAuthGuardOptions = {},
) => {
  const { session } = useAppSession();
  const user = session?.user;
  const userRole = user?.role;
  let isRedirect = false;
  let defaultRedirect;
  if (role === 'admin' && userRole !== 'admin') {
    isRedirect = true;
    // TODO: redirect to 403
    defaultRedirect = '/cabinet/forbidden';
  } else if (role === 'user' && !['user', 'admin'].includes(userRole || '')) {
    isRedirect = true;
    defaultRedirect = '/auth/login';
  } else if (role === 'guestOnly' && ['user', 'admin'].includes(userRole || '')) {
    isRedirect = true;
    defaultRedirect = '/cabinet';
  }
  // console.log('[useAuthGuard] isRedirect', { defaultRedirect, isRedirect, role, userRole });
  if (isRedirect) {
    const path = redirect || defaultRedirect || '/auth/login';
    // console.log('[useAuthGuard] redirect', path);
    const url = `${path}?r=${encodeURIComponent(router.asPath)}`;
    if (isClient) {
      router.push(url);
    } else {
      log.warn('[useAuthGuard] redirect !isClient', url);
    }
    return url;
  }
  return null;
};
