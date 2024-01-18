import { FormButton, FormItem, useSmartForm } from '@rckit/form';
import React from 'react';
import { Col, Form } from 'react-bootstrap';

import { errors } from '../errors';
import { FormError } from './FormError';

export interface AuthRestoreFormValues {
  email: string;
}
export interface AuthRestoreFormProps {
  onSubmit: (values: AuthRestoreFormValues) => Promise<void>;
}
export function AuthRestoreForm({ onSubmit }: AuthRestoreFormProps) {
  const { register, formState, onSmartSubmit } = useSmartForm<AuthRestoreFormValues>({
    onSubmit,
  });

  return (
    <Form onSubmit={onSmartSubmit} className="row g-3">
      <Col lg={12}>
        <FormItem id="email" label="Email" error={formState.errors.email?.message} required>
          <Form.Control type="email" {...register('email', { required: errors.blankEmail })} />
        </FormItem>
      </Col>
      <Col lg={12}>
        <FormButton formState={formState} type="submit" className="w-100">
          Send Reset Instructions
        </FormButton>
      </Col>
      <FormError formState={formState} />
    </Form>
  );
}
