/* eslint-disable prefer-destructuring */
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { Router, Session } from '../types.js';

export interface AppSessionType {
  sessionId?: string;
  session?: Session;
  sessionStatus?: string;
  sessionInitedAt?: number;
  sessionLoadingAt?: number;
  sessionFetchedAt?: number;
}

export const defaultAppSession: AppSessionType = {
  sessionStatus: 'init',
  sessionInitedAt: Date.now(),
};

export type AppSessionContextProps = AppSessionType & {
  updateSession: (session?: Session) => void;
  updateSessionWithRedirect: (
    session: Session | null,
    router: Router,
    path?: string | string[],
  ) => void;
  clearSession: () => void;
  setAppSession: Dispatch<SetStateAction<AppSessionType>>;
};

// @ts-ignore
export const AppSessionContext = createContext<AppSessionContextProps>(defaultAppSession);
export const useAppSession = () => useContext(AppSessionContext);
