import Link from 'next/link';
import { Col, Form } from 'react-bootstrap';

import { FormButton, FormItem, useSmartForm } from '@/rckit/form';

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
        <div className="form-text text-end" style={{ marginBottom: -22 }}>
          <Link href="/auth/restore" tabIndex={-1}>
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
          Account Login
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
