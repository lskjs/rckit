/* eslint-disable prefer-destructuring */
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { Session } from '../types.js';

export interface AppSessionType {
  sessionId?: string;
  session?: Session;
  sessionStatus?: string;
  sessionLoadingAt?: number;
  sessionFetchedAt?: number;
}

export const defaultAppSession: AppSessionType = {};

export type AppSessionContextProps = AppSessionType & {
  updateSession: (session?: Session) => void;
  updateSessionWithRedirect: (session?: Session, path?: string) => void;
  clearSession: () => void;
  setAppSession: Dispatch<SetStateAction<AppSessionType>>;
};

// @ts-ignore
export const AppSessionContext = createContext<AppSessionContextProps>(defaultAppSession);
export const useAppSession = () => useContext(AppSessionContext);
