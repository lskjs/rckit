import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('section', { shouldForwardProp: (prop) => !['padded', 'paint'].includes(prop) })`
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  ${(p) =>
    p.padded &&
    css`
      padding: 1.25rem;
    `}
  ${(p) => {
    switch (p.paint) {
      case 'light':
        return css`
          background-color: ${getTheme(p.theme, 'colors.lightGray')};
          color: ${getTheme(p.theme, 'colors.main')};
        `;
      case 'dark':
        return css`
          background-color: ${getTheme(p.theme, 'colors.black')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      case 'primary':
        return css`
          background-color: ${getTheme(p.theme, 'colors.primary')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      case 'info':
        return css`
          background-color: ${getTheme(p.theme, 'colors.info')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      case 'success':
        return css`
          background-color: ${getTheme(p.theme, 'colors.success')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      case 'warning':
        return css`
          background-color: ${getTheme(p.theme, 'colors.warning')};
          color: ${getTheme(p.theme, 'colors.main')};
        `;
      case 'danger':
        return css`
          background-color: ${getTheme(p.theme, 'colors.danger')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      default:
        return '';
    }
  }}
`;
