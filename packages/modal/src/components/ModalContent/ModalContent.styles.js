/* eslint import/no-extraneous-dependencies: 0 */
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div', { shouldForwardProp: (prop) => !['align', 'size'].includes(prop) })`
  padding: ${(props) => {
    switch (props.size) {
      case 'large':
        return '32px 16px 24px';
      default:
        return '16px 16px 16px';
    }
  }};
  position: relative;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  text-align: ${(props) => props.align};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => {
    switch (props.align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
      default:
        return 'auto';
    }
  }};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: -0.1px;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
`;
