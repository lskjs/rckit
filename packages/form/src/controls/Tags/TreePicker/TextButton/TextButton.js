import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('button')`
  font-family: 'Gotham Pro', Helvetica, Arial;
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: -0.1px;
  color: ${(p) => getTheme(p.theme, 'colors.primary')};
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  outline: none;

  transition: color 0.2s ease;
  will-change: color;

  &:hover {
    color: #5959c1;
  }
`;
