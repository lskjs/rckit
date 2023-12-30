import * as interfaceIcons from '@rckit/icons/interface';
import * as logosIcons from '@rckit/icons/logos';
import React from 'react';

const primaryColor = '#0070f3';
const backgroundColor = '#eaeaea';
const darkBackgroundColor = '#333';
const Box = ({ children, style = {} }) => (
  <div
    style={{
      ...style,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '5px',
    }}
  >
    {children}
  </div>
);

const IconBox = ({ name, children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Box>{children}</Box>
      <Box style={{ fontSize: '24px', color: primaryColor }}>{children}</Box>
      <Box style={{ backgroundColor, padding: '10px' }}>{children}</Box>
      <Box style={{ backgroundColor: darkBackgroundColor, color: '#fff' }}>{children}</Box>
    </div>
    <div style={{ marginTop: '10px' }}>{name}</div>
  </div>
);
const Icons = ({ title, icons }) => (
  <>
    <h2>{title}</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '10px',
        width: 1000,
      }}
    >
      {Object.entries(icons).map(([name, IconComponent]) => (
        <IconBox key={name} name={name}>
          <IconComponent />
        </IconBox>
      ))}
    </div>
  </>
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'rckit/icons',
  // component: ArrowDownIcon,
  component: () => (
    <>
      <Icons title="Interface" icons={interfaceIcons} />
      <Icons title="Logos" icons={logosIcons} />
    </>
  ),
  // <RefreshIcon />
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
