/* eslint import/no-extraneous-dependencies: 0 */
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div', { shouldForwardProp: (prop) => !['align'].includes(prop) })`
  padding: 12px 16px 32px;
  position: relative;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  text-align: ${(props) => props.align};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => {
    switch (props.align) {
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
      default:
        return 'flex-start';
    }
  }};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: -0.1px;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
  background-color: ${(p) => getTheme(p.theme, 'colors.darkerBackground')};

  > * {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;
