import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Header = styled('div')`
  width: 278px;
  background-color: ${(p) => getTheme(p.theme, 'colors.lighterPrimary')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

export const Radio = styled('div')`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
  color: white;
  border: 2px solid #d7e2f9;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    display: flex;
    font-size: 16px;
  }
`;

export const Icon = styled('div')`
  color: #c5d6e8;
  font-size: 64px;
`;

export const Info = styled('div')`
  background-color: white;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  height: 84px;
`;

export const Title = styled('b')`
  font-size: 13px;
  line-height: 1.43;
  letter-spacing: -0.1px;
  text-align: left;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
  font-weight: normal;
  margin-bottom: 6px;
`;

export const Desc = styled('p')`
  font-size: 13px;
  line-height: 1.43;
  letter-spacing: -0.1px;
  text-align: left;
  color: ${(p) => getTheme(p.theme, 'colors.secondary')};
  margin: 0;
`;

export const Block = styled('button')`
  width: 280px;
  height: 200px;
  background-color: ${(p) => getTheme(p.theme, 'colors.white')};
  border: solid 1px ${(p) => getTheme(p.theme, 'colors.border')};
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 0;
  cursor: pointer;
  ${(p) =>
    p.checked &&
    `
    border-color: ${getTheme(p.theme, 'colors.primary')};
    ${Radio} {
      border: none;
      background-color: ${getTheme(p.theme, 'colors.primary')};
    }
  `}
  ${(p) => {
    switch (p.validationState) {
      case 'error':
        return `
          border-color: #da4c5a;
        `;
      default:
        return '';
    }
  }}
`;
