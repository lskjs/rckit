import { Debug } from '@rckit/debug';
import React from 'react';

export const LoadingScreen = ({ enable, debug, children }: React.PropsWithChildren<any>) => (
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
      <Debug json={debug} />
    </div>
  </div>
);
