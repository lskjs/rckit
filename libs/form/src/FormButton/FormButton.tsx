import React from 'react';
import { Button as ReactBootstrapButton } from 'react-bootstrap';

import { useFormButtonState } from './useFormButtonState';

const templates = {
  default: {
    text: 'Submit',
    variant: 'primary',
  },
  progress: {
    text: 'Submiting...',
    variant: 'primary',
  },
  error: {
    text: 'Error',
    variant: 'danger',
  },
  success: {
    text: 'Success',
    variant: 'success',
  },
};

export const FormButton = ({ formState, children, ...props }: any) => {
  const status = useFormButtonState(formState);
  const text = templates[status || 'default']?.text || children || templates.default.text;
  const variant = templates[status || 'default']?.variant || templates.default.variant;
  return (
    <ReactBootstrapButton
      disabled={status === 'progress'}
      variant={variant}
      type="submit"
      {...props}
    >
      {text}
    </ReactBootstrapButton>
  );
};
