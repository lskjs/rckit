import React from 'react';

// @ts-nocheck

const Wrapper = ({ children }: any) => children;
const ST = {
  Wrapper,
  Panel: Wrapper,
  PanelRow: Wrapper,
  PanelCol: Wrapper,
  Search: Wrapper,
  FilterButton: Wrapper,
  Filter: Wrapper,
  Table: Wrapper,
  TColGroup: Wrapper,
  THead: Wrapper,
  TBody: Wrapper,
  Pagination: Wrapper,
  Tabs: Wrapper,
  Tab: Wrapper,
  TabList: Wrapper,
  TabPanel: Wrapper,
};
// const ST = {
//   Wrapper({children}) => children,
//   Panel: () => null,
//   PanelRow: () => null,
//   PanelCol: () => null,
// }

export const TableLayout = () => (
  <ST.Wrapper>
    <ST.Panel>
      <ST.PanelCol>
        <ST.Search />
      </ST.PanelCol>
      <ST.PanelCol>
        <ST.FilterButton />
      </ST.PanelCol>
    </ST.Panel>
    <ST.PanelRow>
      <ST.PanelCol>
        <ST.Tabs />
      </ST.PanelCol>
    </ST.PanelRow>
    <ST.PanelRow>
      <ST.PanelCol>
        <ST.Filter />
      </ST.PanelCol>
    </ST.PanelRow>
    <ST.Table>
      <ST.TColGroup />
      <ST.THead />
      <ST.TBody />
    </ST.Table>
    <ST.Pagination />
  </ST.Wrapper>
);
