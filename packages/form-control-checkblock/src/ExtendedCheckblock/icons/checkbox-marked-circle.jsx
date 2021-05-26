/* eslint-disable max-len */
import React from 'react';

const CircleMarked = (props) => (
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
        d="M 9.99939,16.9981L 4.99939,11.9981L 6.41339,10.5841L 9.99939,14.1701L 17.5854,6.58407L 18.9994,7.99807M 11.9994,1.99807C 6.47639,1.99807 1.99939,6.47507 1.99939,11.9981C 1.99939,17.5211 6.47639,21.9981 11.9994,21.9981C 17.5214,21.9981 21.9994,17.5211 21.9994,11.9981C 21.9994,6.47507 17.5214,1.99807 11.9994,1.99807 Z "
      />
    </g>
  </svg>
);

export default CircleMarked;
