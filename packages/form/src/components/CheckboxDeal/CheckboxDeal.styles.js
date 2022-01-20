import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';
import A from '@lskjs/ui/A';

export const Block = styled('button')`
  display: flex;
  width: 100%;
  background: ${(p) => getTheme(p.theme, 'colors.white')};
  border: none;
  padding: 0;
  outline: none;
  align-items: center;
  padding: 18px;
  overflow: hidden;
  transition: background 0.2s ease;

  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #eeeff4;
  }
  ${(p) =>
    p.active &&
    `
    background: ${getTheme(p.theme, 'colors.mainBackground')};
  `}
`;

export const CheckBoxWrapper = styled('div')`
  display: flex;
  margin-right: 16px;
  > label {
    margin: 0 !important;
  }
`;

export const Title = styled('div')`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  flex: 1;
  text-overflow: ellipsis;
`;

export const Deal = styled(A)`
  margin-left: 4px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
`;

export const PriceWrapper = styled('div')`
  font-weight: bold;
  margin-left: 16px;
  overflow: hidden;
`;
