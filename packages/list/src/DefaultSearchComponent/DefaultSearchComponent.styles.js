import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';
import { DebounceInput } from 'react-debounce-input';

export const CloseButton = styled('button')`
  width: 40px;
  height: 40px;
  border-radius: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  color: ${(p) => getTheme(p.theme, 'colors.primary')};
  cursor: pointer;

  will-change: background-color;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(p) => getTheme(p.theme, 'colors.lighterPrimary')};
  }
  > svg {
    display: flex;
  }
`;

export const Block = styled('div')`
  display: flex;
  position: relative;
  ${(p) =>
    p.block &&
    css`
      width: 100%;
    `}
`;

export const Button = styled('button')`
  display: flex;
  padding: 0;
  background: transparent;
  align-items: center;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  left: ${(p) => getTheme(p.theme, 'tablePadding')}px;
  bottom: 0;
  margin: auto 0;
  > svg {
    display: flex;
    color: ${(p) => getTheme(p.theme, 'colors.primary')};
    font-size: 24px;
  }
`;

export const Count = styled('div')`
  display: flex;
  padding: 0 16px;
  margin: auto 0 auto auto;
  align-items: center;
  flex-shrink: 0;

  opacity: 0.5;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  line-height: 1;
  text-align: right;
  color: ${(p) => getTheme(p.theme, 'colors.secondary')};
`;

const placeholderStyle = (p) => css`
  font-family: ${getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  font-weight: normal;
  line-height: 56px;
  text-align: left;
  color: #cdcdcd;
`;

export const Input = styled(DebounceInput, {
  shouldForwardProp: (prop) => !['FilterForm'].includes(prop),
})`
  width: 100%;
  height: 56px;
  padding: 0 0 0 ${(p) => `calc(${getTheme(p.theme, 'tablePadding', 0)}px + 34px)`};
  border: none;
  outline: none;
  background: none;

  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  text-align: left;
  font-weight: normal;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
  &::-webkit-input-placeholder {
    ${placeholderStyle}
  }
  &::-moz-placeholder {
    ${placeholderStyle}
  }
  &:-ms-input-placeholder {
    ${placeholderStyle}
  }
  &:-moz-placeholder {
    ${placeholderStyle}
  }
`;

export const Actions = styled('div')`
  margin-left: auto;
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

export const Action = styled('div')`
  margin-right: 6px;
  display: flex;
  align-items: center;
  ${(p) =>
    p.additional &&
    css`
      padding-left: 16px;
      margin-right: 12px;
      border-left: 1px solid ${getTheme(p.theme, 'colors.border')};
      ${!p.divide && 'border-left-color: transparent;'}

      > *:not(:last-child) {
        margin-right: 6px;
      }
    `}
`;
