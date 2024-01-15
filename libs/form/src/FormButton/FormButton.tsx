import React from 'react';
import { Button as ReactBootstrapButton } from 'react-bootstrap';

import { ProgressIcon } from '../icons/ProgressIcon';
import { useFormButtonState } from './useFormButtonState';

const templates = {
  default: {
    text: 'Submit',
    variant: 'primary',
  },
  progress: {
    text: <ProgressIcon width="24" height="24" />,
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
  const text = status === 'default' ? children || templates.default.text : template.text;
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
