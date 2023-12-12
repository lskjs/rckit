import { isDev } from '@lsk4/env';
import { createLogger } from '@lsk4/log';
import { ComponentContext } from '@rckit/link';
import React, { useCallback, useContext } from 'react';
import ulss from 'use-local-storage-state';

import { fetchAuthSession } from '../queries/authSessionQuery.js';
import { Router, Session } from '../types.js';
// import TopupBanner from '@/components/TopupBanner/TopupBanner';
import {
  AppSessionContext,
  AppSessionContextProps,
  AppSessionType,
  defaultAppSession,
} from './useAppSession.js';
// @ts-ignore
const useLocalStorageState: typeof ulss = ulss.default || ulss;

const Loading = ({ enable, children }: React.PropsWithChildren<any>) => (
  <div
    style={{
      display: enable ? 'flex' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255,255,255,0.8)',
      zIndex: 99999,
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
        zIndex: 99999,
      }}
    >
      {children}
    </div>
  </div>
);

const initAt = Date.now();
const log = createLogger('auth');
export const AppSession = ({ children }: React.PropsWithChildren) => {
  const [appSession, setAppSession] = useLocalStorageState('appSession', {
    defaultValue: defaultAppSession as AppSessionType,
  });
  const updateSession = useCallback(
    async (data?: Session) => {
      try {
        let session = data;
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
      } catch (err) {
        log.error('[updateSession]', err);
        throw err;
      }
    },
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    [appSession.sessionId, appSession.session, appSession.sessionFetchedAt],
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

  const components = useContext(ComponentContext) as any;
  const updateSessionWithRedirect = useCallback(
    async (session: Session | null, router: Router, path?: string | string[]) => {
      const redirect = (Array.isArray(path) ? path[0] : path) || '/';
      if (router) {
        router.push(redirect);
      } else {
        log.warn('[redirect] !router', redirect);
      }
      if (session === null) {
        clearSession();
      } else {
        updateSession(session);
      }
    },
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    [appSession.sessionId, components],
  );

  const payload: AppSessionContextProps = {
    ...appSession,
    setAppSession,
    updateSession,
    updateSessionWithRedirect,
    clearSession,
  };

  // Всё что ниже какая-та слишком сложная логика, для этого компонента

  const { sessionStatus, sessionFetchedAt, sessionLoadingAt } = appSession;
  const expiredTime = isDev ? 1000 * 60 : 1000 * 60 * 5;
  const isExpired = (date: any, time = expiredTime) => +new Date(+date) < Date.now() - time;
  // * 60 * 24
  // console.log('[sessionStatus]', sessionStatus, { appSession });

  let loadingText;
  // if (sessionStatus === 'init') {
  //   loadingText = 'Init session...';
  //   // updateSession();
  //   console.log('initAt', initAt);
  //   console.log('appSession', appSession);
  // } else
  if (sessionStatus === 'loading') {
    if (isExpired(sessionLoadingAt) || +(sessionLoadingAt || 0) < initAt) {
      updateSession();
      loadingText = 'Updating session...';
    } else if (!sessionFetchedAt) {
      loadingText = 'Loading session...';
    }
  } else if (sessionStatus === 'fetched') {
    if (isExpired(sessionFetchedAt)) {
      updateSession();
      loadingText = 'Updating session...';
    }
  }
  // if (chatsStatus.error) return `Error: ${chatsStatus.error.message}`;
  return (
    <AppSessionContext.Provider value={payload}>
      <Loading enable={!!loadingText}>{loadingText}</Loading>
      {children}
    </AppSessionContext.Provider>
  );
};
