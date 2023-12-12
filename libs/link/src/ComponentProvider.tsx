import React, { createContext } from 'react';

const Router = null;
const Link = 'a';
const Image = 'img';

export const ComponentContext = createContext({
  Router,
  Link,
  Image,
});
type ComponentProviderProps = React.PropsWithChildren<{
  Router: any;
  Link: any;
  Image: any;
}>;

// eslint-disable-next-line no-shadow
export const ComponentProvider = ({ children, ...value }: ComponentProviderProps) => (
  <ComponentContext.Provider value={value}>{children}</ComponentContext.Provider>
);
