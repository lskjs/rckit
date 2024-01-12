import { FormButton, FormItem, useSmartForm } from '@rckit/form';
import { Link } from '@rckit/link';
import React from 'react';
import { Col, Form } from 'react-bootstrap';

import { FormError } from './FormError';

export interface AuthLoginFormValues {
  email: string;
  password: string;
}
export interface AuthLoginFormProps {
  onSubmit: (values: AuthLoginFormValues) => Promise<void>;
}
export function AuthLoginForm({ onSubmit }: AuthLoginFormProps) {
  const { register, formState, onSmartSubmit } = useSmartForm<AuthLoginFormValues>({
    onSubmit,
  });

  return (
    <Form data-testid="login" onSubmit={onSmartSubmit} className="row g-3">
      <Col lg={12}>
        <FormItem id="email" label="Email" error={formState.errors.email?.message} required>
          <Form.Control
            type="email"
            {...register('email', { required: 'Email cannot be black' })}
          />
        </FormItem>
      </Col>
      <Col lg={12}>
        <div className="form-text text-end" style={{ marginBottom: -22 }}>
          <Link data-testid="restore-link" href="/auth/restore" tabIndex={-1}>
            Forgot password?
          </Link>
        </div>
        <FormItem
          id="password"
          label="Password"
          error={formState.errors.password?.message}
          required
        >
          <Form.Control
            type="password"
            {...register('password', { required: 'Password cannot be black' })}
          />
        </FormItem>
      </Col>
      <Col lg={12}>
        <FormButton formState={formState} type="submit" className="w-100">
          Sign in
        </FormButton>
      </Col>
      <FormError formState={formState} />
    </Form>
  );
}
