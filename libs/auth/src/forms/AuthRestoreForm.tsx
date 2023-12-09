import { FormButton, FormItem, useSmartForm } from '@rckit/form';
import { Link } from '@rckit/link';
import React from 'react';
import { Col, Form } from 'react-bootstrap';

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
          <Form.Control
            type="email"
            {...register('email', { required: 'Email cannot be black' })}
          />
        </FormItem>
      </Col>
      <Col lg={12}>
        <FormButton formState={formState} type="submit" className="w-100">
          Restore password
        </FormButton>
      </Col>
      {formState.errors.root && (
        <Col lg={12} className="text-center form-text text-danger">
          {formState.errors.root?.message}
        </Col>
      )}
    </Form>
  );
}
