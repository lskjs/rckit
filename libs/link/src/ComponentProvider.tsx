import React, { createContext } from 'react';

const Link = 'a';
const Image = 'img';

export const ComponentContext = createContext({
  Link,
  Image,
});
type ComponentProviderProps = React.PropsWithChildren<{
  Link: any;
  Image: any;
}>;

// eslint-disable-next-line no-shadow
export const ComponentProvider = ({ Link, Image, children }: ComponentProviderProps) => (
  <ComponentContext.Provider value={{ Link, Image }}>{children}</ComponentContext.Provider>
);
