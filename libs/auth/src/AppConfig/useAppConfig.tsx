import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface AppConfigType {
  isDebug: boolean;
  theme: 'light' | 'dark';
}

export const defaultAppConfig: AppConfigType = {
  isDebug: false,
  theme: 'light',
};

export type AppConfigContextProps = AppConfigType & {
  setAppConfig: Dispatch<SetStateAction<AppConfigType>>;
};

export const AppConfigContext = createContext<AppConfigContextProps>(defaultAppConfig as any);
export const useAppConfig = () => useContext(AppConfigContext);
