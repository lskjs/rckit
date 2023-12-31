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
  const status = useFormButtonState(formState) || 'default';
  const template = templates[status] || templates.default;
  const text = children || template.text || templates.default.text;
  const variant = template?.variant || templates.default.variant;
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
