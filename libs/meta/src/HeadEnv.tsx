import React from 'react';

type HeadEnvProps = {
  isDev: boolean;
  [key: string]: any;
};

export const HeadEnv = ({ isDev, ...props }: HeadEnvProps) => (
  <script
    dangerouslySetInnerHTML={{
      __html: [
        `window.__DEV__ = Boolean(${isDev})`,
        `window.env = ${JSON.stringify({ isDev, ...props })}`,
      ]
        .filter(Boolean)
        .join(';'),
    }}
  />
);
