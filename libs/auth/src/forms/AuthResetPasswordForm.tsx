import { FormButton, FormItem, useSmartForm } from '@rckit/form';
import React from 'react';
import { Col, Form } from 'react-bootstrap';

import { FormError } from './FormError';

export interface AuthResetPasswordFormValues {
  otpId: string;
  code: string;
  newPassword: string;
}
export interface AuthResetPasswordFormProps {
  defaultValues?: Partial<AuthResetPasswordFormValues>;
  onSubmit: (values: AuthResetPasswordFormValues) => Promise<void>;
}
export function AuthResetPasswordForm({ defaultValues, onSubmit }: AuthResetPasswordFormProps) {
  const { register, formState, onSmartSubmit } = useSmartForm<AuthResetPasswordFormValues>({
    onSubmit,
    defaultValues,
  });

  return (
    <Form data-testid="reset" onSubmit={onSmartSubmit} className="row g-3">
      <Col lg={12}>
        <Form.Control type="hidden" {...register('otpId')} />
        <FormItem id="code" label="Code" error={formState.errors.code?.message} required>
          <Form.Control type="code" {...register('code', { required: 'Code cannot be blank' })} />
        </FormItem>
        <FormItem
          id="password"
          label="New password"
          error={formState.errors.newPassword?.message}
          required
        >
          <Form.Control
            type="password"
            {...register('newPassword', { required: 'Password cannot be black' })}
          />
        </FormItem>
      </Col>
      <Col lg={12}>
        <FormButton formState={formState} type="submit" className="w-100">
          Reset password
        </FormButton>
      </Col>
      <FormError formState={formState} />
    </Form>
  );
}
