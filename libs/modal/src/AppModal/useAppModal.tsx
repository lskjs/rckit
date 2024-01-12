import React, { createContext, useContext } from 'react';

export interface ModalProps {
  wrapper?: React.ComponentType<any>;
  wrapperProps?: Record<string, any>;
  title?: string | React.ReactNode;
  body?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  size?: 'sm' | 'lg' | 'xl';
  centered?: boolean;
  closable?: boolean;
}

export interface AppModalType {}

export const defaultAppModal: AppModalType = {};

export type AppModalContextProps = AppModalType & {
  // openLightbox?: (props: any) => void;
  openModal: (props: ModalProps) => void;
  closeModal: () => void;
};

export const AppModalContext = createContext<AppModalContextProps>(defaultAppModal as any);
export const useAppModal = () => useContext(AppModalContext);
