/* eslint-disable max-len */
import React from 'react';

const CircleBlank = (props) => (
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    height="1em"
    width="1em"
    viewBox="0 0 24 24"
    style={{ verticalAlign: 'middle' }}
    {...props}
  >
    <g>
      <path
        strokeWidth="0.2"
        strokeLinejoin="round"
        d="M 11.9994,19.9981C 7.58139,19.9981 3.99939,16.4161 3.99939,11.9981C 3.99939,7.58007 7.58139,3.99807 11.9994,3.99807C 16.4174,3.99807 19.9994,7.58007 19.9994,11.9981C 19.9994,16.4161 16.4174,19.9981 11.9994,19.9981 Z M 11.9994,1.99807C 6.47638,1.99807 1.99939,6.47507 1.99939,11.9981C 1.99939,17.5211 6.47638,21.9981 11.9994,21.9981C 17.5224,21.9981 21.9994,17.5211 21.9994,11.9981C 21.9994,6.47507 17.5224,1.99807 11.9994,1.99807 Z "
      />
    </g>
  </svg>
);

export default CircleBlank;
