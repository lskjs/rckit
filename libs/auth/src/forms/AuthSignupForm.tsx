import { FormButton, FormItem, useSmartForm } from '@rckit/form';
import { Link } from '@rckit/link';
import React from 'react';
import { Col, Form } from 'react-bootstrap';

import { errors } from '../errors';
import { FormError } from './FormError';

export interface AuthSignupFormValues {
  email: string;
  password: string;
  tos: boolean;
}
export interface AuthSignupFormProps {
  onSubmit: (values: AuthSignupFormValues) => Promise<void>;
}
export function AuthSignupForm({ onSubmit }: AuthSignupFormProps) {
  const { register, formState, onSmartSubmit } = useSmartForm<AuthSignupFormValues>({
    onSubmit,
  });

  return (
    <Form data-testid="signup-form" onSubmit={onSmartSubmit} className="row g-3">
      <Col lg={12}>
        <FormItem id="email" label="Email" error={formState.errors.email?.message} required>
          <Form.Control
            type="email"
            // placeholder="youremail@example.com"
            {...register('email', { required: errors.blankEmail })}
          />
        </FormItem>
      </Col>
      <Col lg={12}>
        <FormItem
          id="password"
          label="Password"
          error={formState.errors.password?.message}
          required
        >
          <Form.Control
            type="password"
            // placeholder="password"
            {...register('password', { required: errors.blankPassword })}
          />
        </FormItem>
      </Col>
      <Col lg={12}>
        <Form.Group>
          <Form.Check
            type="checkbox"
            id="tos"
            label={
              <span>
                I agree to the{' '}
                <Link
                  data-testid="tos-link"
                  href="/links/tos"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                >
                  Terms of Service
                </Link>
              </span>
            }
            isInvalid={Boolean(formState.errors.tos)}
            {...register('tos', { required: errors.blankTos })}
          />
          {formState.errors.tos && (
            <Form.Text data-testid="tos-error" className="text-danger">
              {formState.errors.tos?.message}
            </Form.Text>
          )}
        </Form.Group>
      </Col>
      <Col lg={12}>
        <FormButton formState={formState} type="submit" className="w-100">
          Sign up
        </FormButton>
      </Col>
      <FormError formState={formState} />
    </Form>
  );
}
