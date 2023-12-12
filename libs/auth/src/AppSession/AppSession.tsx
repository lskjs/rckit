import { isDev } from '@lsk4/env';
import { ComponentContext } from '@rckit/link';
import React, { useCallback, useContext } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import { fetchAuthSession } from '../queries/authSessionQuery.js';
import { Session } from '../types.js';
// import TopupBanner from '@/components/TopupBanner/TopupBanner';
import {
  AppSessionContext,
  AppSessionContextProps,
  AppSessionType,
  defaultAppSession,
} from './useAppSession.js';

const initAt = Date.now();

export const AppSession = ({ children }: React.PropsWithChildren) => {
  const [appSession, setAppSession] = useLocalStorageState('appSession', {
    defaultValue: { sessionStatus: 'init', ...defaultAppSession } as AppSessionType,
  });
  const updateSession = useCallback(
    async (data?: Session) => {
      let session = data;
      // console.log('updateSession', { data, session });
      if (!data?._id) {
        setAppSession((prev) => ({
          ...prev,
          sessionStatus: 'loading',
          sessionLoadingAt: Date.now(),
        }));
        // TODO: может случится такое что запрос упадет и будет вечный лоадинг, нужно придумать как обработать
        ({ session } = await fetchAuthSession({}));
      }
      setAppSession((prev) => ({
        ...prev,
        session,
        sessionId: session?._id,
        sessionFetchedAt: Date.now(),
        sessionStatus: 'fetched',
      }));
    },
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    [appSession.sessionId, appSession.session, appSession.sessionFetchedAt],
  );

  const components = useContext(ComponentContext) as any;
  const updateSessionWithRedirect = useCallback(
    async (data?: Session, path?: string) => {
      const redirect = (Array.isArray(path) ? path : path) || '/';
      if (components?.Router?.useRouter) {
        const router = components?.Router?.useRouter();
        router.push(redirect);
        updateSession(data);
      }
    },
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    [appSession.sessionId, components],
  );
  const clearSession = useCallback(() => {
    setAppSession((prev) => ({
      ...prev,
      session: undefined,
      sessionId: undefined,
      sessionLoadingAt: undefined,
      sessionFetchedAt: undefined,
      sessionStatus: undefined,
    }));
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payload: AppSessionContextProps = {
    ...appSession,
    setAppSession,
    updateSession,
    updateSessionWithRedirect,
    clearSession,
  };

  // Всё что ниже какая-та слишком сложная логика, для этого компонента

  const { sessionStatus, sessionFetchedAt, sessionLoadingAt } = appSession;
  const isExpired = (date: any, time = isDev ? 1000 * 60 : 1000 * 60 * 5) =>
    +new Date(+date) < Date.now() - time;
  // * 60 * 24
  // console.log('[sessionStatus]', sessionStatus, { appSession });
  if (sessionStatus === 'init') return <div>Init session...</div>;
  if (sessionStatus === 'loading') {
    if (isExpired(sessionLoadingAt) || +(sessionLoadingAt || 0) < initAt) {
      updateSession();
      return <div>Updating session...</div>;
    }
    return <div>Loading session...</div>;
  }
  if (sessionStatus === 'fetched') {
    if (isExpired(sessionFetchedAt)) {
      updateSession();
      return <div>Updating session...</div>;
    }
  }

  // if (chatsStatus.error) return `Error: ${chatsStatus.error.message}`;
  return <AppSessionContext.Provider value={payload}>{children}</AppSessionContext.Provider>;
};
