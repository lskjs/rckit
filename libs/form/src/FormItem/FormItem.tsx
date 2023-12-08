import React from 'react';
import { PropsWithChildren, ReactNode } from 'react';
import { Form } from 'react-bootstrap';

export interface FormItemProps {
  id: string;
  label?: string | ReactNode;
  description?: string | ReactNode | number;
  required?: boolean;
  error?: string | ReactNode | number; // | FieldError;
}

export function FormItem({
  id,
  label,
  children,
  error,
  description,
  required,
}: PropsWithChildren<FormItemProps>) {
  return (
    <Form.Group>
      {label && (
        <Form.Label htmlFor={id}>
          {label}
          {required && <span style={{ color: 'var(--bs-danger)' }}>{` *`}</span>}
        </Form.Label>
      )}
      {description && (
        <Form.Text style={{ display: 'block', marginBlockEnd: 24 }}>{description}</Form.Text>
      )}
      <div id={id} className="form-control-wrap">
        {children}
      </div>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form.Group>
  );
}
