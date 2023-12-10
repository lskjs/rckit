import React, { useCallback } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import { fetchAuthSession } from '../queries/authSessionQuery';
import { Session } from '../types.js';
// import TopupBanner from '@/components/TopupBanner/TopupBanner';
import { AppSessionContext, AppSessionContextProps, defaultAppSession } from './useAppSession';

export const AppSession = ({ children }: React.PropsWithChildren) => {
  const [appSession, setAppSession] = useLocalStorageState('appSession', {
    defaultValue: defaultAppSession,
  });
  const updateSession = useCallback(
    async (data?: Session) => {
      let session = data;
      // console.log('updateSession', { data, session });
      if (!data?._id) {
        setAppSession((prev) => ({
          ...prev,
          sessionStatus: 'loading',
        }));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [appSession.sessionId, appSession.session, appSession.sessionFetchedAt],
  );
  const clearSession = useCallback(() => {
    setAppSession((prev) => ({
      ...prev,
      session: undefined,
      sessionId: undefined,
      sessionFetchedAt: undefined,
      sessionStatus: undefined,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payload: AppSessionContextProps = {
    ...appSession,
    setAppSession,
    updateSession,
    clearSession,
  };

  // if (chatsStatus.error) return `Error: ${chatsStatus.error.message}`;
  return <AppSessionContext.Provider value={payload}>{children}</AppSessionContext.Provider>;
};
