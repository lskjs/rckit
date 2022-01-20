import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.375rem 0.6rem;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  display: inline-block;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  ${(p) =>
    p.pill &&
    css`
      padding-right: 0.6em;
      padding-left: 0.6em;
      border-radius: 10rem;
    `}
  ${(p) =>
    p.primary &&
    css`
      color: ${getTheme(p.theme, 'colors.white')};
      background-color: #1890ff;
    `}
`;
